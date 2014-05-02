define([
    'jquery',
    'underscore',
    'backbone',
    'models/element',
    'views/containers/view',
    'views/elements/edit_TemperatureProbeFooter',
    'views/DefaultFooter',
    'text!/templates/element/edit_TemperatureProbe.html'
], function ($, _, Backbone, ElementModel, ContainerView, EditTemperatureProbeFooter, DefaultFooter, EditTemperatureProbeTemplate) {
    return Backbone.View.extend({
        el: "#content",
        nameField: "#edit_TemperatureProbeForm_name",
        noticesField: "#edit_TemperatureProbeForm_notices",
        noticesMinRangeField: "#edit_TemperatureProbeForm_noticesrange_min",
        noticesMaxRangeField: "#edit_TemperatureProbeForm_noticesrange_max",

        render: function () {
            this.$el.html(_.template(EditTemperatureProbeTemplate, { model: this.model }));
            $("#edit_TemperatureProbeForm").trigger('create');
            this.updateTemperatureProbeStatus();

            var footer = new EditTemperatureProbeFooter({model: this});
            footer.render();
        },
        events: {
            "change #edit_TemperatureProbeForm_notices": "updateTemperatureProbeStatus"
        },
        updateTemperatureProbeStatus: function () {
            if ($(this.noticesField).find("option:selected").val() == "on") {
                $(this.noticesMinRangeField).slider('enable');
                $(this.noticesMaxRangeField).slider('enable');
            } else {
                $(this.noticesMinRangeField).slider('disable');
                $(this.noticesMaxRangeField).slider('disable');
            }
        },
        updateButton: function () {
            this.model.set("name", $(this.nameField).val());
            this.model.set("notices", $(this.noticesField).find("option:selected").val() == "on");
            this.model.get("notices_range").min = $(this.noticesMinRangeField).val();
            this.model.get("notices_range").max = $(this.noticesMaxRangeField).val();

            this.model.save({async: false});

            this.navigateToParentContainerView();
            return true;
        },
        cancelButton: function () {
            this.navigateToParentContainerView();
            return true;
        },
        navigateToParentContainerView: function () {
            this.newContainerView({model: this.model.parent()}).render();

            new DefaultFooter().render();
        },
        newContainerView: function (args) {
            if (!ContainerView) {
                ContainerView = require('views/containers/view');
            }
            return new ContainerView(args);
        }
    });
});