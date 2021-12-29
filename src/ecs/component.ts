import { Entity } from "./entity";

export interface Component {
	readonly id: string;
	entity: Entity;
}
