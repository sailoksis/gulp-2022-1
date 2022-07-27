<<<<<<< HEAD
//Main modul
import gulp from "gulp";
//Import paths 
import { path } from "./gulp/config/path.js";

//Send values in global variable
=======
import gulp from 'gulp';
import { path } from './gulp/config/path.js';



>>>>>>> 379619b021c53d9f52053cbe599edae87b563b6a
global.app = {
    path: path,
    gulp: gulp
}

<<<<<<< HEAD

//Import tasks
import { copy } from "./gulp/tasks/copy.js";

//Watcher for file changes
function watcher() {
    gulp.watch(path.watch.files, copy)
}
//Building scenarios for executing tasks 
const dev = gulp.series(copy, watcher);

//Implementation the default script
gulp.task('default', dev);
=======
import { copy } from './gulp/tasks/copy.js';

gulp.task('default', copy);
>>>>>>> 379619b021c53d9f52053cbe599edae87b563b6a
