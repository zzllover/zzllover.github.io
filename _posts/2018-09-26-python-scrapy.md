---
layout:     post
title:      "python爬虫"
subtitle:   "sssssssssssssssb"
date:       2018-09-26 20:00:00
author:     "彭西明"
header-img: "img/mc/g2.jpg"
tags:
    - python
    - 爬虫
---

# python网络爬虫

## 基本原理

- 很简单，就是写python脚本抓取，网页信息。

- 解析获取到的信息

## 入门示例

```python
from urllib.request import urlopen
html = urlopen(
    "http://ocean.cnss.com.cn/").read().decode('utf-8')
print(html)

# 输出整个网页代码
#
```

## 正则表达式
