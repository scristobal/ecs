/**
 * Description placeholder
 *
 * @param {string} key
 * @typedef {unknown} T
 * @param {T} value
 * @returns {T}
 *
 * @export @typedef {{log: (args: string) => void}} Logger
 */
function stringifyReplacer(key, value) {
    // skip certain fields
    if (key === 'logger') {
        return undefined;
    }
    return value;
}

/**
 * Description placeholder
 *
 * @import { ComponentManager } from "../managers/ComponentManager.mjs";
 *
 * @export
 * @class BaseSystem
 */
export class BaseSystem {
    /**
     * Description placeholder
     *
     * @type {string}
     */
    type;
    /**
     * Description placeholder
     *
     * @type {Logger}
     */
    logger;
    /**
     * Description placeholder
     *
     * @type {ComponentManager}
     */
    componentManager;

    /**
     * Creates an instance of BaseSystem.
     *
     * @constructor
     * @param {ComponentManager} componentManager
     * @param {Logger} logger
     */
    constructor(componentManager, logger) {
        this.type = this.constructor.name;
        this.logger = logger;
        this.componentManager = componentManager;
    }

    /**
     * Description placeholder
     *
     * @param {boolean} [humanReadable=false]
     */
    info(humanReadable = false) {
        this.logger.log(JSON.stringify(this, stringifyReplacer, humanReadable ? 2 : 0));
    }

    /** Description placeholder */
    update() {
        throw new Error('Not implemented');
    }
}
