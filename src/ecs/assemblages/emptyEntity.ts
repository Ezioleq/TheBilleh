import { Entity } from "../entity";
import { Transform } from "../components/transform";

export let EmptyEntity = (): Entity => {
	let entity = new Entity();
	entity.addComponent(new Transform());

	return entity;
};
