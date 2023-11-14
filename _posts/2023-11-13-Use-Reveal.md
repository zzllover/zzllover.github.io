---
layout: presentation
title: Jekyll中加入RevealJS
---

<section data-markdown>
  <textarea data-template>

## 在Jekyll 中加入 RevealJS
    
1. 引入官网提供的JS依赖
2. 在`_layouts`中设置RevealJS博客模板
3. 在`_posts`中使用模板
4. 编写基于Markdown的revealJS博客模板

---
## 1 - 引入官网提供的JS依赖

- Download Demo https://github.com/hakimel/reveal.js/archive/master.zip
- Copy dist/* & plugin/* 到项目的js公用资源文件夹下

(本人直接拷贝到了项目的js文件下)

---
## 2 - 在`_layouts`中设置RevealJS博客模板

- 在_layouts文件下创建html文件，例如presentation.html 
- copy 步骤#1官网 里面下载demo html，只保留框架部分（即head & script部分） 
- 修改引入的资源文件的相对路径 
- body中设置好revealJS渲染的指定dom，并将 content 展位变量设置其中 

---
## 2 - 在`_layouts`中设置RevealJS博客模板
```html []
<!doctype html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="/js/reveal/output/reset.css">
    <link rel="stylesheet" href="/js/reveal/output/reveal.css">
    <link rel="stylesheet" href="/js/reveal/output/theme/solarized.css" id="theme">
    <link rel="stylesheet" href="/js/reveal/plugin/highlight/monokai.css">
</head>
<body>
    <div class="reveal">
        <!-- Any section element inside of this container is displayed as a slide -->
        <div class="slides">
            
        </div>
    </div>
    <script src="/js/reveal/output/reveal.js"></script>
    <script src="/js/reveal/plugin/zoom/zoom.js"></script>
    <script src="/js/reveal/plugin/notes/notes.js"></script>
    <script src="/js/reveal/plugin/search/search.js"></script>
    <script src="/js/reveal/plugin/markdown/markdown.js"></script>
    <script src="/js/reveal/plugin/highlight/highlight.js"></script>
    <script>
        // Also available as an ES module, see:
        // https://revealjs.com/initialization/
        Reveal.initialize({
            controls: true,
            progress: true,
            center: true,
            hash: true,
            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
        });
    </script>
</body>
</html>
```

---
## 3 - 在`_posts`中使用模板

- 可以参考标准的post文件，此时只需要设置 layout: presentation，即可将该博客的目标模板设置为 #2 中写好的模板
- 其他变量的设置与Jekyll其他post一致

---
## 4 - 编写基于Markdown的revealJS博客模板

- 只需要参考官网的方法将md语句包裹在下面标签中

```
    <section data-markdown>
      <textarea data-template>
        <!-- Your Markdown here -->
      ...
```

  </textarea>
</section>

