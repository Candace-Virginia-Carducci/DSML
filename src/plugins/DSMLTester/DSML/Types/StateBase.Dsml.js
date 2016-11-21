/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'FCO.Dsml' ], function (Project , 'FCO.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of StateBase.
     *
     * @class
     * @classdesc This class represents a(n) StateBase.
     * @property {Project.StateBase.Attributes} attributes The attributes of the StateBase.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.StateBase = function (node) {
        FCO.call(this,node);
        this._node = node;
        this.attributes = new Project.StateBase.Attributes(this._node);
    };

    /**
     * Initializes a new instance of StateBase.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of StateBase.
     * @param {object} node - The wrapped CoreNode object of StateBase.
     * @constructor
     */
    Project.StateBase.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents StateBase type.
     * @type {Object}
     * @static
     */
    Project.StateBase.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of StateBase.
     * @type {string}
     * @static
     */
    Project.StateBase.ID = "/909339777";

    /**
     * WebGME node object's meta type GUID of StateBase.
     * @type {string}
     * @static
     */
    Project.StateBase.GUID = "38b21b05-09bf-7181-0e1c-d7428e3d076e";

    /**
     * Creates a new StateBase inside given parent.
     * @returns {Project.StateBase} The newly created StateBase.
     * @param {Project.StateBase} parent Instance where the new StateBase should be created.
     * @public
     */
    Project.StateBase.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.StateBase.Type});
        return new Project.StateBase(node);
    };

    /**
     * Gets the ID of the StateBase instance.
     * @returns {string} The ID.
     * @public
     */
    Project.StateBase.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the StateBase instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.StateBase.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the StateBase instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.StateBase.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    return Project.StateBase;
});