/**
 * 图片上传模块
 */

const fly = require("flyio");
const request = require('../libs/request');

module.exports = async function (originUrl) {
  return originUrl;
  let params = {
    source: originUrl,
    type: "url",
    action: "upload",
    timestamp: new Date().getTime(),
    auth_token: "a677acae12fee7248397b016ca53b702eafea751",
    nsfw: 0,
    album_id: "jpC"
  }
  let headers = {
    "accept": "application/json",
    "origin": "https://extraimage.net",
    "pragma": "no-cache",
    "referer": "https://extraimage.net/lisniuse",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryQJy3LEdj7ESiAljn",
    "cookie": "__cfduid=d2e447103eefd5df5b75e87c11d8088631547967634; _ga=GA1.2.1230322488.1565976568; PHPSESSID=m40e3l8g2d7hpgdos4nj2qlch8; _gid=GA1.2.921531165.1571365602; _gat=1"
  }
  let result = await fly.upload("https://extraimage.net/json", params, {
    headers
  });
  let url = result.data.image.url;
  return url;
  // return request.post('https://extraimage.net/json', params, headers);
}
