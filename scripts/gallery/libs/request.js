/**
 * 基于flyio
 * github：https://github.com/wendux/fly
 * 文档：https://wendux.github.io/dist/#/doc/flyio/readme
 */

const fly = require('flyio');
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:69.0) Gecko/20100101 Firefox/69.0",
  "Connection": "keep-alive"
};

module.exports = {

  get(url, data, headers = {}) {
    return fly.request({
      url,
      method: 'get',
      headers: Object.assign(HEADERS, headers)
    });
  },

  post(url, data, headers = {}) {
    return fly.request({
      url,
      method: 'post',
      headers: Object.assign(HEADERS, headers),
      body: data
    });
  }

}
