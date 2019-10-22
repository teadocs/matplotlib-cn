/**
 * 翻译模块
 */
const request = require('../libs/request');

const t = async function (englishText) {
  const tencentcloud = require('tencentcloud-sdk-nodejs');
  const TmtClient = tencentcloud.tmt.v20180321.Client;
  const models = tencentcloud.tmt.v20180321.Models;
  const Credential = tencentcloud.common.Credential;
  const ClientProfile = tencentcloud.common.ClientProfile;
  const HttpProfile = tencentcloud.common.HttpProfile;

  let cred = new Credential(
    "AKIDcAEB4ous9MYv5ZhFm5c0XdfwzoX4FDtp",
    "wgC9vVtBFC1PdHIDzmNjcKvHSN2XLyQh"
  );
  let httpProfile = new HttpProfile();
  httpProfile.endpoint = "tmt.tencentcloudapi.com";
  let clientProfile = new ClientProfile();
  clientProfile.httpProfile = httpProfile;
  let client = new TmtClient(cred, "ap-guangzhou", clientProfile);
  let req = new models.TextTranslateRequest();
  let params = '{"SourceText":"'+ englishText +'","Source":"en","Target":"zh","ProjectId":0}'
  req.from_json_string(params);
  return new Promise((resolve, reject) => {
    client.TextTranslate(req, function (errMsg, response) {
      if (errMsg) {
        reject(errMsg);
        return;
      } else {
        resolve(JSON.parse(response.to_json_string()));
        return;
      }
    });
  });
}

module.exports = async function (englishText) {
  // let result = await t(englishText);
  // return result.TargetText;
  let chineseText = englishText;
  return chineseText;
}
