---
lastUpdated: true
createAt: 2023-02-28
updateAt: 2023-03-03
---

# Background

> background显示在盒子的内容与内边距上

相关属性：
- background
    属性简写规则
    - color只能出现在`,`后
    - size只能出现在position后并通过`/`连接，即position / size
- background-image
- background-color：当同时设置background-image时，background-image在background-color上
- background-position：px % ... top center left bottom right
- background-size：px % ... cover contain
- background-attachment：scroll（元素本身）,local（内容）,fixed（对窗口）
- background-repeat：repeat|no-repeat|repeat-x|repeat-y

> 背景叠加
> 可以同时设置多个背景，放在前面的背景在上更加接近用户
