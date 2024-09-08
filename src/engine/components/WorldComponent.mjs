import { BaseComponent } from './BaseComponent.mjs';

/**
 * Description placeholder
 *
 * @export
 * @class WorldComponent
 * @extends {BaseComponent}
 */
export class WorldComponent extends BaseComponent {
    /**
     * Description placeholder
     *
     * @type {number}
     */
    width;
    /**
     * Description placeholder
     *
     * @type {number}
     */
    height;

    /**
     * Creates an instance of WorldComponent.
     *
     * @constructor
     * @param {string} entityId
     * @param {number} width
     * @param {number} height
     */
    constructor(entityId, width, height) {
        super(entityId);
        this.width = width;
        this.height = height;
    }
}
