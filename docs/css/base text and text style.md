# base text & text style （基本文本与文本样式）

> 这里我们将详细介绍文本/字体样式的所有基本原理，包括设置文字的粗细，字体和样式，
> 文字的属性简写，文字的对齐，和其他效果，以及行和字母间距。

字体样式
> 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。

一些伪元素
- `::first-letter`
- `::first-line`
- `::selection`

文本

- `color`
- `text-decoration`
- `font-family`：字体种类
  - `sans-serif`
  - `serif`
- `font-size`
- `font-style`
  - `normal`
  - `italic`
  - `oblique`
- `font-weight`
  - `light`
  - `normal`
  - `bolb`
  - `extrabold`
  - `black`
  - `lighter`
  - `bolder`
  - `100-900`
- `text-transform`
  - `none`
  - `uppercase`
  - `lowercase` 
  - `capitalize`
  - `full-width`
- `text-decoration`：文字装饰，可以一次设置多个值，使用空格分割
  > `text decoration`是一个缩写形式由`text-decoration-line` `text-decoration-style` `text-decoration-color`组成
  - `none`
  - `underline`
  - `overline`
  - `line-through`
- `text-shadow`：x y radius color
  > 可以通过分号`,`设置多个阴影
  
文本布局风格
> 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。

文本对齐
- `text-align`：`left` `right` `center` `justify`
- `line-height`：对于无单位的值是使用`值xfont-size`
- `letter-spacing` 与 `word-spacing`
