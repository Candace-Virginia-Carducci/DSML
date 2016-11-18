/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'StateBase.Dsml' ], function (Project , 'StateBase.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of State.
     *
     * @class
     * @classdesc This class represents a(n) State.
     * @property {Project.State.Attributes} attributes The attributes of the State.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.State = function (node) {
        StateBase.call(this,node);
        this._node = node;
        this.attributes = new Project.State.Attributes(this._node);
    };

    /**
     * Initializes a new instance of State.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of State.
     * @param {object} node - The wrapped CoreNode object of State.
     * @constructor
     */
    Project.State.Attributes = function (node) {
        StateBase.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents State type.
     * @type {Object}
     * @static
     */
    Project.State.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of State.
     * @type {string}
     * @static
     */
    Project.State.ID = "/1416392928";

    /**
     * WebGME node object's meta type GUID of State.
     * @type {string}
     * @static
     */
    Project.State.GUID = "682bbfe9-48c6-9de0-2a45-3315bca7c7cf";

    /**
     * Creates a new State inside given parent.
     * @returns {Project.State} The newly created State.
     * @param {Project.State} parent Instance where the new State should be created.
     * @public
     */
    Project.State.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.State.Type});
        return new Project.State(node);
    };

    /**
     * Gets the ID of the State instance.
     * @returns {string} The ID.
     * @public
     */
    Project.State.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the State instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.State.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the State instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.State.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    return Project.State;
});