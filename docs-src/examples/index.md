---
layout: example.11ty.cjs
title: <stat-display> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
	stat-display::part(wrapper) {
  	border: 2px dotted orange;
	}
	stat-display::part(name) {
  	color: purple;
	}
	stat-display::part(value) {
  	color: green;
	}
</style>
<stat-display name="Int" value="18"></stat-display>

<h3>CSS</h3>

```css
stat-display::part(wrapper) {
  border: 2px dotted orange;
}
stat-display::part(name) {
  color: purple;
}
stat-display::part(value) {
  color: green;
}
```

<h3>HTML</h3>

```html
<stat-display name="Int" value="18"></stat-display>
```
