# Composition API

## ref && reactive

ref 與 reactive 差異點在於，ref 可以接受任何資料型態，只是在使用時需要搭配 `value` 屬性使用，reactive 則只能傳入物件型態。

一個特別的差異點在於，當我們對 ref 的物件進行監聽時，會意外的發現無法針對該物件進行監聽，而需要透過深層監聽的方式才得以實現。

另外，當一個以 ref 進行定義的變數，此變數作為 reactive 所定義的物件的屬性時，則在 reactive 中的 ref 會被自動的進行解構處理。

```html
<script setup>
  import { ref, reactive } from 'vue'
  
  const age = ref(12)
  const person = reactive({
    age: age
  })

  console.log(person.age) // 12
</script>
```
