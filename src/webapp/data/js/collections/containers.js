define([
    'underscore',
    'backbone',
    'models/container'
], function (_, Backbone, ContainerModel) {
    var ContainerCollection = Backbone.Collection.extend({
        model: ContainerModel
    });

    return ContainerCollection;
});
