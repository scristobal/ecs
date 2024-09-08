/**
 * Description placeholder
 *
 * @export
 * @class BaseComponent
 */

export class BaseComponent {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    entityId;
    /**
     * Description placeholder
     *
     * @type {string}
     */
    type;

    /**
     * Creates an instance of BaseComponent.
     *
     * @constructor
     * @param {string} entityId
     */
    constructor(entityId) {
        this.entityId = entityId;
        this.type = this.constructor.name;
    }
}
