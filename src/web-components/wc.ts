class WebComponent extends HTMLElement {
  inner = this.attachShadow({ mode: 'closed' })

  static get observedAttributes() {
    return ['color']
  }

  constructor() {
    super()
  }

  set color(value) {
    this.setAttribute('color', value)
    console.log('from setter: color = ', value)
  }

  get color() {
    return this.getAttribute('color')
  }

  connectedCallback() {
    const color = this.getAttribute('color') || 'black'
    this.inner.innerHTML = /* html */ `
      <input value="${color}" />
    `
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log('attributeChangedCallback', name, oldValue, newValue)
    if (oldValue === newValue) return
    console.log('attributeChangedCallback', name, oldValue, newValue)
    const element = this.inner.querySelector('input')
    if (element) {
      element.setAttribute(name, newValue)
    }
    // this.connectedCallback()
  }
}

export const tagname = 'web-component'

window.customElements.define(tagname, WebComponent)
export default tagname
