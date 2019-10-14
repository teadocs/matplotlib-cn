/**
 * 解析html
 */

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
const window = document.defaultView;
const $ = require('jquery')(window);

module.exports = function (html) {
  let listArray = [];
  console.log('$', $);
  return listArray;
}
