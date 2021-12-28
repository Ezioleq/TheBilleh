import { Component } from "../component";
import { Vector2 } from "../../math/vector";

export class Rigidbody implements Component {
	public readonly id: string = "Rigidbody";
	public static readonly Name: string = "Rigidbody";

	public velocity: Vector2 = new Vector2();
	public acceleration: Vector2 = new Vector2();
	public useGravity: boolean = false;
	public friction: number = 1;

	public addForce(force: Vector2) {
		this.acceleration.add(force);
	}
};
