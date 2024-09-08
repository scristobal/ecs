/**
 * Description placeholder
 *
 * @import { BaseComponent } from "../components/BaseComponent.mjs";
 *
 * @template {BaseComponent} T
 * @class ComponentManager
 */
export class ComponentManager {
    /**
     * Description placeholder
     *
     * @type {{[entityId: string]: T[]}}
     */
    #componentsByEntity;

    /**
     * Creates an instance of ComponentManager.
     *
     * @constructor
     */
    constructor() {
        this.#componentsByEntity = {};
    }

    /**
     * Description placeholder
     *
     * @readonly
     * @type {{}}
     */
    get components() {
        return this.#componentsByEntity;
    }

    /**
     * Description placeholder
     *
     * @param {T} component
     */
    addComponent(component) {
        if (!this.#componentsByEntity[component.entityId]) {
            this.#componentsByEntity[component.entityId] = [];
        }
        this.#componentsByEntity[component.entityId].push(component);
    }

    /**
     * Description placeholder
     *
     * @param {string} entityId
     * @returns {T[]}
     */
    getEntityComponents(entityId) {
        return this.#componentsByEntity[entityId] || [];
    }

    /**
     * Description placeholder
     *
     * @param {string} entityId
     * @param {string} componentType
     * @returns {T | undefined}
     */
    getEntityComponentByType(entityId, componentType) {
        const components = this.getEntityComponents(entityId);
        return components.find((component) => component.type === componentType);
    }

    /**
     * Description placeholder
     *
     * Intended to be used with "singleton" components
     *
     * @param {string} componentType
     * @returns {T | undefined}
     */
    getComponentByType(componentType) {
        const entityWithComponent = Object.values(this.#componentsByEntity).find(
            (entityComponents) =>
                entityComponents.find((component) => component.type === componentType)
        );

        if (entityWithComponent) {
            return entityWithComponent.find((component) => component.type === componentType);
        }
        return undefined;
    }

    /**
     * Description placeholder
     *
     * @param {string} componentType
     * @returns {T[] | undefined}
     */
    getComponentsByType(componentType) {
        /** @type {T[]} */
        const components = [];

        Object.values(this.#componentsByEntity).forEach((entityComponents) => {
            entityComponents.forEach((component) => {
                if (componentType === component.type) {
                    components.push(component);
                    // For now, assume that there is only one component of each type per entity
                    return;
                }
            });
        });

        return components;
    }

    /**
     * Description placeholder
     *
     * Intended to be used with 2+ component types, due to the extra complexity
     *
     * @param {...string} componentTypes
     * @returns {{[id:string]:T| undefined}[]}
     */
    getComponentsByTypes(...componentTypes) {
        /** @type {{[id:string]: undefined}} */
        const emptyMap = {};

        /** @type {{[id:string]: T | undefined}} */
        const componentsMapTemplate = componentTypes.reduce((acc, componentType) => {
            acc[componentType] = undefined;
            return acc;
        }, emptyMap);

        /** @type {{[id:string]:T | undefined}[]} */
        const componentsByTypes = [];

        Object.values(this.#componentsByEntity).forEach((entityComponents) => {
            let foundComponents = 0;
            const componentsMap = { ...componentsMapTemplate };

            entityComponents.forEach((component) => {
                if (componentTypes.includes(component.type)) {
                    componentsMap[component.type] = component;
                    foundComponents++;
                }
            });

            if (foundComponents === componentTypes.length) {
                componentsByTypes.push(componentsMap);
            }
        });

        return componentsByTypes;
    }
}
