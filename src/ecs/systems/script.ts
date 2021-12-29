import { Entity } from "../entity";
import { ScriptComponent } from "../components";

export let scriptSystem = (entity: Entity) => {
	let s = entity.getComponent<ScriptComponent>(ScriptComponent.Name);

	if (s === undefined)
		return;

	if (!s.firstRun) {
		s.update();
	} else {
		s.init();
		s.firstRun = false;
	}
};
