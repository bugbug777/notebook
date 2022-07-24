# Tailwind

就是 Tailwind

## Installation

Tailwind 可以直接透過 CLI 的方式進行建置，不過下面介紹的安裝方式是整合 Vite 開發框架的做法。

```shell
# 建立專案目錄
npm init vite [ProjectName]

# 安裝相依套件
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p # tailwind 設定初始化
```

基礎檔案配置

```js{3-6}
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在進入點（main.js）引入 tailwindcss

```js{4}
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

### [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Tailwind CSS IntelliSense 為 VS Code 的套件，用來提供語法補齊、語法高亮的一些輔助功能。

- Autocomplete 語法補齊
- Linting 語法檢查
- Hover Previews 滑鼠盤旋預覽
- Syntax Highlighting 語法高亮

## 關於 Tailwind with preproccesors

由於 Tailwind 其 utility class 的特性，實際上並不需要使用其它預處理器，更多時候需要使用 PostCSS 與其相依的套件。例：autoprefixer

[PostCSS Github Repo](https://github.com/postcss/postcss/blob/main/docs/plugins.md)

## v2 to v3 Tailwind

如果需要再到官方翻閱相關文獻。（[Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)）

## Tailwind Core Concepts

使用 Tailwind 取代傳統命名式客製化 class，並且透過 tailwind 的處理機制，可以使得樣式按需產生，這意味著我們的 css 可以獲得極簡化，讓輸出的檔案最小化。

### 關於 CSS state modifiers

CSS states 指的是 CSS 樣式中的 pseudo-classes（:hover）, pseudo-elements（::before）, Media queries（RWD）, Attribute selectors（[attr="value"]） 諸如此類的狀態。

Tailwind 透過預定義的工具樣式（utility class）可以讓這些樣式的撰寫不同以往，達成一種更為直覺、簡化的方式撰寫在 HTML 的 class 之中，甚至可以透過串接的方式，達成一連串的樣式撰寫，進而達成響應的效果。

### Dark Mode

Dark Mode 的樣式，可以參考 CSS states 的方式，替每個元素在 Dark Mode 時的樣式展現。例：`class="dark:bg-slate-900"`

- 使用系統預設主題
- 手動設置


### Functions & Directives

Directives：

- `@layer` - 將樣式附加到選定的層級，例：base, components, utilities etc...
- `@apply` - 使用預定義的 utility

Functions：

- `theme()` - 存取預設的設定值，例：`theme(spacing.12)`
- `screen()` - 使用預設斷點設定 Media Queries，例：`media screen(sm)`
