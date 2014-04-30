define([
    'underscore',
    'backbone',
    'collections/elements'
], function (_, Backbone, ElementCollection) {
    return Backbone.Model.extend({
        defaults: {
            name: "Default Name"
        },
        newElementCollection: function () {
            if (!ElementCollection) {
                ElementCollection = require("collections/elements");
            }
            return new ElementCollection();
        },
        elements: function () {
            var elements = this.newElementCollection();
            elements.url = "/api/containers/" + this.id + "/elements";
            elements.fetch({async: false});
            return elements;
        }
    });
});
