import { Config } from "../../config";
import { Rigidbody, SpriteRenderer, Transform } from "../../ecs/components";
import { ScriptComponent } from "../../ecs/components/scriptComponent";
import { Assets, Input } from "../../managers";
import { Vector2 } from "../../math";

export class PlayerScript extends ScriptComponent {
	private transform: Transform;
	private rigidbody: Rigidbody;
	private spriteRenderer: SpriteRenderer;

	public init(): void {
		this.transform = this.entity.getComponent<Transform>(Transform.Name);
		this.rigidbody = this.entity.getComponent<Rigidbody>(Rigidbody.Name);
		this.spriteRenderer = this.entity.getComponent<SpriteRenderer>(SpriteRenderer.Name);

		this.transform.size = new Vector2(100, 100);
		this.transform.position = new Vector2(
			Config.gameWidth / 2 - this.transform.size.x / 2,
			Config.gameHeight / 2 - this.transform.size.y / 2
		);
		Object.assign(this.transform.previousPosition, this.transform.position);

		this.spriteRenderer.texture = Assets.getTexture("player");

		this.rigidbody.friction = 0.91;
	}

	public update(): void {
		let moveDir = new Vector2();

		if (Input.pressed('w'))
			moveDir.y = -1;
		if (Input.pressed('s'))
			moveDir.y = 1;
		if (Input.pressed('a'))
			moveDir.x = -1;
		if (Input.pressed('d'))
			moveDir.x = 1;

		if (moveDir.magnitude() > 1)
			Object.assign(moveDir, moveDir.normalize());

		this.rigidbody.addForce(moveDir);
	}
}
