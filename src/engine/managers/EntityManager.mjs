/**
 * Description placeholder
 *
 * @type {":"}
 */
export const ENTITY_PREFIX_GLUE = ':';

/**
 * Description placeholder
 *
 * @export
 * @class EntityManager
 */
export class EntityManager {
    /**
     * Description placeholder
     *
     * @type {string[]}
     */
    #entities;

    /**
     * Creates an instance of EntityManager.
     *
     * @constructor
     */
    constructor() {
        this.#entities = [];
    }

    /**
     * Description placeholder
     *
     * @param {string} [entityIdPrefix=""]
     * @returns {string}
     */
    addEntity(entityIdPrefix = '') {
        // For now we don't care about id collisions, as we can't delete entities
        const entityId = `${entityIdPrefix ? entityIdPrefix + ENTITY_PREFIX_GLUE : ''}${this.#entities.length + 1}`;

        this.#entities.push(entityId);

        return entityId;
    }

    /**
     * Description placeholder
     *
     * @param {string} entityId
     * @returns {boolean}
     */
    entityExists(entityId) {
        return this.#entities.includes(entityId);
    }
}
