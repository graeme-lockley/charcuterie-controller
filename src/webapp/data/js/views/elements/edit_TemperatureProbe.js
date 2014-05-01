define([
    'jquery',
    'underscore',
    'backbone',
    'models/element',
    'text!/templates/element/edit_TemperatureProbe.html'
], function ($, _, Backbone, ElementModel, EditTemperatureProbeTemplate) {
    return Backbone.View.extend({
        el: "#content",
        render: function () {
            this.$el.html(_.template(EditTemperatureProbeTemplate, { model: this.model }));
            $("#edit_TemperatureProbeForm").trigger('create');
        }
    });
});