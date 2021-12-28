import { Component } from "../component";
import { Vector2 } from "../../math/vector";

export class Rigidbody implements Component {
	name: string = "Rigidbody";

	velocity: Vector2 = new Vector2();
	acceleration: Vector2 = new Vector2();
	useGravity: boolean = false;
	friction: number = 1;

	addForce(force: Vector2) {
		this.acceleration.add(force);
	}
};
