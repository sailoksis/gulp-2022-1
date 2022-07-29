//Main modul
import gulp from "gulp";
//Import paths 
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Send values in global variable
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}


//Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

//Watcher for file changes
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive } 

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//Building scenarios for executing tasks 
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

//Implementation the default script
gulp.task('default', dev);
