---
title: Markdown笔记(备忘向)
published: 2025-10-25
pinned: false
description: 对常用Markdown语法的总结
tags: [Markdown,笔记]
category: Note
licenseName: "Unlicensed"
author: AdoreATRI
sourceLink: "https://github.com/adoreATRI/Note/tree/main/Markdown"
draft: false
---

# Markdown学习
- [Markdown学习](#markdown学习)
  - [基本语法(常用，备忘)](#基本语法常用备忘)
    - [标题](#标题)
    - [引用](#引用)
    - [列表](#列表)
    - [代码语法](#代码语法)
    - [链接(注意空格)](#链接注意空格)
    - [图片](#图片)
    - [强调](#强调)
  - [拓展语法(有时要用)](#拓展语法有时要用)
    - [数学公式](#数学公式)
    - [表格](#表格)
    - [脚注](#脚注)
    - [横线](#横线)
    - [换行(vscode无需)](#换行vscode无需)
    - [转义](#转义)
    - [HTML的使用](#html的使用)
        - [比较常用的HTML标签](#比较常用的html标签)
    - [删除线](#删除线)
    - [表情符号](#表情符号)
    - [特殊符号](#特殊符号)
  - [导出方式](#导出方式)
## 基本语法(常用，备忘)
### 标题
使用"#" + 空格 + 内容。标题级数按"#"多少决定

----

### 引用
使用">"进行引用，多段块引用中间空白行也要加上">"例如：
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

----

### 列表
有序列表：数字 + "." + 内容。例如：
1. First item
2. Second item
3. Third item
4. Fourth item

无序列表："-"/"*"/"+" + 空格 + 内容。例如：
- First item
- Second item
- Third item
- Fourth item

任务列表："-" + 空格 + "[" + 空格 + "]" + 内容。例如：
- [ ] coding
完成的任务[]里面的空格换成x。例如：
- [x] coding
  
----

### 代码语法
可以使用反引号将部分代码其包裹起来。例如：
`code`
也可以在代码块行上和行下加三个反引号来创建围栏代码块(可以在上面反引号后面指定语言来实现高亮)。例如：
```cpp
int main (){

}

```

----

### 链接(注意空格)
普通链接
例如：[链接显示名](链接地址 +  ("链接title"))

引用链接(多次使用链接的情况)
[链接显示名] + [标签]
空行
[标签]: + 空格 + 链接地址 + 空格 + "链接title"
例如：[ciallo][id]

[id]: https://ciallo.cc "柚子厨真下头"

标题链接
[链接显示名] + (#链接标题)
例如：[标题](#标题)

直接URL链接
例如：https://ciallo.cc

----

### 图片
"!" + [显示文本] + (链接 + 空格 + "说明文字")
(==使用本地图片时使用的是"/"==)

例如：![理亚赛高](https://moegirl.icu/media/S%C5%8Dma_Ria.png "理亚是我的，你只能看看")

----

### 强调
斜体用一对星号括。例如：*文本*
加粗用两对。例如：**文本**
斜体加粗用三对。例如：***文本***

下划线用"<" + "u" + ">" + 文本 + "<" + "/u" + ">"例如：<u>文本</u>

下标用一对波浪线括，上标用一对尖冒号括。例如：H~2~O, X^2^

高亮使用两对等号括。例如：==文本==

----

## 拓展语法(有时要用)
### 数学公式
用4个美元符号将公式括起来。例如：
$$
\frac{\partial}{\partial x} = 2\sqrt{a}
$$

----

### 表格
表头和表中内容：两竖线夹内容。
对其方式：|:----|左对齐，|----:|右对齐，|:----:|居中对齐。例如：
|  爱好  |
| :----: |
| coding |

----

### 脚注
需脚注的内容 + "[" + "^" + 脚注标题 + "]"
"[" + "^" + 脚注标题 + "]" + ":" + 脚注内容。例如：
文本[^脚注]
[^脚注]: 脚注内容

----

### 横线
使用三个"-"(看情况空一行)。例如：

---

### 换行(vscode无需)
在行尾添加两个空格然后回车。例如：
这是第一行。  
这是第二行。

----

### 转义
使用反斜杠"\"对特殊字符进行转义。例如：\*文本

----

### HTML的使用
格式："<" + 标签 + 属性 + ">" + 内容 + "<" + "/" + 标签 + ">"
例如：<mark>文本</mark>

注意：在HTML标签中不能使用Markdown语法。

##### 比较常用的HTML标签
文字居中：
<p style="text-align:center">这段文字居中显示。</p>
文字颜色：
<p style="color:blue">这段文字是蓝色的。</p>
调整照片大小：
<img src="https://moegirl.icu/media/S%C5%8Dma_Ria.png" width="50" height="100">

### 删除线
使用两对波浪线括。例如：~~文本~~

----

### 表情符号
使用":" + 表情名称 + ":"。例如：:smile:

----

### 特殊符号
左箭头 (←) — &larr;
上箭头 (↑) — &uarr;
右箭头 (→) — &rarr;
下箭头 (↓) — &darr;
度数 (°) — &#176;
圆周率 (π) — &#960;

----

## 导出方式
1.导出为PDF最推荐的是网页打开，然后保存图片
2.也可以使用Markdown PDF插件，支持导出为pdf、html、png、jpeg等格式。