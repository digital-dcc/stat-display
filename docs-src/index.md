---
layout: page.11ty.cjs
title: <stat-display> ⌲ Home
---

# &lt;stat-display>

`<stat-display>` can be used to display a stat in digital tools for tabletop roleplaying games

## As easy as HTML

<section class="columns">
  <div>

`<stat-display>` is just an HTML element. You can it anywhere you can use HTML!

```html
<stat-display name="HP" value="7"></stat-display>
```

  </div>
  <div>

<stat-display name="HP" value="7"></stat-display>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<stat-display>` can be configured with attributes in plain HTML. It accepts name and value attributes.

```html
<stat-display name="AC" value="15"></stat-display>
```

  </div>
  <div>

<stat-display name="AC" value="15"></stat-display>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<stat-display>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'Init';
const value = '+1';

render(
  html`
    <h2>This is a &lt;stat-display&gt;</h2>
    <stat-display .name=${name} .value=${value}></stat-display>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;stat-display&gt;</h2>
<stat-display name="Init" value="+1"></stat-display>

  </div>
</section>
