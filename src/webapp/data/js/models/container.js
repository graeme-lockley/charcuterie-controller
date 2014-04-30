define([
    'underscore',
    'backbone',
    'collections/elements'
], function (_, Backbone, ElementCollection) {
    return Backbone.Model.extend({
        defaults: {
            name: "Default Name"
        },

        elements: function () {
            var elements = new ElementCollection();
            elements.url = "/api/elements/" + this.id + "/elements";
            elements.fetch({async: false});
            return elements;
        }
    });
});