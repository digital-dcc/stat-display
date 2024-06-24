import {LitElement, html, css} from 'lit';

export class StatDisplay extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
				font-family: var(--main-font, 'Arial', sans-serif);
				font-size: 1em;
      }
			.wrapper {
				border: 1px black solid;
    		width: fit-content;
				aspect-ratio: 1 / 1;
    		padding: 5px;
				border-radius: 10px;
				min-width: 60px;
				max-width: min-content;
				display: flex;
				flex-direction: column;
			}
			h1 {
				margin: 0 auto;
				width: max-content;
				font-size: 1em;
    		flex: 0.6;
			}
			button {
				margin: 0 auto;
    		display: block;
				border: 0;
				background-color: unset;
				flex: 1.4;
    		font-size: 1.7em;
			}
			button.with-base {
				flex: 0;
			}
			.clickable {
				cursor: pointer;
			}
			.clickable:active {
				transform: translateY(1px);
			}
			.base {
				padding: 3px; 
				min-width: 18px;
				max-width: fit-content;
				margin: 0 auto;
				text-align: center;
				border: 1px black solid;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				margin-top: -12px;
				background-color: white;
			}
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      value: {type: Number},
			modifier: { type: String },
			suffix: { type: String },
			textPosition: { type: String, attribute: "text-position" },
			clickable: { type: Boolean },
			base: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = '';
		this.value = null;
		this.modifier = '';
		this.suffix = '';
		this.textPosition = 'top';
		this.clickable = false;
		this.base = null;
  }

  render() {
    return html`
			<div class="wrapper" part="wrapper">
				${this.textPosition !== "bottom" ? html`<h1 part="name">${this.name}</h1>` : html``}
				<button @click=${this._onClick} part="value" class="${this.clickable ? "clickable" : ""} ${this.base ? "with-base" : ""}">
					${this.modifier}${this.value}${this.suffix}
				</button>
				${this.textPosition === "bottom" ? html`<h1 part="name">${this.name}</h1>` : html``}
			</div>
			${this.base ? this._displayBase() : html``}
    `;
  }

	_displayBase() {
		return html`
			<div class="base">${this.base}</div>
		`;
	}

  _onClick() {
    this.dispatchEvent(new CustomEvent('value-clicked'));
  }
}

window.customElements.define('stat-display', StatDisplay);
