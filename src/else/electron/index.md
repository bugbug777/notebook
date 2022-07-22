# Electron

使用網頁技術打造一個跨平台桌面應用。

## Fiddle

Electron 的 playground，適合新手學習以及實驗性實作。

## Quick Start

參考下面的指令，建立專案目錄

```shell
# 建立專案目錄
mkdir my-first-app && cd my-first-app

# 初始化 packge.json，記得將進入點設定為 main.js
yarn init

# 安裝 electron
yarn add -D electron

# 初始化需要的檔案
touch main.js & touch index.html
```

在 `main.js` 建立視窗並載入畫面

```js
// main.js
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
})
```

`index.html` 要渲染的畫面

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    and Electron <span id="electron-version"></span>.
  </body>
</html>
```

```json{9-11}
// package.json
{
  "name": "first-electron-app",
  "version": "1.0.0",
  "description": "First app",
  "main": "main.js",
  "author": "sihle",
  "license": "MIT",
  "scripts": {
    "start": "electron ."
  },
  "devDependencies": {
    "electron": "^19.0.8"
  }
}

```

接著，嘗試使用 `yarn start` 開啟 app 如果畫面如下所示即成功！

![Hello World](@/assets/images/electron-hello-world.png)

## 橋接 main process 與 render process

main process 主要是指 `main.js` 這隻檔案，也是整個 app 的核心所在。render process 指的是前端渲染的處理程序，一般來說是沒辦法直接取得，由 `Node.js` 取得主機的 `process` 資訊，因此 Electron 透過 `preload.js` 完成這前後的串接。

```js
// preload.js

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
```

除了需要額外建立 `preload.js` 這隻檔案來作為介接的橋樑，還需要在 `main.js` 中進行一些額外的設定。

```js{9-11}
// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}
```

透過 `webPreferences` 參數設定 `preload` 屬性，此時重啟 app 會發現顯示的文字已經重新將個版本資訊渲染出來。

![Electron Hello World with Versions](@/assets/images/electron-hello-world-with-versions.png)
