import { Vector2 } from "../../math/vector";
import { Rigidbody } from "../components/rigidbody";
import { Transform } from "../components/transform";
import { Entity } from "../entity";

export let physicsSystem = (entity: Entity) => {
	let rb = entity.getComponent<Rigidbody>(Rigidbody.Name);
	let t = entity.getComponent<Transform>(Transform.Name);

	if (t === undefined || rb === undefined)
		return;

	rb.velocity.x += rb.acceleration.x;
	rb.velocity.y += rb.acceleration.y;
	rb.acceleration = new Vector2();

	Object.assign(t.previousPosition, t.position);
	t.position.x += rb.velocity.x;
	t.position.y += rb.velocity.y;

	rb.velocity.x *= rb.friction;
	rb.velocity.y *= rb.friction;
}
