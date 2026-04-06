---
title: "用 Tailwind CSS 快速构建现代 UI"
description: "Tailwind CSS 是一个实用优先的 CSS 框架，本文介绍如何高效使用它来构建漂亮的界面。"
date: 2024-04-01
tags: ["CSS", "Tailwind", "前端"]
---

Tailwind CSS 彻底改变了我写样式的方式。与传统的"命名类"方式不同，它采用**实用类优先**的思路，让你直接在 HTML 中组合样式。

## 核心理念

Tailwind 的核心是：**不需要离开 HTML 去写 CSS**。

```html
<button class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
  点击我
</button>
```

## 为什么我喜欢它

1. **快速原型**：无需在 HTML 和 CSS 文件之间切换
2. **按需生成**：只打包用到的样式，体积极小
3. **设计系统内置**：默认的间距、颜色、字体等都经过精心设计
4. **响应式简单**：`sm:`, `md:`, `lg:` 前缀让响应式变得直观

## 暗色模式

配合 `dark:` 前缀，暗色模式实现极其简单：

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  自动适配暗色模式
</div>
```

总的来说，Tailwind CSS 是现代前端开发的利器，值得深入学习。
