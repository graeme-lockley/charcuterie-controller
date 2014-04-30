define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template('<a id="#link"><%= item.get("name") %><span class="ui-li-count" style="color: <%= item.get("ragStatus")%>">Humidity Control</span></a>'),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            return this;
        },
        events: {
            "click": "click"
        },
        click: function () {
            alert("click: " + this.model.get("name"));
        }
    });
});