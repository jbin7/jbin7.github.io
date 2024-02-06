---
title: neon-glow
date: "2024-02-06"
description: "neon-glow"
category: css,
tags: []
thumbnail:
---

![neon-glow.gif](./neon-glow.gif)


```css
a {
  -webkit-text-stroke: 1px #fff;
  background: linear-gradient(0deg, #fff, #fff);
  -webkit-background-clip: text;
  color: transparent;
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: 0% 100%;
  transition: background-size 0.2s ease-in;
  filter: drop-shadow(0 0 5px #fff);
}

a:hover {  
  background-size: 100% 100%;
}
```