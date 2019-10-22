/**
 * 自动化 gallery 英文网页转中文markdown 算法
 * 1、获取 gallery 页面的 html 源代码。
 * 2、解析 html 源码得到结构化的Json数据。
 * 3、进入模块处理阶段
 *    - 自动翻译示例的标题
 *    - 将示例封面上传到图床
 *    - 获取示例的html代码转化为 md 文件（部分固定格式的英文可以直接翻译为中文）
 * 4、生成 gallery 的 README.md 首页文件
 */

const fs = require('fs-extra');
const request = require('./libs/request');
const parsingHtml = require('./module/parsingHtml');
const translation = require('./module/translation');
const uploadImage = require('./module/uploadImage');
const sleep = require('./module/sleep');
const outputMd = require('./module/outputMd');
const htmlToMd = require('./module/htmlToMd');

const C = require('./module/const');

/**
 * 生成首页
 * @param {*} params 
 */
function generateIndex(jsonList) {
  let readmePath = 'README';
  let readmeMd = `---
sidebarDepth: 3
sidebar: auto
---

# Gallery

This gallery contains examples of the many things you can do with
Matplotlib. Click on any image to see the full image and source code.

For longer tutorials, see our [tutorials page](https://pandas.pydata.org/pandas-docs/stable/tutorials/index.html).
You can also find [external resources](https://pandas.pydata.org/pandas-docs/stable/resources/index.html) and
a [FAQ](https://pandas.pydata.org/pandas-docs/stable/faq/index.html) in our [user guide](https://pandas.pydata.org/pandas-docs/stable/contents.html).
`;

let readmeHtml = '';
jsonList.forEach(block => {
  let liContent = '';
  block.list.forEach(item => {
    liContent += `<li>
      <div class="poster">
        <img src="${item.poster}" />
      </div>
      <div class="text">
        <a href="${item.url}">${item.text}</a>
      </div>
    </li>`;
  });
  let blockContent = `

## ${block.title}
${block.desc}
<div class="gallery-examples-list">
  <ul>
    ${liContent}
  </ul>
</div>`;

  readmeHtml += blockContent;
  });
  readmeHtml = readmeMd + readmeHtml;
  outputMd(readmePath, readmeHtml);
}

/**
 * 入口
 */
async function main() {
  let data = await request.get(C.GALLERY_URL);
  let jsonList = parsingHtml(data.data);
  // return false;
  for (const block of jsonList) {
    console.log(block.title);
    block.title = await translation(block.title);
    for (const item of block.list) {
      item.poster = await uploadImage(item.poster);
      item.text = await translation(item.text);
      let data = await request.get(item.url);
      let _url = item.url.split('.html')[0];
      let url = _url.replace(C.GALLERY_BASE_URL, '');
      item.url = url;
      // console.log('C.GALLERY_BASE_URL', C.GALLERY_BASE_URL);
      // outputMd(url, htmlToMd(data.data));
      // console.log('url', url);
      await sleep(500);
    }
  }
  generateIndex(jsonList);
  // console.log(JSON.stringify(jsonList));
}

main();