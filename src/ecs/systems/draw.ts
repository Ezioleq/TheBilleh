import { Entity } from "../entity";
import { Game } from "../../game";
import { Vector2 } from "../../math/vector";
import { SpriteRenderer, Transform } from "../components";

export let drawSystem = (entity: Entity, step: number) => {
	let sr = entity.getComponent<SpriteRenderer>(SpriteRenderer.Name);
	let t = entity.getComponent<Transform>(Transform.Name);

	if (!sr.initialized || sr === undefined || t === undefined)
		return;

	let position: Vector2 = t.previousPosition.lerp(t.position, step);

	Game.ctx.drawImage(
		sr.texture,
		(0.5 + position.x) | 0,
		(0.5 + position.y) | 0,
		(0.5 + t.size.x) | 0,
		(0.5 + t.size.y) | 0
	);
};
