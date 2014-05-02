define([
    'underscore',
    'backbone',
    'collections/elements',
    'models/element'
], function (_, Backbone, ElementCollection, ElementModel) {
    return Backbone.Model.extend({
        defaults: {
            name: "Default Name"
        },
        urlRoot: "/api/elements",
        newElementCollection: function () {
            if (!ElementCollection) {
                ElementCollection = require("collections/elements");
            }
            return new ElementCollection();
        },
        elements: function () {
            var elements = this.newElementCollection();
            elements.url = "/api/elements/" + this.id + "/elements";
            elements.fetch({async: false});
            return elements;
        },
        parent: function () {
            var thisElement = this;
            var parent;

            var parentResponse = $.ajax({
                url: "/api/elements/" + this.id + "/parent",
                type: 'GET',
                async: false
            }).done(function (data) {
                parent = thisElement.newElementMode({id: data.id});
                parent.url = "/api/elements/" + parent.id;
                parent.fetch({async: false});
            });

            return parent;
        },
        newElementMode: function (attrs) {
            if (!ElementModel) {
                ElementModel = require('models/element');
            }
            return new ElementModel(attrs);
        }
    });
});
