import { Component } from "../component";
import { Vector2 } from "../../math/vector";
import { Entity } from "../entity";

export class Rigidbody implements Component {
	public readonly id: string = "Rigidbody";
	public static readonly Name: string = "Rigidbody";
	public entity: Entity;

	public velocity: Vector2 = new Vector2();
	public acceleration: Vector2 = new Vector2();
	public useGravity: boolean = false;
	public friction: number = 1;

	public addForce(force: Vector2) {
		this.acceleration.add(force);
	}
};
