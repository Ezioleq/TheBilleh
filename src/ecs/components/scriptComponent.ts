import { Component } from "../component";
import { Entity } from "../entity";
import { Script } from "../script";

export class ScriptComponent implements Component, Script {
	public readonly id: string = "ScriptComponent";
	public static readonly Name: string = "ScriptComponent";
	public entity: Entity;

	public firstRun = true;

	public init(): void {}
	public update(): void {}
};
