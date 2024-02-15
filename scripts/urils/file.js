const fs = require('fs');

//将文字内容存入文件中
async function saveContent(file, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content.toString(), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

//创建目录
async function mkdir(_path) {
  return new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(_path)) {
        console.log(`${_path}目录已存在`);
        resolve();
      } else {
        fs.mkdir(_path, { recursive: true }, (error) => {
          if (error) {
            reject(error);
            return console.log(`创建${_path}目录失败`, error);
          }
          console.log(`创建${_path}目录成功`);
          resolve();
        });
      }
    } catch (error) {
      reject(error);
    }
  });
}


module.exports = {
  saveContent,
  mkdir,
};