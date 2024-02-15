// 引入所需要的第三方包
const axios = require('axios');
const lodash = require('lodash');
const fileUtils = require('./urils/file.js');

const ua = [
  // iphone X
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  // Samsung Galaxy S8+
  'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
  // Pixel 5
  'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36',
  // Surface Pro 7
  'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1',
];

// 获取设备
function getUA() {
  return lodash.sample(ua);
}

// sleep函数实现，参数单位 秒 ；
function sleep(second) {
  // execSync 属于同步方法；异步方式请根据需要自行查询 node.js 的 child_process 相关方法；
  console.log(`💫 休息${second}s 🐶 🐱 🐭 🐹`);
  let ChildProcess_ExecSync = require('child_process').execSync;
  ChildProcess_ExecSync('sleep ' + second);
}

// 图鉴请求地址
const rootUrl = `https://api-static.mihoyo.com/common/blackboard/ys_obc/v1/home/content/list?app_sn=ys_obc&channel_id=189`;
// 内容
const detailUrl = 'https://api-takumi-static.mihoyo.com/hoyowiki/genshin/wapi/entry_page?app_sn=ys_obc&entry_page_id=${id}&lang=zh-cn';


// 获取当前页面的状态
const getStateByUrl = async (url) => {
  let dataSource = null;
  try {
    const { data: html } = await axios({
      url,
      method: 'GET',
      headers: {
        'User-Agent': getUA(),
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
      },
    });
    // 获取html中，script标签中的内容
    const regx = new RegExp('<script>window.__NUXT__(.*?)</script>', 'g');
    const jsStr = lodash
      .get(html.match(regx), '[0]', '')
      .replace(/<script>/g, '')
      .replace(/<\/script>/g, '')
      .replace('window.__NUXT__', 'dataSource');
    eval(jsStr);
    console.log(dataSource);
    return dataSource;
  } catch (error) {
    console.log('发生错误', error);
    return dataSource
  }
};


const rootPath = './.downloads';

const readyDir = async () => {
    await fileUtils.mkdir(rootPath);
}

const getPageNavData = async () => {
  await readyDir()
  const res = await axios.get(rootUrl);
  const rootState = lodash.get(res, 'data.data.list[0]');
  if (rootState) {
      await fileUtils.saveContent(`${rootPath}/state.json`, JSON.stringify(rootState));
      console.log('保存成功');
      return rootState;
  }
  return null;
}

// 根据图鉴内容id，做不同的处理
const getDetailData = async (data) => {
    switch (data.id) {
        // case 25:
            // await handleRoleData(data);
            // break;
        // case 5:
        //     await handleWeaponData(data);
        //     break;
        // case 218:
        //     await handleArtData(data);
        //     break;
        // case 6:
        //     await handleEnemyData(data);
        //     break;
        // 处理其他更多的逻辑
        default:
            await handleContentData(data);
            break;
    }
}

// 处理通用数据
const handleContentData = async (data) => {
    const roleList = lodash.get(data, 'list') || [];
    const cateName = lodash.get(data, 'name') || '';
    const catePath = `${rootPath}/${cateName}`;
    await fileUtils.mkdir(catePath);
    await fileUtils.saveContent(`${catePath}/state.json`, JSON.stringify(data));
    for (let index = 0; index < roleList.length; index++) {
        const r = roleList[index];
        const rPath = `${catePath}/${r.title}`;
        await fileUtils.mkdir(rPath);
        const url = detailUrl.replace('${id}', r.content_id);
        const detailRes = await axios.get(url);
        const detailData = lodash.get(detailRes, 'data.data.page') || {}
        await fileUtils.saveContent(`${rPath}/state.json`, JSON.stringify(detailData));
        sleep(2);
    }
}

// 主入口
const bootstrap = async () => {
  const data = await getPageNavData();
  if (data) {
    // 依次创建目录
    const wikiMap = lodash.get(data, 'children');
    for (let index = 0; index < wikiMap.length; index++) {
        const cate = wikiMap[index];
        await getDetailData(cate);
        sleep(2);
    }
  }

};

bootstrap();
