/**
 * Some description..
 */

// TODO: If there is a base we need to include it here..!
define(['./_project' , 'FCO.Dsml' ], function (Project , 'FCO.Dsml' ) {
    'use strict';

//TODO: Replace all FCO with actual name. !

    /**
     * Initializes a new instance of UMLStateDiagram.
     *
     * @class
     * @classdesc This class represents a(n) UMLStateDiagram.
     * @property {Project.UMLStateDiagram.Attributes} attributes The attributes of the UMLStateDiagram.
     * @param {object} node - The wrapped CoreNode object.
     * @constructor
     */
    Project.UMLStateDiagram = function (node) {
        FCO.call(this,node);
        this._node = node;
        this.attributes = new Project.UMLStateDiagram.Attributes(this._node);
    };

    /**
     * Initializes a new instance of UMLStateDiagram.Attributes
     *
     * @class
     * @classdesc This class wraps the attributes of UMLStateDiagram.
     * @param {object} node - The wrapped CoreNode object of UMLStateDiagram.
     * @constructor
     */
    Project.UMLStateDiagram.Attributes = function (node) {
        FCO.Attributes.call(this,node);
        this._node = node;
    };




    /**
     * WebGME node object that represents UMLStateDiagram type.
     * @type {Object}
     * @static
     */
    Project.UMLStateDiagram.Type = null; // Populated at Project.initialize

    /**
     * WebGME node object's meta type ID of UMLStateDiagram.
     * @type {string}
     * @static
     */
    Project.UMLStateDiagram.ID = "/1077978197";

    /**
     * WebGME node object's meta type GUID of UMLStateDiagram.
     * @type {string}
     * @static
     */
    Project.UMLStateDiagram.GUID = "ac888c15-1e7d-6e40-e7e3-d3defd2fde7b";

    /**
     * Creates a new UMLStateDiagram inside given parent.
     * @returns {Project.UMLStateDiagram} The newly created UMLStateDiagram.
     * @param {Project.UMLStateDiagram} parent Instance where the new UMLStateDiagram should be created.
     * @public
     */
    Project.UMLStateDiagram.createObj = function (parent) {
        var node = Project._core.createNode({parent: parent._node, base: Project.UMLStateDiagram.Type});
        return new Project.UMLStateDiagram(node);
    };

    /**
     * Gets the ID of the UMLStateDiagram instance.
     * @returns {string} The ID.
     * @public
     */
    Project.UMLStateDiagram.prototype.getID = function () {
        return Project._core.getPath(this._node);
    };

    /**
     * Gets the GUID of the UMLStateDiagram instance.
     * @returns {string} The GUID.
     * @public
     */
    Project.UMLStateDiagram.prototype.getGUID = function () {
        return Project._core.getGuid(this._node);
    };


    // TODO: use correct name and get type from attributes[attrName]  !
    /**
     * Gets or sets the attribute name of the UMLStateDiagram instance.
     * @param {string} [value] - If defined sets the attribute value to this
     * @returns {string} Currently set name.
     * @public
     */
    Project.UMLStateDiagram.Attributes.prototype.name = function (value) {
        if (typeof value !== typeof name) {
            Project._core.setAttribute(this._node, name, value);
        }

        return Project._core.getAttribute(this._node, name);
    };

    return Project.UMLStateDiagram;
});