/**
 * 解析html
 */

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function getStruct ($, el) {
  let title = $(el).find('h2').text();
  let p = $(el).find('h2').next();
  let desc = '';
  if ($(p).get(0).tagName === 'P') {
    desc = $(p).text();
  }
  let block = {
    title: title.replace('¶', ''),
    desc,
    list: []
  };
  let els = $(el).find('.sphx-glr-thumbcontainer');
  els.each(function (index, el) {
    let figureEl = $(el).find('.figure');
    let poster = $(figureEl).find('img').attr('src');
    poster = poster.replace('../', 'https://matplotlib.org/');
    let text = $(figureEl).find('.caption-text').text();
    let url = $(figureEl).find('a').attr('href');
    url = 'https://matplotlib.org/gallery/' + url;
    block.list.push({
      poster,
      text,
      url
    });
  });
  return block;
}

module.exports = function (html) {
  const { document } = (new JSDOM(html)).window;
  const window = document.defaultView;
  const $ = require('jquery')(window);
  let els = $('div.section');
  let arrayList = [];
  els.each(function (index, el) {
    if (index === 0) return;
    arrayList.push(getStruct($, el));
  });
  return arrayList;
}
