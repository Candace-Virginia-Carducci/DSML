/**
 * Some description..
 */

// TODO: If there is a base we need to include it here.. !
define(['./_project' ], function (Project) {
    'use strict';

//TODO: Replace all FCO with actual name. !
//TODO: Add Children

    /**
     * Initializes a new instance of FCO.
     *
     * @class
     * @classdesc This class represents a(n) FCO.
     * @property {Project.FCO.Attributes} attributes The attributes of the FCO.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.FCO = function (node, skipTypeCheck) {
        
        // TODO: Add check that core.getBaseType(node) is the correct one. !

        if(!skipTypeCheck && Project._core.getBaseType(node) !== Project.FCO.Type){
           throw new TypeError("Wrong Type");
        }
        this._node = node;
        this.attributes = new Project.FCO.Attributes(this._node);
        this.children = new Project.FCO.Children(this._node);
    };

    /**
     * Initializes a new instance of FCO.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of FCO.
     * @param {object} node - The wrapped CoreNode object of FCO.
     * @constructor
     */
    Project.FCO.Attributes = function (node) {
        
        this._node = node;
    };

    /**
    * Initializes a new instance of FCO.Attributes
    *
    * @class
    * @classdesc This class wraps the attributes of FCO.
    * @param {object} node - The wrapped CoreNode object of FCO.
    * @constructor
    */
    Project.FCO.Children = function (node) {
        
        this._node = node;
    };



    /**
     * WebGME node object that represents FCO type.
     * @type {Object}
     * @static
     */
    Project.FCO.Type =  null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of FCO.
     * @type {string}
     * @static
     */
    Project.FCO.ID = "/1";

    /**
     * WebGME node object's meta type GUID of FCO.
     * @type {string}
     * @static
     */
    Project.FCO.GUID = "cd891e7b-e2ea-e929-f6cd-9faf4f1fc045";

    /**
     * Creates a new FCO inside given parent.
     * @returns {Project.FCO} The newly created FCO.
     * @param {Project.FCO} parent Instance where the new FCO should be created.
     * @public
     */
    Project.FCO.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent.node, base: Project.FCO.Type});
        return new Project.FCO(node);
    };

    /**
     * Gets the ID of the FCO instance.
     * @returns {string} The ID.
     * @public
     */
    Project.FCO.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the FCO instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.FCO.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };

// TODO: For each derived type add
   /**
    * Downcast emulation
    * @returns {Project.METATYPE} The node as an Project.METATYPE.
    * @public
    */
    Project.FCO.prototype.asMETATYPE = function () {

        return this;
    };


    /**
     * Gets or sets the attribute name of the FCO instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.FCO.Attributes.prototype.name = function (value) {
        if (typeof value !== 'undefined') {
            Project._core.setAttribute(this._node, 'name', value);
        }

        return Project._core.getAttribute(this._node, 'name');
    };



// TODO: Children.prototype.METATYPE for each valid child type !


    /**
    * Gets the children of the FCO instance.
    * @returns {''} Currently get children.
    * @public
    */
    Project.FCO.prototype.getFCOChildren = function () {
        
       
        return [''];
    };


    return Project.FCO;


});