var mysql = require('mysql');
var lodash = require('lodash');
var state = require('./.downloads/武器/state.json');
const fileUtils = require('./urils/file.js');
const axios = require('axios');

// sleep函数实现，参数单位 秒 ；
function sleep(second) {
  // execSync 属于同步方法；异步方式请根据需要自行查询 node.js 的 child_process 相关方法；
  console.log(`💫 休息${second}s 🐶 🐱 🐭 🐹`);
  let ChildProcess_ExecSync = require('child_process').execSync;
  ChildProcess_ExecSync('sleep ' + second);
}

const errList = [];
// 内容
const detailUrl =
  'https://api-takumi-static.mihoyo.com/hoyowiki/genshin/wapi/entry_page?app_sn=ys_obc&entry_page_id=${id}&lang=zh-cn';

const bootstrap = async () => {

  // 处理数据
  const wikiList = lodash.get(state, 'list') || [];

  console.log('开始处理数据', wikiList.length);

  let sql = ``;

  for (let index = 0; index < wikiList.length; index++) {
    sleep(1);

    const r = wikiList[index];
    console.log('正在处理', r.title);
    const ext = lodash.get(JSON.parse(r.ext), 'c_5.filter.text');
    const url = detailUrl.replace('${id}', r.content_id);
    const detailRes = await axios.get(url);
    const detailData = lodash.get(detailRes, 'data.data.page') || {};
    const basicData = JSON.parse(
      lodash.get(detailData, 'modules[0].components[0].data') || '{}'
    );
    const descData = JSON.parse(
      lodash.get(detailData, 'modules[1].components[0].data') || '{}'
    );
    const sqlData = {
      ...detailData,
      ...basicData,
      ...descData,
      ext,
    };

    const {
      name,
      template_id,
      desc,
      icon_url,
      star,
      category,
      image,
      rich_text,
      attr,
    } = sqlData;

    const sql_item = `
    insert into
    wiki_weapon
    (name, content_id, template_id, description, icon_url, star, category, image, rich_text, attrs)
    values
    (
    \"${name}\",
    \"${r.content_id}\",
    \"${template_id}\",
    ${mysql.escape(desc)},
    \"${icon_url}\",
    \"${star}\",
    \"${category}\",
    \"${image}\",
    ${mysql.escape(rich_text)},
    ${mysql.escape(JSON.stringify(attr))}
    );
    `;

    console.log(sql_item);

    sql = sql + sql_item + '\n';
  }

  await fileUtils.saveContent('./weapons.sql', sql);
};

bootstrap();
