import { BaseSystem } from './BaseSystem.mjs';

import { POSITION_COMPONENT, WORLD_COMPONENT } from '../components/constants.mjs';

/**
 * Description placeholder
 *
 * @export
 * @class MovementSystem
 * @extends {BaseSystem}
 */
export class MovementSystem extends BaseSystem {
    /**
     * Creates an instance of MovementSystem.
     *
     * @constructor
     * @param {*} componentManager
     * @param {{}} [config={}]
     * @param {*} logger
     */
    constructor(componentManager, config = {}, logger) {
        super(componentManager, logger);
    }

    /** Description placeholder */
    update() {
        const worldComponent = this.componentManager.getComponentByType(WORLD_COMPONENT);

        this.componentManager
            .getComponentsByType(POSITION_COMPONENT)
            .forEach((positionComponent) => {
                if (this._canMoveXAxis(positionComponent, worldComponent)) {
                    positionComponent.x += positionComponent.velocity.x;
                } else {
                    // Either fully stop, or reduce velocity to minimum
                    if (positionComponent.velocity.x === 1 || positionComponent.velocity.x === -1) {
                        positionComponent.velocity.x = 0;
                    } else if (positionComponent.velocity.x > 1) {
                        positionComponent.velocity.x = 1;
                    } else if (positionComponent.velocity.x < -1) {
                        positionComponent.velocity.x = -1;
                    }
                }
                if (this._canMoveYAxis(positionComponent, worldComponent)) {
                    positionComponent.y += positionComponent.velocity.y;
                } else {
                    // Either fully stop, or reduce velocity to minimum
                    if (positionComponent.velocity.y === 1 || positionComponent.velocity.y === -1) {
                        positionComponent.velocity.y = 0;
                    } else if (positionComponent.velocity.y > 1) {
                        positionComponent.velocity.y = 1;
                    } else if (positionComponent.velocity.y < -1) {
                        positionComponent.velocity.y = -1;
                    }
                }

                // this.logger.log(
                //   `${positionComponent.entityId} (${positionComponent.x},${positionComponent.y})`
                // );
            });
    }

    /**
     * Description placeholder
     *
     * @param {*} positionComponent
     * @param {*} worldComponent
     * @returns {boolean}
     */
    _canMoveXAxis(positionComponent, worldComponent) {
        return (
            positionComponent.velocity.x === 0 ||
            (positionComponent.x + positionComponent.velocity.x >= 0 &&
                positionComponent.x + positionComponent.velocity.x < worldComponent.width)
        );
    }

    /**
     * Description placeholder
     *
     * @param {*} positionComponent
     * @param {*} worldComponent
     * @returns {boolean}
     */
    _canMoveYAxis(positionComponent, worldComponent) {
        return (
            positionComponent.velocity.y === 0 ||
            (positionComponent.y + positionComponent.velocity.y >= 0 &&
                positionComponent.y + positionComponent.velocity.y < worldComponent.height)
        );
    }
}
