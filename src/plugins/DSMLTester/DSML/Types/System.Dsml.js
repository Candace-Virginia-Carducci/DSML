/**
 * Some description..
 */

// TODO: If there is a base we need to include it here.. !
define(['./_project'  ,'./FCO.Dsml' ], function (Project, FCO) {
    'use strict';

//TODO: Replace all FCO with actual name. !
//TODO: Add Children

    /**
     * Initializes a new instance of System.
     *
     * @class
     * @classdesc This class represents a(n) System.
     * @property {Project.System.Attributes} attributes The attributes of the System.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.System = function (node, skipTypeCheck) {
         FCO.call(this, node, true);
        // TODO: Add check that core.getBaseType(node) is the correct one. !

        if(!skipTypeCheck && Project._core.getBaseType(node) !== Project.System.Type){
           throw new TypeError("Wrong Type");
        }
        this._node = node;
        this.attributes = new Project.System.Attributes(this._node);
    };

    /**
     * Initializes a new instance of System.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of System.
     * @param {object} node - The wrapped CoreNode object of System.
     * @constructor
     */
    Project.System.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };


    Project.System.prototype = Object.create(FCO.prototype);
    Project.System.prototype.constructor = Project.System;

    Project.System.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.System.Attributes.prototype.constructor = Project.System.Attributes;


    /**
     * WebGME node object that represents System type.
     * @type {Object}
     * @static
     */
    Project.System.Type =  null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of System.
     * @type {string}
     * @static
     */
    Project.System.ID = "/j";

    /**
     * WebGME node object's meta type GUID of System.
     * @type {string}
     * @static
     */
    Project.System.GUID = "19a8201c-9841-999b-d93b-d2adbc57c106";

    /**
     * Creates a new System inside given parent.
     * @returns {Project.System} The newly created System.
     * @param {Project.System} parent Instance where the new System should be created.
     * @public
     */
    Project.System.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent.node, base: Project.System.Type});
        return new Project.System(node);
    };

    /**
     * Gets the ID of the System instance.
     * @returns {string} The ID.
     * @public
     */
    Project.System.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the System instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.System.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };

// TODO: For each derived type add
   /**
    * Downcast emulation
    * @returns {Project.METATYPE} The node as an Project.METATYPE.
    * @public
    */
    Project.System.prototype.asMETATYPE = function () {
        // TODO: Consider adding a check for the base-type here.
        return this;
    };


    /**
     * Gets or sets the attribute name of the System instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.System.Attributes.prototype.name = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'name', value);
        }

        return Project._core.getAttribute(this._node, 'name');
    };

    /**
     * Gets or sets the attribute name of the System instance.
     * @param {number} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.System.Attributes.prototype.reliability = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'reliability', value);
        }

        return Project._core.getAttribute(this._node, 'reliability');
    };

    /**
     * Gets or sets the attribute name of the System instance.
     * @param {number} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.System.Attributes.prototype.scalability = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'scalability', value);
        }

        return Project._core.getAttribute(this._node, 'scalability');
    };

    /**
     * Gets or sets the attribute name of the System instance.
     * @param {boolean} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.System.Attributes.prototype.isSafe = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'isSafe', value);
        }

        return Project._core.getAttribute(this._node, 'isSafe');
    };

    /**
     * Gets or sets the attribute name of the System instance.
     * @param {boolean} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.System.Attributes.prototype.isTop = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'isTop', value);
        }

        return Project._core.getAttribute(this._node, 'isTop');
    };



// TODO: Children.prototype.METATYPE for each valid child type


    return Project.System;
});