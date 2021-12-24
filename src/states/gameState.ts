import { State } from "./state";
import { Player } from "../entities/player";
import { Config } from "../config";
import { Vector2 } from "../math/vector";

export class GameState implements State {
	player: Player;

	constructor() {
		this.player = new Player();
		this.player.transform.position = new Vector2(
			Config.gameWidth / 2 - this.player.transform.size.x / 2,
			Config.gameHeight / 2 - this.player.transform.size.y / 2
		);
	}

	update(tick: number) {
		this.player.update(tick);
	}

	draw(ctx: CanvasRenderingContext2D, step: number) {
		this.player.draw(ctx, step);

		ctx.font = "30px Roboto"
		ctx.fillText(`Speed: ${this.player.moveSpeed}\n`, 10, 230);
		ctx.fillText(`Dir: ${this.player.dir.toString()}\n`, 10, 260);
		ctx.fillText(`Bullets: ${this.player.bullets.length}\n`, 10, 290);
		ctx.fillText(`Vel mag: ${Math.round(this.player.vel.magnitude() * 100) / 100}`, 10, 320);
	}
}