class WebComponent extends HTMLElement {
  inner = this.attachShadow({ mode: 'closed' })
  constructor() {
    super()
  }

  set color(value) {
    this.setAttribute('color', value)
    console.log('from setter: color = ', value)
  }

  getColor() {
    console.log('color', this.getAttribute('color'))
  }

  connectedCallback() {
    const color = this.getAttribute('color') || 'black'
    this.inner.innerHTML = /* html */ `
      <input value="${color}" />
    `
  }
}

export const tagname = 'web-component'

window.customElements.define(tagname, WebComponent)
export default tagname
