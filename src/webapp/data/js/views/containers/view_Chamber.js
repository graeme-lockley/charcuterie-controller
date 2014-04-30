define([
    'jquery',
    'underscore',
    'backbone',
    'views/containers/view'
], function ($, _, Backbone, ContainerView) {
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template('<a id="#link"><%= item.get("name") %><span class="ui-li-count" style="color: <%= item.get("ragStatus")%>">Chamber</span></a>'),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            return this;
        },
        events: {
            "click": "click"
        },
        newContainerView: function () {
            if (!ContainerView) {
                ContainerView = require('views/containers/view');
            }
            return new ContainerView({model: this.model});
        },
        click: function () {
            var viewContainer = this.newContainerView();
            viewContainer.render();
        }
    });
});