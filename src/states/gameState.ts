import { State } from "./state";
import { Game } from "../game";
import { Entity } from "../ecs/entity";
import { Player } from "../ecs/assemblages"

export class GameState implements State {
	player: Entity;

	constructor() {
		Game.entities = {};

		this.player = Player();
		Game.entities[this.player.id] = this.player;

		console.log("Game entities:\n", Game.entities);
	}

	update(tick: number) {

	}

	// draw(ctx: CanvasRenderingContext2D, step: number) {
		// ctx.font = "30px Roboto"
		// ctx.fillText(`Speed: ${this.player.moveSpeed}\n`, 10, 230);
		// ctx.fillText(`Dir: ${this.player.dir.toString()}\n`, 10, 260);
		// ctx.fillText(`Bullets: ${this.player.bullets.length}\n`, 10, 290);
		// ctx.fillText(`Vel mag: ${Math.round(this.player.vel.magnitude() * 100) / 100}`, 10, 320);
	// }
}
