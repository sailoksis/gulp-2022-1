//Main modul
import gulp from "gulp";
//Import paths 
import { path } from "./gulp/config/path.js";

//Send values in global variable
global.app = {
    path: path,
    gulp: gulp
}


//Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";

//Watcher for file changes
function watcher() {
    gulp.watch(path.watch.files, copy)
}
//Building scenarios for executing tasks 
const dev = gulp.series(reset, copy, watcher);

//Implementation the default script
gulp.task('default', dev);
