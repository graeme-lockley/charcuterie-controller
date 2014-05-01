define([
    'jquery',
    'underscore',
    'backbone',
    'views/elements/edit_TemperatureProbe'
], function ($, _, Backbone, EditTemperatureProbeView) {
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template('<a id="#link"><%= item.get("name") %><span class="ui-li-count" style="color: <%= item.get("ragStatus")%>">20&deg;C</span></a>'),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            return this;
        },
        events: {
            "click": "click"
        },
        click: function () {
            var edit = new EditTemperatureProbeView({model: this.model});
            edit.render();
        }
    });
});