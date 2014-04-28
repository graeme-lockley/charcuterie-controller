define([
    'underscore',
    'backbone',
    'models/element'
], function (_, Backbone, ElementModel) {
    return Backbone.Collection.extend({
        model: ElementModel
    });
});
