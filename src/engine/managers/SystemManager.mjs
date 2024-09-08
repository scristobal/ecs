/**
 * Description placeholder
 *
 * @import { BaseSystem } from '../systems/BaseSystem.mjs';
 *
 * @export
 * @class SystemManager
 */
export class SystemManager {
    /**
     * Description placeholder
     * @type {BaseSystem[]}
     */
    #systems;

    /**
     * Creates an instance of SystemManager.
     *
     * @constructor
     */
    constructor() {
        this.#systems = [];
    }

    /**
     * Description placeholder
     *
     * @param {BaseSystem} system
     */
    addSystem(system) {
        this.#systems.push(system);
    }

    /** Description placeholder */
    update() {
        this.#systems.forEach((system) => {
            system.update();
        });
    }

    /**
     * Description placeholder
     *
     * @param {boolean} [humanReadable=false]
     */
    info(humanReadable = false) {
        this.#systems.forEach((system) => {
            system.info(humanReadable);
        });
    }
}
