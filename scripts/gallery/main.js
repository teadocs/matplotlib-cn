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

const request = require('./libs/request');
const parsingHtml = require('./module/parsingHtml');

const C = require('./module/const');

async function main() {
  console.log('C.GALLERY_URL', C.GALLERY_URL);
  let data = await request.get(C.GALLERY_URL);
  console.log(parsingHtml(data.data));
}

main();