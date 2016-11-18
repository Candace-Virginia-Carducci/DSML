/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'StateBase.Dsml' ], function (Project , 'StateBase.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of End.
     *
     * @class
     * @classdesc This class represents a(n) End.
     * @property {Project.End.Attributes} attributes The attributes of the End.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.End = function (node) {
        StateBase.call(this,node);
        this._node = node;
        this.attributes = new Project.End.Attributes(this._node);
    };

    /**
     * Initializes a new instance of End.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of End.
     * @param {object} node - The wrapped CoreNode object of End.
     * @constructor
     */
    Project.End.Attributes = function (node) {
        StateBase.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents End type.
     * @type {Object}
     * @static
     */
    Project.End.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of End.
     * @type {string}
     * @static
     */
    Project.End.ID = "/1178174363";

    /**
     * WebGME node object's meta type GUID of End.
     * @type {string}
     * @static
     */
    Project.End.GUID = "f61f3ba5-029c-d771-7945-34eb2057bdf1";

    /**
     * Creates a new End inside given parent.
     * @returns {Project.End} The newly created End.
     * @param {Project.End} parent Instance where the new End should be created.
     * @public
     */
    Project.End.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.End.Type});
        return new Project.End(node);
    };

    /**
     * Gets the ID of the End instance.
     * @returns {string} The ID.
     * @public
     */
    Project.End.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the End instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.End.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the End instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.End.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    return Project.End;
});