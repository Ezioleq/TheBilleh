import { Component } from "../component";
import { Vector2 } from "../../math/vector";
import { Entity } from "../entity";

export class Transform implements Component {
	public readonly id: string = "Transform";
	public static readonly Name: string = "Transform";
	public entity: Entity;

	public position: Vector2 = new Vector2();
	public previousPosition: Vector2 = new Vector2();
	public size: Vector2 = new Vector2();
	public scale: Vector2 = new Vector2(1, 1);
};
