/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'StateBase.Dsml' ], function (Project , 'StateBase.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of Initial.
     *
     * @class
     * @classdesc This class represents a(n) Initial.
     * @property {Project.Initial.Attributes} attributes The attributes of the Initial.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Initial = function (node) {
        StateBase.call(this,node);
        this._node = node;
        this.attributes = new Project.Initial.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Initial.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Initial.
     * @param {object} node - The wrapped CoreNode object of Initial.
     * @constructor
     */
    Project.Initial.Attributes = function (node) {
        StateBase.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents Initial type.
     * @type {Object}
     * @static
     */
    Project.Initial.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of Initial.
     * @type {string}
     * @static
     */
    Project.Initial.ID = "/1242097160";

    /**
     * WebGME node object's meta type GUID of Initial.
     * @type {string}
     * @static
     */
    Project.Initial.GUID = "f8fc18e6-db54-3cf1-51e5-df2a7693628f";

    /**
     * Creates a new Initial inside given parent.
     * @returns {Project.Initial} The newly created Initial.
     * @param {Project.Initial} parent Instance where the new Initial should be created.
     * @public
     */
    Project.Initial.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.Initial.Type});
        return new Project.Initial(node);
    };

    /**
     * Gets the ID of the Initial instance.
     * @returns {string} The ID.
     * @public
     */
    Project.Initial.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the Initial instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.Initial.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the Initial instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Initial.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    return Project.Initial;
});