const fs = require('fs-extra');
const path = require('path');

module.exports = function outputMd(mdName, content) {
  const base = path.resolve('../../../');
  const galleryPath = `${base}/matplotlib-cn/docs/gallery/`;
  const mdPath = `${galleryPath}${mdName}.md`;
  console.log('mdPath', mdPath);
  fs.outputFileSync(mdPath, content);
}