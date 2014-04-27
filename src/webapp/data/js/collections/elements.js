define([
    'underscore',
    'backbone',
    'models/container'
], function (_, Backbone, ContainerModel) {
    return Backbone.Collection.extend({
        model: ContainerModel
    });
});
