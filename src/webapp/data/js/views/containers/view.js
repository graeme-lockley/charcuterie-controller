define([
    'jquery',
    'underscore',
    'backbone',
    'views/containers/list',
    'text!/templates/container/view.html'
], function ($, _, Backbone, ContainerListView, ContainersViewTemplate) {
    return Backbone.View.extend({
        el: "#content",
        render: function () {
            this.$el.html(_.template(ContainersViewTemplate, { model: this.model }));
        },
        events: {
            "click #back": "clickBack"
        },
        clickBack: function () {
            if (!ContainerListView) {
                ContainerListView = require("views/containers/list");
            }

            new ContainerListView().render();
        }
    });
});
