import { _decorator, Component, Node, Prefab, instantiate, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("grassAction")
export class grassAction extends Component {
  @property(Prefab)
  grass: Prefab = null;
  private nodes = [];
  private step = 1;
  start() {
    const grassList = [
      {
        position: { x: -900, y: -160 },
      },
      {
        position: { x: -600, y: -160 },
      },
      {
        position: { x: -300, y: -160 },
      },
      {
        position: { x: 0, y: -160 },
      },
      {
        position: { x: 300, y: -160 },
      },
      {
        position: { x: 600, y: -160 },
      },
      {
        position: { x: 900, y: -160 },
      },
    ];
    grassList.forEach((obj) => {
      this.initGrass(obj.position); // 初始化地面
    });
  }
  initGrass(position) {
    let scene = director.getScene();
    let node = instantiate(this.grass);
    console.log("grass", this.grass, scene, node);
    this.node.addChild(node);
    node.setPosition(position.x, position.y);
    this.nodes.push({
      node,
      position,
    });
  }
  update(deltaTime: number) {
    this.nodes = this.nodes.map(({ node, position }) => {
      node.setPosition(position.x - this.step, position.y);
      if (position.x - this.step <= -1200) {
        return {
          node,
          position: { x: 900, y: position.y },
        };
      } else {
        return {
          node,
          position: { x: position.x - this.step, y: position.y },
        };
      }
    });
  }
}
