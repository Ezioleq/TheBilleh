import { Collider, Entity, Rigidbody, Vector2 } from "..";
import { Debug } from "../debug";

let getIntersectionDepth = (a: Collider, b: Collider): Vector2 => {
	let distance = new Vector2(
		(a.rect.x + a.rect.w / 2) - (b.rect.x + b.rect.w / 2),
		(a.rect.y + a.rect.h / 2) - (b.rect.y + b.rect.h / 2)
	);

	let minDistance = new Vector2(
		a.rect.w / 2 + b.rect.w / 2,
		a.rect.h / 2 + b.rect.h / 2
	);

	let depth = new Vector2(
		distance.x > 0 ? minDistance.x - distance.x : -minDistance.x - distance.x,
		distance.y > 0 ? minDistance.y - distance.y : -minDistance.y - distance.y
	);

	return depth;
}

export const physics = (entity: Entity) => {
	let rb = entity.getComponent(Rigidbody);
	let col = entity.getComponent(Collider);

	if (col) {
		Array.from(entity.scene.entities.values()).forEach(other => {
			if (other == entity)
				return;

			let otherCol = other.getComponent(Collider);
			if (!col.rect.intersects(otherCol.rect))
				return;

			let intersection = getIntersectionDepth(col, otherCol);

			if (intersection.x !== 0 && intersection.y !== 0) {
				if (Math.abs(intersection.x) < Math.abs(intersection.y)) {
					// Collision on the X axis
					if (Math.sign(intersection.x) < 0) {
						console.log(`${entity.name} Collision on the right`);
					} else {
						console.log(`${entity.name} Collision on the left`);
					}
				} else if (Math.abs(intersection.y) < Math.abs(intersection.x)) {
					// Collision on the Y axis
					if (Math.sign(intersection.y) < 0) {
						console.log(`${entity.name} Collision on the bottom`);
					} else {
						console.log(`${entity.name} Collision on the top`);
					}
				}
			}

			// let deltaX = other.transform.position.x - entity.transform.position.x;
			// let deltaY = other.transform.position.y - entity.transform.position.y;
			// let intersectX = Math.abs(deltaX) - (otherCol.rect.halfSize.x + col.rect.halfSize.x);
			// let intersectY = Math.abs(deltaY) - (otherCol.rect.halfSize.y + col.rect.halfSize.y);

			// if (intersectX < 0 && intersectY < 0) {
			// 	let push = 1;

			// 	if (intersectX > intersectY) {
			// 		if (deltaX > 0) {
			// 			entity.transform.translate(new Vector2(intersectX * (1 - push), 0));
			// 			otherCol.entity.transform.translate(new Vector2(-intersectX * push, 0));
			// 		} else {
			// 			entity.transform.translate(new Vector2(-intersectX * (1 - push), 0));
			// 			otherCol.entity.transform.translate(new Vector2(intersectX * push, 0));
			// 		}
			// 	} else {
			// 		if (deltaY > 0) {
			// 			entity.transform.translate(new Vector2(0, intersectY * (1 - push)));
			// 			otherCol.entity.transform.translate(new Vector2(0, -intersectY * push));
			// 		} else {
			// 			entity.transform.translate(new Vector2(0, -intersectY * (1 - push)));
			// 			otherCol.entity.transform.translate(new Vector2(0, intersectY * push));
			// 		}
			// 	}
			// }
		});
	}

	if (rb) {
		rb.velocity.x += rb.acceleration.x;
		rb.velocity.y += rb.acceleration.y;
		rb.acceleration = new Vector2();

		Object.assign(entity.transform.previousPosition, entity.transform.position);
		entity.transform.position.x += rb.velocity.x;
		entity.transform.position.y += rb.velocity.y;

		rb.velocity.x *= rb.friction;
		rb.velocity.y *= rb.friction;
	}
}
