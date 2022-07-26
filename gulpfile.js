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

//Implementation the default script
gulp.task('default', copy);