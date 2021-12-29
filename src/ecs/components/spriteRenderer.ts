import { Component } from "../component";
import { Entity } from "../entity";

export class SpriteRenderer implements Component {
	public readonly id: string = "SpriteRenderer";
	public static readonly Name: string = "SpriteRenderer";
	public entity: Entity;

	public initialized: boolean = false;
	private _texture: HTMLImageElement;

	public get texture(): HTMLImageElement {
		return this._texture;
	}

	public set texture(texture: HTMLImageElement) {
		this._texture = texture;
		this.initialized = true;
	}
};
