---
tags:
    - javascript
---

# 变量提升

- [`var`声明变量](变量的定义.md)  
变量提升指变量的声明会在代码执行之前，即我们可以先使用一个变量后再声明，同样函数也可以
，如果我们使用变量前没有赋值那么将得到`undefind`，这说明变量的声明会被提升，但赋值不会

```js

console.log(x)

var x

console.log(x)

x = 10

console.log(x)

```
