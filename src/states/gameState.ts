import { State } from "./state";
import { Player } from "../entities/player";
import { Config } from "../config";
import { Vector2 } from "../math/vector";
import { Entity } from "../ecs/entity";
import { Game } from "../game";
import { Rigidbody } from "../ecs/components/rigidbody";
import { Transform } from "../ecs/components/transform";
import { SpriteRenderer } from "../ecs/components/spriteRenderer";
import { Assets } from "../managers/assetManager";
import { EmptyEntity } from "../ecs/assemblages/emptyEntity"

export class GameState implements State {
	player: Player;
	entity: Entity;

	constructor() {
		Game.entities = {};

		this.player = new Player();
		this.player.transform.position = new Vector2(
			Config.gameWidth / 2 - this.player.transform.size.x / 2,
			Config.gameHeight / 2 - this.player.transform.size.y / 2
		);

		// Testing entity
		this.entity = EmptyEntity();
		this.entity.addComponent(new SpriteRenderer());
		this.entity.addComponent(new Rigidbody());

		this.entity.getComponent<Transform>(Transform.Name).size = new Vector2(100, 100);
		this.entity.getComponent<SpriteRenderer>(SpriteRenderer.Name).texture = Assets.getTexture("player");

		let erb = this.entity.getComponent<Rigidbody>(Rigidbody.Name);
		erb.friction = 0.91;
		erb.addForce(new Vector2(20, 20));
		Game.entities[this.entity.id] = this.entity;
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
