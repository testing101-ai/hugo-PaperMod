---
title: "CSS Grid完全指南"
date: 2024-01-05T11:20:00+08:00
draft: false
tags: ["CSS", "Grid", "布局"]
categories: ["技术", "前端"]
cover:
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    alt: "CSS Grid"
    caption: "掌握强大的CSS Grid布局系统"
description: "从基础到高级，全面掌握CSS Grid布局技术。"
---

# CSS Grid完全指南

CSS Grid是现代Web布局的强大工具，本文将带你从入门到精通Grid布局。

## Grid基础

### 网格容器
通过`display: grid`创建网格容器。

### 网格项目
容器内的直接子元素自动成为网格项目。

## 核心概念

1. **网格线**
   - 构成网格的分界线
   - 可以命名便于引用

2. **网格轨道**
   - 相邻网格线之间的空间
   - 行轨道和列轨道

3. **网格区域**
   - 四条网格线围成的区域
   - 可以跨越多个单元格

## 实用属性

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px auto;
  gap: 20px;
}
```

Grid为复杂布局提供了优雅的解决方案。