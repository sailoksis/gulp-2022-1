//Get name of project folder
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `/.dist`; //We can change name project folder
const srcFolder = `./src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
    
}