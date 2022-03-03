import * as _ from "./utils/utils";
export default class Component {
  constructor(props) {
    this.props = props;
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state);
    // 需要渲染的virtualDOM
    const virtualDOM = this.render();
    // 获取旧的virtualDOM
    const oldDOM = this.getDOM();
    _.diff(virtualDOM, oldDOM.parentNode, oldDOM);
  }

  setDOM(dom) {
    this._dom = dom;
  }

  getDOM() {
    return this._dom;
  }
}
