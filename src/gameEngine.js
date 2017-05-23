import * as PIXI from "pixi.js";
import entityManager from "./entityManager"
import mapHandler from './mapHandler.js'

class gameEngine {

  initRenderer() {
    const renderer = PIXI.autoDetectRenderer(800, 600, {
      antialias: false,
      transparent: false,
      resolution: 1
    });
    renderer.view.className = "renderArea";
    document.getElementById("main").appendChild(renderer.view);
    return renderer;
  }

  start() {
    this.renderer = this.initRenderer();
    this.mainScene = new PIXI.Container();
    entityManager.addEntity(new mapHandler(this.mainScene));
    console.log(this.mainScene);
    this.gameLoop(-1)
  }

  gameLoop() {
    requestAnimationFrame(this.gameLoop.bind(this));
    entityManager.update();
    this.renderer.render(this.mainScene)
  }

}

export default gameEngine;