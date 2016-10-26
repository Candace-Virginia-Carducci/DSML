/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 1.7.0 from webgme on Wed Oct 19 2016 13:09:50 GMT-0500 (Central Daylight Time).
 * A plugin that inherits from the PluginBase. To see source code documentation about available
 * properties and methods visit %host%/docs/source/PluginBase.html.
 */

define([
    'plugin/PluginConfig',
    'text!./metadata.json',
    'plugin/PluginBase',
    './DSML/DSML'
], function (PluginConfig,
             pluginMetadata,
             PluginBase,
             FSM) {
    'use strict';

    pluginMetadata = JSON.parse(pluginMetadata);

    /**
     * Initializes a new instance of FSMExample.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin FSMExample.
     * @constructor
     */
    var FSMExample = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.pluginMetadata = pluginMetadata;
    };

    /**
     * Metadata associated with the plugin. Contains id, name, version, description, icon, configStructue etc.
     * This is also available at the instance at this.pluginMetadata.
     * @type {object}
     */
    FSMExample.metadata = pluginMetadata;

    // Prototypical inheritance from PluginBase.
    FSMExample.prototype = Object.create(PluginBase.prototype);
    FSMExample.prototype.constructor = FSMExample;

    /**
     * Main function for the plugin to execute. This will perform the execution.
     * Notes:
     * - Always log with the provided logger.[error,warning,info,debug].
     * - Do NOT put any user interaction logic UI, etc. inside this method.
     * - callback always has to be called even if error happened.
     *
     * @param {function(string, plugin.PluginResult)} callback - the result callback
     */
    FSMExample.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            nodeObject;

        nodeObject = self.activeNode;
         self.loadNodes(self.rootNode) // TODO: Implement loadNodes.
             .then(function (nodes) {

        FSM.initialize(self.core, nodes, self.META);

        // TODO: Implement check that nodeObject is UMLStateMachine
        //THIS: this is being weird
        var path = self.core.getPath(nodeObject);
        console.log('PATH:', path);     //saying ''
        var metaType = self.getMetaType(nodeObject);
        console.log('MetaType:',metaType); //saying null
        // if (self.core.getPath(nodeObject) === '' ||
        //     self.core.getAttribute(self.getMetaType(nodeObject), 'name') !== 'UMLStateMachine'){
        //     //throw an error
        // } // else{
                 //now everything goes in here
        //       }


        var stateMachine = new FSM.UMLStateDiagram(nodeObject);

        console.log(stateMachine.attributes.name());
        console.log(stateMachine.getID());

        var stateBase = stateMachine.createStateBase();
        console.log(stateBase.attributes);

        console.log(stateBase.attributes.name());
        console.log(stateBase.attributes.delay());

        var state = stateMachine.createState();

        console.log(state.attributes.name());
        console.log(state.attributes.delay());

        var initState = stateMachine.createInitial();

        initState.attributes.startValue();

        self.result.setSuccess(true);
         callback(null, self.result);
        })
        .catch(function (err) {
            // Result success is false at invocation.
            callback(err, self.result);
        });
    };

    //load Nodes
    FSMExample.prototype.loadNodes = function (node){
        var self = this;
        return self.core.loadSubTree(node)
            .then( function (nodeArr)  {
                var nodes = {},
                    i;
                for(i=0; i<nodeArr.length; i +=1){
                    nodes[self.core.getPath(nodeArr[i])] = nodeArr[i];
                }
                return nodes;
            });
    };

    return FSMExample;
});