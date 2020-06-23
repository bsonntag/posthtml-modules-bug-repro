const { readFileSync } = require('fs');
const posthtml = require('posthtml');
const modules = require('posthtml-modules');

posthtml()
  .use(modules({ root: './' }))
  .process(readFileSync('index.html', 'utf8'))
  .then(result => {
    console.log('result:\n', result.html);
  });
