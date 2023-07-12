const fs = require("fs");
const path = require("path");
// 移动js css index.html

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    let files = fs.readdirSync(dir);
    for (var i = 0; i < files.length; i++) {
      let newPath = path.join(dir, files[i]);
      let stat = fs.statSync(newPath);
      if (stat.isDirectory()) {
        removeDir(newPath);
      } else {
        fs.unlinkSync(newPath);
      }
    }
    fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
  }
}
const cwd = process.cwd();

const clearOldFiles = () => {
    removeDir(cwd + "/js/react");
    removeDir(cwd + "/css/react");
    if(fs.existsSync(cwd + "/_layouts/empty-react.html")) {
        fs.unlinkSync(cwd + "/_layouts/empty-react.html");
    }
}
clearOldFiles();
// 复制文件操作
function copyFile(sourcePath, targetPath) {
    console.log("", targetPath)
  let rs = fs.createReadStream(sourcePath);
  let ws = fs.createWriteStream(targetPath);
  rs.pipe(ws);
}

function copyDir(sourceDir, targetDir) {
  // 判断目标文件夹是否存在，不存在直接创建一个
  if (fs.existsSync(targetDir)) {
    // 读取源文件夹中的文件
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        return;
      }

      files.forEach((file, index) => {
        // 获取到各个文件的路径
        let sourcePath = path.join(sourceDir, file);
        let targetPath = path.join(targetDir, file);

        console.log("targetPath", targetPath)

        fs.stat(sourcePath, (err, stats) => {
          if (err) return;
          if (stats.isDirectory()) {
            // 判断是不是文件夹
            fs.mkdir(targetPath, (terr) => {
              if (terr) return;
              copyDir(sourcePath, targetPath); // 递归处理
            });
          } else {
            copyFile(sourcePath, targetPath); // 执行复制文件
          }
        });
      });
    });
  } else {
    fs.mkdir(targetDir, (err) => {
      if (err) return;
      copyDir(sourceDir, targetDir);
    });
  }
}

const sourceJSDir = cwd + "/dist/js/react";
const targetDir = cwd + "/js/react";
const sourceCSSDir = cwd + "/dist/css/react";
const targetCSSDir = cwd + "/css/react";

const sourceHTML = cwd + "/dist/index.html";
const targetHTML = cwd + "/_layouts/empty-react.html";

copyDir(sourceJSDir, targetDir)
copyDir(sourceCSSDir, targetCSSDir)
copyFile(sourceHTML, targetHTML )
