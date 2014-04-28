define([
    'jquery',
    'underscore',
    'backbone',
    'views/containers/view'
], function ($, _, Backbone, ContainerView) {
    return Backbone.View.extend({
        tagName: 'li',
        className: 'item-row',
        template: _.template('<a id="#link"><%= item.get("name") %></a>'),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            return this;
        },
        events: {
            "click": "click"
        },
        click: function () {
            var viewContainer = new ContainerView({model: this.model});
            viewContainer.render();
        }
    });
});