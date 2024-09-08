import { BaseComponent } from './BaseComponent.mjs';

export class PositionComponent extends BaseComponent {
    /**
     * Description placeholder
     *
     * @type {number}
     */
    x;
    /**
     * Description placeholder
     *
     * @type {number}
     */
    y;
    /**
     * Description placeholder
     *
     * @type {{ x: number; y: number; }}
     */
    velocity;

    /**
     * Creates an instance of PositionComponent.
     *
     * @constructor
     * @param {string} entityId
     * @param {number} x
     * @param {number} y
     */
    constructor(entityId, x, y) {
        super(entityId);
        this.x = x;
        this.y = y;

        this.velocity = {
            x: 0,
            y: 0
        };
    }
}
