define([
    'jquery',
    'underscore',
    'backbone',
    'text!/templates/container/view.html'
], function ($, _, Backbone, ContainersViewTemplate) {
    return Backbone.View.extend({
        el: "#content",
        render: function () {
            this.$el.html(_.template(ContainersViewTemplate, { model: this.model }));
        }
    });
});
