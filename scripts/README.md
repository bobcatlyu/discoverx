# File Index Generator

This script automatically generates a TypeScript file index of all PDF documents in the `public/doc` directory.

## Usage

When you add new PDF files to `public/doc/datasheet` or `public/doc/user_manual`, run:

```bash
node scripts/generateFileIndex.js
```

This will update `utils/fileIndex.ts` with all PDF files found in the doc directory.

## How it works

- Scans `public/doc` recursively for all `.pdf` files
- Categorizes files as either `datasheet` or `user_manual` based on their path
- Generates a TypeScript file with an array of document metadata
- The search functionality uses this index to find documents by filename

## File Structure

```
public/
  doc/
    datasheet/        # Product datasheets
    user_manual/      # User manuals
scripts/
  generateFileIndex.js   # Generator script
utils/
  fileIndex.ts          # Generated file (do not edit manually)
```
