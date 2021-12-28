import { Component } from "../component";
import { Vector2 } from "../../math/vector";

export class Transform implements Component {
	name: string = "Transform";

	position: Vector2 = new Vector2();
	previousPosition: Vector2 = new Vector2();
	size: Vector2 = new Vector2();
	scale: Vector2 = new Vector2(1, 1);	
};
