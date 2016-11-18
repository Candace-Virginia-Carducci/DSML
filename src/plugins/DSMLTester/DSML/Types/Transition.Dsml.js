/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'FCO.Dsml' ], function (Project , 'FCO.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of Transition.
     *
     * @class
     * @classdesc This class represents a(n) Transition.
     * @property {Project.Transition.Attributes} attributes The attributes of the Transition.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Transition = function (node) {
        FCO.call(this,node);
        this._node = node;
        this.attributes = new Project.Transition.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Transition.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Transition.
     * @param {object} node - The wrapped CoreNode object of Transition.
     * @constructor
     */
    Project.Transition.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents Transition type.
     * @type {Object}
     * @static
     */
    Project.Transition.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of Transition.
     * @type {string}
     * @static
     */
    Project.Transition.ID = "/318746662";

    /**
     * WebGME node object's meta type GUID of Transition.
     * @type {string}
     * @static
     */
    Project.Transition.GUID = "6142e6db-2edb-439d-085a-4546ea60084e";

    /**
     * Creates a new Transition inside given parent.
     * @returns {Project.Transition} The newly created Transition.
     * @param {Project.Transition} parent Instance where the new Transition should be created.
     * @public
     */
    Project.Transition.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.Transition.Type});
        return new Project.Transition(node);
    };

    /**
     * Gets the ID of the Transition instance.
     * @returns {string} The ID.
     * @public
     */
    Project.Transition.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the Transition instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.Transition.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the Transition instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Transition.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the Transition instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Transition.Attributes.prototype.event = function (value) {
        if (typeof value !== typeof event) {
            Project._core.setAttribute(this._node, event, value);
        }

        return Project._core.getAttribute(this._node, event);
    };

    return Project.Transition;
});