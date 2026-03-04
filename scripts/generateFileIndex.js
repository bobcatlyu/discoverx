import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docDir = path.join(__dirname, '..', 'public', 'doc');
const outputFile = path.join(__dirname, '..', 'utils', 'fileIndex.ts');

function getAllPdfFiles(dir, baseDir = dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllPdfFiles(fullPath, baseDir));
    } else if (item.endsWith('.pdf')) {
      const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      const category = relativePath.includes('user_manual') ? 'user_manual' : 'datasheet';
      files.push({
        filename: item,
        path: `/doc/${relativePath}`,
        category
      });
    }
  }

  return files;
}

const files = getAllPdfFiles(docDir);

const tsContent = `// File index for documents in public/doc directory
// Auto-generated - do not edit manually

export interface DocFile {
  id: string;
  filename: string;
  path: string;
  category: 'datasheet' | 'user_manual';
}

export const DOC_FILES: DocFile[] = [
${files.map((file, index) => `  { id: '${file.category === 'datasheet' ? 'ds' : 'um'}-${index + 1}', filename: '${file.filename}', path: '${file.path}', category: '${file.category}' },`).join('\n')}
];
`;

fs.writeFileSync(outputFile, tsContent, 'utf8');
console.log(`Generated file index with ${files.length} files at ${outputFile}`);
