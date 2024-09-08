import { BaseSystem } from './BaseSystem.mjs';

import { POSITION_COMPONENT, RENDER_COMPONENT } from '../components/constants.mjs';
import { ComponentManager } from '../managers/ComponentManager.mjs';

/**
 * Description placeholder
 *
 * @import { Logger } from './BaseSystem.mjs';
 *
 * @export
 * @class RenderSystem
 * @extends {BaseSystem}
 */
export class RenderSystem extends BaseSystem {
    /**
     * Description placeholder
     *
     * @type {HTMLCanvasElement}
     */
    #canvas;
    /**
     * Description placeholder
     *
     * @type {CanvasRenderingContext2D}
     */
    #canvasContext;
    /**
     * Description placeholder
     *
     * @type {number}
     */
    #scaleFactor;

    /**
     * Creates an instance of RenderSystem.
     *
     * @constructor
     * @param {ComponentManager} componentManager
     * @param {{}} [config={}]
     * @param {Logger} logger
     */
    constructor(componentManager, config = {}, logger = { log: () => {} }) {
        super(componentManager, logger);

        this.#scaleFactor = config.scaleFactor;

        this._initScreen(config.canvasId, config.canvasWidth, config.canvasHeight);
    }

    /** Description placeholder */
    update() {
        this.#canvasContext.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        this.componentManager
            .getComponentsByTypes(RENDER_COMPONENT, POSITION_COMPONENT)
            .forEach((entityComponents) => {
                const renderComponent = entityComponents[RENDER_COMPONENT];
                const positionComponent = entityComponents[POSITION_COMPONENT];

                this._drawSprite(renderComponent.sprite, positionComponent.x, positionComponent.y);
            });
    }

    /**
     * Description placeholder
     *
     * @param {string} canvasId
     * @param {number} canvasWidth
     * @param {number} canvasHeight
     */
    _initScreen(canvasId, canvasWidth, canvasHeight) {
        this.#canvas = document.getElementById(canvasId);
        this.#canvas.width = canvasWidth;
        this.#canvas.height = canvasHeight;

        this.#canvasContext = this.#canvas.getContext('2d');
        // Don't smooth pixels
        this.#canvasContext.imageSmoothingEnabled = false;
    }

    /**
     * Description placeholder
     *
     * @param {ImageData} sprite
     * @param {number} x
     * @param {number} y
     */
    _drawSprite(sprite, x, y) {
        this.#canvasContext.putImageData(sprite, x * this.#scaleFactor, y * this.#scaleFactor);
    }
}
