define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var ContainerModel = Backbone.Model.extend({
        defaults: {
            name: "Default Name"
        }
    });

    return ContainerModel;
});