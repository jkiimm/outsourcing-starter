const mkdirp = require('mkdirp');
const sassGlob = require('node-sass-glob');
const sass = require('node-sass');
const fs = require('fs');
const chokidar = require('chokidar');

compile();

chokidar
  .watch('src/stylesheets/**/*.scss', { ignoreInitial: true })
  .on('all', compile);

function compile(event, path) {
  sass.render({
    file: 'src/stylesheets/main.scss',
    includePaths: ['src/stylesheets/'],
    importer: sassGlob
  }, (err, result) => {
    if (err) { throw err; }
    if (path) {
      process.stdout.write(`=> ${event.toUpperCase()} ${path}\n`);
    }

    const css = { dir: 'build/assets/css', name: 'main.css' };

    mkdirp(css.dir, (err) => {
      if (err) { throw err; }

      fs.writeFile(`${css.dir}/${css.name}`, result.css, (err) => {
        if (err) { throw err; }
        process.stdout.write(`=> Wrote CSS to ${css.dir}/${css.name}\n`);
      });
    });
  });
}
