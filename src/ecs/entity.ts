import { Random } from "../math/random";
import { Component } from "./component";

export class Entity {
	public id: string;
	public components: { [k: string]: Component } = {};
	private static _count: number = 0;

	public constructor() {
		this.id = Random.generateUid(12);
		Entity._count++;
		return this;
	}

	public addComponent(component: Component) {
		let c = component;
		c.entity = this;
		this.components[component.id] = c;
		return this;
	}

	public removeComponent(componentName: string) {
		delete this.components[componentName];
		return this;
	}

	// おまえわもう死んでいる
	public getComponent<T>(type: string): T {
		return this.components[type] as unknown as T;
	}
}
