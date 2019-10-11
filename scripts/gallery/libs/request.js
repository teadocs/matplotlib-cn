/**
 * 基于flyio
 * github：https://github.com/wendux/fly
 * 文档：https://wendux.github.io/dist/#/doc/flyio/readme
 */

const fly = require('flyio');
const HEADERS = {
  "Host": "home.firefoxchina.cn"
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:69.0) Gecko/20100101 Firefox/69.0"
  "Accept": "text/css,*/*;q=0.1"
  "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2"
  "Accept-Encoding": "gzip, deflate, br"
  "Connection": "keep-alive"
  "Cookie": "Hm_lvt_dd4738b5fb302cb062ef19107df5d2e4=1563888423,1564489432; uid=38oGHFwKVeR+LLsMwkgOAg==; acw_tc=7b39758215695595166591624ec62d45aad5486f4c535261cb8de49cd3e801"
};

module.exports = {

  get(url, data) {
    return fly.request({
      url,
      method: 'get',
      headers: HEADERS
    });
  },

  post(url, data) {

  }

}
