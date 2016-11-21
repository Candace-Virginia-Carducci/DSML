/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'FCO.Dsml' ], function (Project , 'FCO.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of Documentation.
     *
     * @class
     * @classdesc This class represents a(n) Documentation.
     * @property {Project.Documentation.Attributes} attributes The attributes of the Documentation.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Documentation = function (node) {
        FCO.call(this,node);
        this._node = node;
        this.attributes = new Project.Documentation.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Documentation.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Documentation.
     * @param {object} node - The wrapped CoreNode object of Documentation.
     * @constructor
     */
    Project.Documentation.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents Documentation type.
     * @type {Object}
     * @static
     */
    Project.Documentation.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of Documentation.
     * @type {string}
     * @static
     */
    Project.Documentation.ID = "/i";

    /**
     * WebGME node object's meta type GUID of Documentation.
     * @type {string}
     * @static
     */
    Project.Documentation.GUID = "1580d9b2-6093-84f0-06ec-858980294d65";

    /**
     * Creates a new Documentation inside given parent.
     * @returns {Project.Documentation} The newly created Documentation.
     * @param {Project.Documentation} parent Instance where the new Documentation should be created.
     * @public
     */
    Project.Documentation.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.Documentation.Type});
        return new Project.Documentation(node);
    };

    /**
     * Gets the ID of the Documentation instance.
     * @returns {string} The ID.
     * @public
     */
    Project.Documentation.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the Documentation instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.Documentation.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the Documentation instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Documentation.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the Documentation instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Documentation.Attributes.prototype.documentation = function (value) {
        if (typeof value !== typeof documentation) {
            Project._core.setAttribute(this._node, documentation, value);
        }

        return Project._core.getAttribute(this._node, documentation);
    };

    return Project.Documentation;
});