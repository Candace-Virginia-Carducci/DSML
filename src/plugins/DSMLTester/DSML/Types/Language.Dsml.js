/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'FCO.Dsml' ], function (Project , 'FCO.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of Language.
     *
     * @class
     * @classdesc This class represents a(n) Language.
     * @property {Project.Language.Attributes} attributes The attributes of the Language.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Language = function (node) {
        FCO.call(this,node);
        this._node = node;
        this.attributes = new Project.Language.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Language.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Language.
     * @param {object} node - The wrapped CoreNode object of Language.
     * @constructor
     */
    Project.Language.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents Language type.
     * @type {Object}
     * @static
     */
    Project.Language.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of Language.
     * @type {string}
     * @static
     */
    Project.Language.ID = "/615025579";

    /**
     * WebGME node object's meta type GUID of Language.
     * @type {string}
     * @static
     */
    Project.Language.GUID = "d799addf-eb22-8471-0f3e-a5146ac905c8";

    /**
     * Creates a new Language inside given parent.
     * @returns {Project.Language} The newly created Language.
     * @param {Project.Language} parent Instance where the new Language should be created.
     * @public
     */
    Project.Language.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.Language.Type});
        return new Project.Language(node);
    };

    /**
     * Gets the ID of the Language instance.
     * @returns {string} The ID.
     * @public
     */
    Project.Language.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the Language instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.Language.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the Language instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Language.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    return Project.Language;
});