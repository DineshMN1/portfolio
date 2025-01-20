import { promises as fs } from 'fs';
import path from 'path';

async function getNoteSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });

  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx') // Filters files with the name 'page.mdx'
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name) // Uses entry.parentPath correctly
      );
      return path.dirname(relativePath); // Extracts the directory name (slug)
    })
    .map((slug) => slug.replace(/\\/g, '/')); // Fixes backslashes for Windows paths
}

export default async function sitemap() {
  const notesDirectory = path.join(process.cwd(), 'app', 'n'); // Your notes directory
  const slugs = await getNoteSlugs(notesDirectory); // Fetch slugs

  const notes = slugs.map((slug) => ({
    url: `https://leerob.com/n/${slug}`,
    lastModified: new Date().toISOString(), // Sets the lastModified date
  }));

  const routes = ['', '/work'].map((route) => ({
    url: `https://leerob.com${route}`, // Additional routes
    lastModified: new Date().toISOString(), // Sets the lastModified date for these routes
  }));

  return [...routes, ...notes]; // Combines routes and notes into one array for the sitemap
}
