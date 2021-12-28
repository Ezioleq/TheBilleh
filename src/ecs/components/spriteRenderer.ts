import { Component } from "../component";

export class SpriteRenderer implements Component {
	public readonly id: string = "SpriteRenderer";
	public static readonly Name: string = "SpriteRenderer";

	public texture: HTMLImageElement;
};
