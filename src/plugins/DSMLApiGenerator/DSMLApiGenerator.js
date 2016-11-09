/*globals define*/
/*jshint node:true, browser:true*/

/**
 * Generated by PluginGenerator 1.7.0 from webgme on Tue Nov 08 2016 11:35:44 GMT-0600 (Central Standard Time).
 * A plugin that inherits from the PluginBase. To see source code documentation about available
 * properties and methods visit %host%/docs/source/PluginBase.html.
 */

define([
    'plugin/PluginConfig',
    'text!./metadata.json',
    'plugin/PluginBase'
], function (PluginConfig,
             pluginMetadata,
             PluginBase) {
    'use strict';

    pluginMetadata = JSON.parse(pluginMetadata);

    /**
     * Initializes a new instance of DSMLApiGenerator.
     * @class
     * @augments {PluginBase}
     * @classdesc This class represents the plugin DSMLApiGenerator.
     * @constructor
     */
    var DSMLApiGenerator = function () {
        // Call base class' constructor.
        PluginBase.call(this);
        this.pluginMetadata = pluginMetadata;
    };

    /**
     * Metadata associated with the plugin. Contains id, name, version, description, icon, configStructue etc.
     * This is also available at the instance at this.pluginMetadata.
     * @type {object}
     */
    DSMLApiGenerator.metadata = pluginMetadata;

    // Prototypical inheritance from PluginBase.
    DSMLApiGenerator.prototype = Object.create(PluginBase.prototype);
    DSMLApiGenerator.prototype.constructor = DSMLApiGenerator;

    /**
     * Main function for the plugin to execute. This will perform the execution.
     * Notes:
     * - Always log with the provided logger.[error,warning,info,debug].
     * - Do NOT put any user interaction logic UI, etc. inside this method.
     * - callback always has to be called even if error happened.
     *
     * @param {function(string, plugin.PluginResult)} callback - the result callback
     */
    DSMLApiGenerator.prototype.main = function (callback) {
        // Use self to access core, project, result, logger etc from PluginBase.
        // These are all instantiated at this point.
        var self = this,
            nodeObject;


        nodeObject = self.activeNode;

        var metaNodeInfoJson,
            // metaMap = new Object();
            metaMap = {};

        //attributes
        var name,
            path,
            relid,
            guid,
            children,
            attr,
            pointers;

        for (var metaNode in self.META) {
            //prints metaNodes to info logger
            //self.logger.info(metaNode);
            path = self.core.getPath(self.META[metaNode]);
            relid = self.core.getRelid(self.META[metaNode]);
            guid = self.core.getGuid(self.META[metaNode]);
            metaNodeInfoJson = self.getMetaInfo(self.META[metaNode]);

            /**
             * in obj there are:
             * children
             * minItems
             * maxItems
             * attributes
             * pointers
             * aspects
             * constraints
             **/

            attr = metaNodeInfoJson["attributes"];
            children = metaNodeInfoJson["children"].items;
            pointers = metaNodeInfoJson["pointers"];

            //self.logger.info(JSON.stringify(metaNodeInfoJson))

            metaMap[metaNode] = {
                attr: attr,
                path: path,
                relid: relid,
                guid: guid,
                children: children,
                pointers: pointers
            };
        }

        //print map
        self.printMap(metaMap);

        // This will save the changes. If you don't want to save;
        // exclude self.save and call callback directly from this scope.
        self.save('DSMLApiGenerator updated model.')
            .then(function () {
                self.result.setSuccess(true);
                callback(null, self.result);
            })
            .catch(function (err) {
                self.logger.error(err.stack);
                // Result success is false at invocation.
                callback(err, self.result);

            });

    };

    DSMLApiGenerator.prototype.getMetaInfo = function (meta) {
        var self = this,
            metaObj;

        metaObj = self.core.getJsonMeta(meta);

        return metaObj;
    }


    /**
     * prints map of metaNodes
     **/
    DSMLApiGenerator.prototype.printMap = function (metaMap) {
        var self = this,
            mapStr = JSON.stringify(metaMap, null, 2);

        self.logger.info(mapStr);
    };


    return DSMLApiGenerator;
});
