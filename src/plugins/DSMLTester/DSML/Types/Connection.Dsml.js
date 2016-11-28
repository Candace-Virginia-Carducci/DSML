/**
 * Some description..
 */

// TODO: If there is a base we need to include it here.. !
define(['./_project'  ,'./FCO.Dsml' ], function (Project, FCO) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of Connection.
     *
     * @class
     * @classdesc This class represents a(n) Connection.
     * @property {Project.Connection.Attributes} attributes The attributes of the Connection.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.Connection = function (node) {
         FCO.call(this,node);
        // TODO: Add check that core.getBaseType(node) is the correct one.

        //<!--Project._core.getBaseType(node).....keep getting null as base-->
        if( Project._core.getBase(node) !== "FCO" ){
           throw new TypeError("Wrong Type");
        }
        this._node = node;
        this.attributes = new Project.Connection.Attributes(this._node);
    };

    /**
     * Initializes a new instance of Connection.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of Connection.
     * @param {object} node - The wrapped CoreNode object of Connection.
     * @constructor
     */
    Project.Connection.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };


    Project.Connection.prototype = Object.create(FCO.prototype);
    Project.Connection.prototype.constructor = Project.Connection;

    Project.Connection.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.Connection.Attributes.prototype.constructor = Project.Connection.Attributes;


    /**
     * WebGME node object that represents Connection type.
     * @type {Object}
     * @static
     */
    Project.Connection.Type = "Connection"; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of Connection.
     * @type {string}
     * @static
     */
    Project.Connection.ID = "/C";

    /**
     * WebGME node object's meta type GUID of Connection.
     * @type {string}
     * @static
     */
    Project.Connection.GUID = "dd59afb9-2a61-59b7-3e01-d861f8fe47f6";

    /**
     * Creates a new Connection inside given parent.
     * @returns {Project.Connection} The newly created Connection.
     * @param {Project.Connection} parent Instance where the new Connection should be created.
     * @public
     */
    Project.Connection.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent.node, base: Project.Connection.Type});
        return new Project.Connection(node);
    };

    /**
     * Gets the ID of the Connection instance.
     * @returns {string} The ID.
     * @public
     */
    Project.Connection.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the Connection instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.Connection.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    /**
     * Gets or sets the attribute name of the Connection instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Connection.Attributes.prototype.name = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'name', value);
        }

        return Project._core.getAttribute(this._node, 'name');
    };

    /**
     * Gets or sets the attribute name of the Connection instance.
     * @param {number} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Connection.Attributes.prototype.reliability = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'reliability', value);
        }

        return Project._core.getAttribute(this._node, 'reliability');
    };

    /**
     * Gets or sets the attribute name of the Connection instance.
     * @param {boolean} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.Connection.Attributes.prototype.isSafe = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'isSafe', value);
        }

        return Project._core.getAttribute(this._node, 'isSafe');
    };


// TODO: Add create children, see UMLStateDiagram.Dsml.js
    Project.Connection.prototype.createChildren = function () {
        return Project.Connection.createObj(this._node);
    }


    return Project.Connection;
});