import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());

export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');

export const PATH_FILES_DIR = path.join(pathToWorkDir, 'src', 'db', 'files');
