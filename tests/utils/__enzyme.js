export default class EnzymeExtend {
  constructor() {
    this.container = null;
  }

  destroyReactContainerDom(comp) {
    this.reactContainerDom(comp);
    container.parentNode.removeChild(this.container);
  }

  createContainerDom(comp) {
    this.container = componetWrapper[Symbol.for('enzyme.__node__')].instance.componentDidMount
  }

  get reactContainerDom() {
    return this.container;
  }
}