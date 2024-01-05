import { _decorator, Component, Node, Input, input } from "cc";
const { ccclass, property } = _decorator;

@ccclass("cxk")
export class cxk extends Component {
  jumpHeight: 200;
  jumpDuration: 0.35;
  xSpeed: 350;
  start() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }
  onKeyDown(event) {
    console.log("鼠标按下", event.keyCode);
    const position = this.node.getPosition();
    switch (event.keyCode) {
      case 87: // 按下w
        this.node.setPosition(position.x, position.y + 120);
        break;
      case 65: // 按下a
        this.node.setPosition(position.x - 60, position.y);
        break;
      case 68: // 按下d
        this.node.setPosition(position.x + 60, position.y);
      default:
        break;
    }
  }
  onKeyUp(event) {
    console.log("鼠标放开", event.keyCode);
    switch (event.keyCode) {
      case 87: // 按下w
        const position = this.node.getPosition();
        this.node.setPosition(position.x, 0);
        break;
      default:
        break;
    }
  }
  update(deltaTime: number) {}
}
