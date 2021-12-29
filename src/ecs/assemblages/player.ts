import { Entity } from "../entity";
import { Transform, Rigidbody, SpriteRenderer } from "../components";
import { PlayerScript } from "../../scripts/player/player";

export let Player = (): Entity => {
	let entity = new Entity();
	entity.addComponent(new Transform());
	entity.addComponent(new SpriteRenderer());
	entity.addComponent(new Rigidbody());
	entity.addComponent(new PlayerScript());

	return entity;
};
