/**
 * Some description..
 */

// TODO: If there is a base we need to include it here.. !
define(['./_project'  ,'./FCO.Dsml' ], function (Project, FCO) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of ComponentRef.
     *
     * @class
     * @classdesc This class represents a(n) ComponentRef.
     * @property {Project.ComponentRef.Attributes} attributes The attributes of the ComponentRef.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.ComponentRef = function (node) {
         FCO.call(this,node);
        // TODO: Add check that core.getBaseType(node) is the correct one.
        if( Project._core.getBaseType(node) !== FCO ){
            throw new TypeError("Wrong Type");
        }
        this._node = node;
        this.attributes = new Project.ComponentRef.Attributes(this._node);
    };

    /**
     * Initializes a new instance of ComponentRef.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of ComponentRef.
     * @param {object} node - The wrapped CoreNode object of ComponentRef.
     * @constructor
     */
    Project.ComponentRef.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };


    Project.ComponentRef.prototype = Object.create(FCO.prototype);
    Project.ComponentRef.prototype.constructor = Project.ComponentRef;

    Project.ComponentRef.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.ComponentRef.Attributes.prototype.constructor = Project.ComponentRef.Attributes;


    /**
     * WebGME node object that represents ComponentRef type.
     * @type {Object}
     * @static
     */
    Project.ComponentRef.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of ComponentRef.
     * @type {string}
     * @static
     */
    Project.ComponentRef.ID = "/X";

    /**
     * WebGME node object's meta type GUID of ComponentRef.
     * @type {string}
     * @static
     */
    Project.ComponentRef.GUID = "43772992-02e7-117f-94c1-0506404971ee";

    /**
     * Creates a new ComponentRef inside given parent.
     * @returns {Project.ComponentRef} The newly created ComponentRef.
     * @param {Project.ComponentRef} parent Instance where the new ComponentRef should be created.
     * @public
     */
    Project.ComponentRef.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.ComponentRef.Type});
        return new Project.ComponentRef(node);
    };

    /**
     * Gets the ID of the ComponentRef instance.
     * @returns {string} The ID.
     * @public
     */
    Project.ComponentRef.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the ComponentRef instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.ComponentRef.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    /**
     * Gets or sets the attribute name of the ComponentRef instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.ComponentRef.Attributes.prototype.name = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'name', value);
        }

        return Project._core.getAttribute(this._node, 'name');
    };


// TODO: Add create children, see UMLStateDiagram.Dsml.js
    Project.ComponentRef.prototype.createChildren = function () {
        return Project.ComponentRef.createObj(this);
    }

    return Project.ComponentRef;
});