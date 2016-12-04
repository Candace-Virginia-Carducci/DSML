define([], function () {
    // TODO: Consider adding more methods here.
    // For instance a wrapped rootNode could be help-full.

    var Project = function () {
    };

    Project.initialize = function (core, nodes, META, rootNode) {
        var name;

        for (name in META) {
            if (Project.hasOwnProperty(name)) {
                Project[name].Type = META[name];
            } else {
                Project[name] = {};
                Project[name].Type = META[name];
            }
        }

        Project._core = core;
        Project._nodes = nodes;

        // TODO: Create Project.ROOT and return with it
        return new Project.ROOT(rootNode, META);
    };

    //TODO: fill in similar to MetaType

    /**
    * Initializes a new instance of Project.ROOT.Children
    *
    * @class
    * @classdesc This class wraps the attributes of ROOT
    * @param {object} node - The wrapped CoreNode object of Project.ROOT.
    * @constructor
    */
    Project.ROOT = function (node, META) {
        var name;
        this.children = new Project.ROOT.Children(node, META);
    };

    /**
    * Initializes a new instance of Project.ROOT.Children
    *
    * @class
    * @classdesc This class wraps the children of Project.ROOT
    * @param {object} node - The wrapped CoreNode object of Project.ROOT
    * @constructor
    */
    Project.ROOT.Children = function (node, META) {
        this._node = node;
    };


    // get id


    // get guid

    // For each meta-type add
    //JS DOC
    Project.ROOT.Children.prototype.FCO = function () {
    // TODO: get all children (core) nodes and match with Project.MetaType
    // Filter out based on dsmlNode instanceof Project.FCO.

    }


    Project.ROOT.Children.prototype.FCO = function () {
    // 1. getChildrenPaths !
       var childrenPaths = Project._core.getChildrenPaths(FCO);

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
        if(childNodes[d] instanceof FCO){
            dsmlNodes.push(new Project[childNodes[d]](this_.node));
        }
    }
    // 4. return all DSML-nodes that are "instanceof" metaName
    return dsmlNodes;
    }

    Project.ROOT.Children.prototype.ComponentRef = function () {
    // 1. getChildrenPaths !
       var childrenPaths = Project._core.getChildrenPaths(ComponentRef);

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
    // 4. return all DSML-nodes that are "instanceof" metaName
    return dsmlNodes;
    }

    Project.ROOT.Children.prototype.Component = function () {
    // 1. getChildrenPaths !
       var childrenPaths = Project._core.getChildrenPaths(Component);

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
    // 4. return all DSML-nodes that are "instanceof" metaName
    return dsmlNodes;
    }

    Project.ROOT.Children.prototype.System = function () {
    // 1. getChildrenPaths !
       var childrenPaths = Project._core.getChildrenPaths(System);

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
    // 4. return all DSML-nodes that are "instanceof" metaName
    return dsmlNodes;
    }

    Project.ROOT.Children.prototype.Connection = function () {
    // 1. getChildrenPaths !
       var childrenPaths = Project._core.getChildrenPaths(Connection);

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
    // 4. return all DSML-nodes that are "instanceof" metaName
    return dsmlNodes;
    }

    return Project;
});