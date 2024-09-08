import { BaseComponent } from './BaseComponent.mjs';

/** @typdee {color} */

/**
 * Description placeholder
 *
 * @typedef  {[number, number, number] } RGBColor
 * @type {{ [name: string]: RGBColor}}
 */
const colorsMap = {
    red: [255, 0, 0],
    blue: [0, 0, 255]
};

/**
 * Description placeholder
 *
 * @export
 * @class RenderComponent
 * @extends {BaseComponent}
 */
export class RenderComponent extends BaseComponent {
    /**
     * Description placeholder
     *
     * @type {ImageData}
     */
    sprite;

    /**
     * Creates an instance of RenderComponent.
     *
     * @constructor
     * @param {string} entityId
     * @param {string} color
     * @param {{scaleFactor: number}} config
     */
    constructor(entityId, color, config) {
        super(entityId);
        if (!colorsMap[color]) {
            throw new Error(`Color '${color}' is not supported`);
        }

        this.sprite = this._initSprite(color, config.scaleFactor);
    }

    /**
     * Description placeholder
     *
     * @param {string} color
     * @param {number} scaleFactor
     * @returns {ImageData}
     */
    _initSprite(color, scaleFactor) {
        /**  @type {number[]} */
        let colorComponents = new Array();

        for (let pixelNum = 0; pixelNum < scaleFactor * scaleFactor; pixelNum++) {
            // 255 -> no transparency for alpha channel
            colorComponents = colorComponents.concat([...colorsMap[color], 255]);
        }

        return new ImageData(Uint8ClampedArray.from(colorComponents), scaleFactor);
    }
}
