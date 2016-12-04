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
        this.children = new Project.System.Children(this._node);
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

    /**
    * Initializes a new instance of System.Attributes
    *
    * @class
    * @classdesc This class wraps the attributes of System.
    * @param {object} node - The wrapped CoreNode object of System.
    * @constructor
    */
    Project.System.Children = function (node) {
        FCO.Children.call(this,node);
        this._node = node;
    };


    Project.System.prototype = Object.create(FCO.prototype);
    Project.System.prototype.constructor = Project.System;

    Project.System.Attributes.prototype = Object.create(FCO.Attributes.prototype);
    Project.System.Attributes.prototype.constructor = Project.System.Attributes;

    Project.System.Children.prototype = Object.create(FCO.Children.prototype);
    Project.System.Children.prototype.constructor = Project.System.Children;


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



// TODO: Children.prototype.METATYPE for each valid child type !

    
    /**
    * Get all children of Component type (including derived types).
    * @returns {Project.Component} Currently set name.
    * @public
    */
    Project.System.Children.prototype.Component = function () {
        // 1. getChildrenPaths
        var childrenPaths = Project._core.getChildrenPaths(this._node);
        // 2. get the actual nodes using Project._nodes
        var childNodes = [];
        for(var x=0; x < childrenPaths.length; x+=1){
            for (var y=0; y < Project._nodes.length; y+=1){
                if(childrensPaths[x] === Project._core.getPath(Project._nodes[y])){
                    childNodes.push(Project._nodes[y]);
                }
            }
        }
        // 3. create DSML-node based on meta-type.
        var dsmlNodes = [];
        for(var d=0; d < childNodes.length; d+=1){
            if(childNodes[d] instanceof Component){
                dsmlNodes.push(new Project[childNodes[d]](this_.node));
            }
        }

        // 4. return all DSML-nodes that are "instanceof" bambinoName

        return dsmlNodes;
    };

    
    /**
    * Get all children of System type (including derived types).
    * @returns {Project.System} Currently set name.
    * @public
    */
    Project.System.Children.prototype.System = function () {
        // 1. getChildrenPaths
        var childrenPaths = Project._core.getChildrenPaths(this._node);
        // 2. get the actual nodes using Project._nodes
        var childNodes = [];
        for(var x=0; x < childrenPaths.length; x+=1){
            for (var y=0; y < Project._nodes.length; y+=1){
                if(childrensPaths[x] === Project._core.getPath(Project._nodes[y])){
                    childNodes.push(Project._nodes[y]);
                }
            }
        }
        // 3. create DSML-node based on meta-type.
        var dsmlNodes = [];
        for(var d=0; d < childNodes.length; d+=1){
            if(childNodes[d] instanceof System){
                dsmlNodes.push(new Project[childNodes[d]](this_.node));
            }
        }

        // 4. return all DSML-nodes that are "instanceof" bambinoName

        return dsmlNodes;
    };

    
    /**
    * Get all children of Connection type (including derived types).
    * @returns {Project.Connection} Currently set name.
    * @public
    */
    Project.System.Children.prototype.Connection = function () {
        // 1. getChildrenPaths
        var childrenPaths = Project._core.getChildrenPaths(this._node);
        // 2. get the actual nodes using Project._nodes
        var childNodes = [];
        for(var x=0; x < childrenPaths.length; x+=1){
            for (var y=0; y < Project._nodes.length; y+=1){
                if(childrensPaths[x] === Project._core.getPath(Project._nodes[y])){
                    childNodes.push(Project._nodes[y]);
                }
            }
        }
        // 3. create DSML-node based on meta-type.
        var dsmlNodes = [];
        for(var d=0; d < childNodes.length; d+=1){
            if(childNodes[d] instanceof Connection){
                dsmlNodes.push(new Project[childNodes[d]](this_.node));
            }
        }

        // 4. return all DSML-nodes that are "instanceof" bambinoName

        return dsmlNodes;
    };

    
    /**
    * Get all children of ComponentRef type (including derived types).
    * @returns {Project.ComponentRef} Currently set name.
    * @public
    */
    Project.System.Children.prototype.ComponentRef = function () {
        // 1. getChildrenPaths
        var childrenPaths = Project._core.getChildrenPaths(this._node);
        // 2. get the actual nodes using Project._nodes
        var childNodes = [];
        for(var x=0; x < childrenPaths.length; x+=1){
            for (var y=0; y < Project._nodes.length; y+=1){
                if(childrensPaths[x] === Project._core.getPath(Project._nodes[y])){
                    childNodes.push(Project._nodes[y]);
                }
            }
        }
        // 3. create DSML-node based on meta-type.
        var dsmlNodes = [];
        for(var d=0; d < childNodes.length; d+=1){
            if(childNodes[d] instanceof ComponentRef){
                dsmlNodes.push(new Project[childNodes[d]](this_.node));
            }
        }

        // 4. return all DSML-nodes that are "instanceof" bambinoName

        return dsmlNodes;
    };


    /**
    * Gets the children of the System instance.
    * @returns {'/W,/j,/C,/X'} Currently get children.
    * @public
    */
    Project.System.prototype.getBambino = function () {
        
       
        
        
        
        
        return ['Component,System,Connection,ComponentRef'];
    };

    return Project.System;
});