# Pinia

就只是顆鳳梨而已。

## 簡介

> Vue 官方：<br />
> Pinia started as an experiment to redesign what a Store for Vue could look like with the Composition API around November 2019. Since then, the initial principles are still the same, but Pinia works for both Vue 2 and Vue 3 and doesn't require you to use the composition API. The API is the same for both except for installation and SSR, and these docs are targeted to Vue 3 with notes about Vue 2 whenever necessary so it can be read by Vue 2 and Vue 3 users!

主要作為狀態管理的工具，與 Vuex 不同的地方在於，Pinia 更容易上手。

透過 Store 進行管理的狀態，在不同的元件會有同步的效果。

## 安裝

```sh
# npm
npm i pinia

# yarn
yarn add pinia
```

## 引用 `pinia`

```js{3,6,9}
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

## 定義 Stores

建立儲存空間 Store，建立一目錄名為 `stores`，並且在其中建立儲存狀態的檔案，以電商來說，最常見的案例可能會有 `user.js` 或 `cart.js` 用來儲存使用者以及購物車狀態的 Store。

```js
// userjs
import { defineStore } from 'pinia' // 匯入定義方法

export default defineStore('userStore', {
  // Data
  state: () => ({
    name: '卡斯柏',
    wallet: 300
  }),
  // Computed
  getters: {
    getUserName: (state) => `名字叫做 ${state.name}`
  },
  // Methods
  actions: {
    updateName() {
      // 可以使用 this
      this.name = '杰倫'
    }
  }
})
```

## 匯入 Store 使用

匯入的方式依照使用的 API 分：

- Options API
- Composition API

### Options API

```vue
<template>
  <p>{{ name }} {{ getUserName }} {{ wallet }}</p>
  <button @click="updateName" type="button">點擊</button>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '@/stores/user'

export default {
  computed: {
    // mapState 須帶入兩個參數. 1. Store 2. 引用的 State or Getters，且微陣列形式
    ...mapState(userStore, ['name', 'wallet', 'getUserName'])
  },
  methods: {
    // 用法與 mapState 雷同
    ...mapActions(userStore, ['updateName'])
  }
}
</script>
```

### Composition

不需要 mapping 只需匯入 Store。

```vue
<template>
  <p>{{ user.name }} {{ user.getUserName }} {{ user.wallet }}</p>
  <button @click="user.updateName" type="button">點擊</button>
</template>

<script>
import userStore from '@/stores/user'

const user = userStore()
</script>
```

透過上面的方法，匯出的資料會是 `reactive` 的型態，若想要 `ref` 可以透過 `storeToRefs`

```vue
<template>
  <p>{{ name }} {{ getUserName }} {{ wallet }}</p>
  <button @click="updateName" type="button">點擊</button>
  <button @click="updateData" type="button">更新</button>
  <button @click="resetData" type="button">重設</button>
</template>

<script>
import { storeToRefs } from 'pinia'
import userStore from '@/stores/user'

const user = userStore()
const { name, wallet, getUserName } = storeToRefs(user)

// 方法不需要雙向綁定，單純解構即可
const { updateName } = user

// 其它好用的方法
// 1. $patch, 修改資料
const updateData = () => {
  user.$patch({
    name: 'sihle',
    wallet: 1000
  })
}

// 2. $reset, 重設資料
const resetData = () => {
  user.$reset()
}

</script>
```