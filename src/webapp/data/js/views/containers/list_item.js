define([
    'jquery',
    'underscore',
    'backbone',
    'collections/containers',
    'text!/templates/container/list.html'
], function ($, _, Backbone, ContainersCollection, ContainersListTemplate) {
    return Backbone.View.extend({
        tagName: 'li',
        className: 'item-row',
        template: _.template('<%= item.get("name") %>'),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            return this;
        }
    });
});