# JavaScript 核心觀念

記錄一些比較進階的 JS 使用概念。

## 執行環境、作用域

了解語法解析過程、執行環境，以及不同語法變數的作用域。

### 編譯式、直譯式

- 編譯式 - 將程式碼全部編譯後執行，例：C
- 直譯式 - 將部分程式碼編譯後直接執行，例：Javascript, Python

編譯式通常效能優秀，直譯式通常較為靈活，變數可動態定型，但是效能較差。

### 直譯過程

1. 語法單元化（Tokenizing）
2. 抽象結構樹（AST, Abstract Syntax Tree）
3. 代碼生成（電腦執行代碼，二進位）

語法單元化，產生類似如下的結構，判斷該語法的 type

```json
// 非 json 格式的資料，只是方便觀看的資料結構
[
  {
      "type": "Keyword",
      "value": "var"
  },
  {
      "type": "Identifier",
      "value": "name"
  },
  {
      "type": "Punctuator",
      "value": "="
  },
  {
      "type": "String",
      "value": "'sihle'"
  }
]
```

抽象結構樹，或我自己稱其為語法結構樹
此階段將單元化的結構轉換成編譯器了解的結構樹

![AST](@/assets/images/AST.png)

### LHS, RHS

LHS（Left Hand Side），將值賦予到左側變數

```js
// 錯誤範例
'sihle' = 1; // Invalid left-hand side in asignment
```

RHS（Right Hand Side），從右側的變數取值

```js
var name = 'sihle';

// RHS example 1
var myname = name;

// RHS example 2
console.log(name);

// 錯誤範例
console.log(min); // min is not defined
```

::: danger 注意
遇到類似的錯誤，若未進行修正，會導致接續的程式碼無法執行
:::

### 語法作用域（Lexical Scope）

- **靜態**作用域 - **語法解析時**確認變數作用域
- **動態**作用域 - **函式調用時**確認變數作用域

參考下方的程式碼，分別在全域以及區域定義一個變數，接著採層遞的方式呼叫函式，也就是在 fn2() 中呼叫 fn1()。

靜態與動態作用域的差別在於**呼叫區域變數時的取得方式不同**，對於 fn1() 之中的 value 來說，靜態作用域的上一層為全域變數的 value，對於動態作用域的上一層則是呼叫函式的 fn2() 中的區域變數 value，而 Javascript 是採用靜態作用域。

```js
var value = 1; // 全域變數
function fn1() {
  console.log(value); // 靜態作用域： 1, 動態作用域： 2
}
function fn2() {
  var value = 2; // 區域變數
  fn1();
}
fn2();
```

### 執行環境與執行堆疊

Execution Context（執行環境）、Execution Stack（執行堆疊）

當變數撰寫於函式中時，通過語法的解析，可以確認其作用域，但是只有真正的執行該函式時，該函式才會產生 Execution Context 並建立變數進而限制作用域。

不僅函式有自己的 Execution Context，全域也有 Execution Context，例：網頁開啟時、Node.js 程式開啟時，分別產生 window 以及 global 全域變數。

而這些 Execution Context 依照開啟的順序進而產生所謂的 Execution Stack，通過 Google Dev Tools 可以輕易地觀察這些變化。

![Execution Stack](@/assets/images/execution-stack.png)

### 範圍練

變數向外查找的搜尋範圍。（與執行堆疊無關）

### 提升（hoisting）

我們知道在前述的 Execution Context 中，變數會在這個階段被建立，不過這個階段可以稍微在細分為兩個階段：

- 創造階段
- 執行階段

創造階段，會替變數建立一個記憶體空間，此時還未賦予任何數值，因此如果在此時讀取資料，會得到一個 `undefined`。並且在此階段，Javascript 會一次性的替所有宣告的全域變數建立記憶體空間，而函式也會在此時被逕行載入，造成的結果就是，上述讀取值時會得到 `undefinded`，而這個現象就稱為 Hoisting。

只有到執行階段，宣告的變數才會被賦予值。

範例一：

```js
// 正常寫法
var value = 1;

// 等同於
var value; // undefined
value = 1; // 1
```

範例二：

```js
// Example 1, 函式陳述式
function fn() {
  console.log('Hello!');
}
fn();

// Example 2, 函式表達式
function fn() {
  console.log('Hello!');
}
var fn = function () {
  console.log('Hello 2!');
}
fn(); // Hello 2
```

在範例二的 Example 2 中，函式的表達式使用方式更像是值得傳遞，而非直接的函式，因此在提升時，依據執行的先後順序，變數 `fn` 可能的結果會是被提升的函式或 `undefined`，但最終到了執行階段都會被賦予輸出結果為 `'Hello 2!'` 的函式所取代，因此 `fn()` 的執行結果不論函式順序為何都會是 `'Hello 2!'`。

### not defined 以及 undefined

`not defined` 意味著變數尚未被定義（宣告）就被取用，所以程式會報錯。`undefined` 則意味變數已經被宣告，但是尚未賦予值就取用，為了避免程式出錯因此先給予一個空值 `undefined`。

::: tip
`null` 唯有值的空值。`undefined` 無值的空值。
:::

### 回收機制（Garbage Collection）

在 Execution Context 結束後其內含的變數記憶體也會隨之釋放，但條件是該物件沒有其他被其他地方所參照。

這也是為什麼通常使用區域變數會比全域變數效能更優異的原因，因為當函式執行結束後通常區域變數再不會有其他參照的情況下，記憶體空間也會隨之被釋放。

```js
function randomString(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// 範例程式碼 1
let demoData = [];
function getData() {
  for (let i = 0; i < 1000; i++) {
    demoData.push(randomString(5000))
  }
}
getData()
console.log(demoData)

// 範例程式碼 2
function getData() {
  let demoData = [];
  for (let i = 0; i < 1000; i++) {
    demoData.push(randomString(5000))
  }
  console.log(demoData); // 注意：Chrome console 中的行為也會需要記憶體
}
getData()
```

::: tip

1. 記得使用無痕環境進行測試
2. 測試時 Chrome Dev Tools 中的 console.log() 結果，也同時會是被變數參照的對象，記得清除。
:::

記憶體變化測試圖：
![Memory Snapshot](@/assets/images/memory-snapshot.png)

前兩次為使用全域變數的結果，即使清除 console 的資料，由於全域的陣列資料依舊存在，因此記憶體的空間顯然是沒有被釋放的。

後兩次為區域變數的結果，清除 console 的參照資料後，可以發現記憶體空間被大量的釋放。

### JS 同步、非同步

下方這篇文章的作者解釋得相當清楚。

[Medium - Yi Ning -執行緒與同步/非同步](https://medium.com/@yining1204/javascript-%E6%A0%B8%E5%BF%83%E7%AF%87-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-chap-15-%E5%9F%B7%E8%A1%8C%E7%B7%92%E8%88%87%E5%90%8C%E6%AD%A5-%E9%9D%9E%E5%90%8C%E6%AD%A5-107802469752)

## 延伸閱讀

- [以生活的例子說明單執行緒和多執行緒](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/432463/)