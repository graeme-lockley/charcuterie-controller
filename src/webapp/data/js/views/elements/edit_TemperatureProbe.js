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
        render: function () {
            this.$el.html(_.template(EditTemperatureProbeTemplate, { model: this.model }));

            $("#edit_TemperatureProbeForm").trigger('create');

            var footer = new EditTemperatureProbeFooter({model: this});
            footer.render();
        },
        events: {
            "change #edit_TemperatureProbeForm_notices": "log"
        },
        log: function () {
            console.log("something: " + $("#edit_TemperatureProbeForm_notices").find("option:selected").val());
        },
        updateButton: function () {
            this.model.set("name", this.$("#edit_TemperatureProbeForm_name").val());
            this.model.set("notices", $("#edit_TemperatureProbeForm_notices").find("option:selected").val() == "on");
            this.model.get("notices_range").min = $("#edit_TemperatureProbeForm_noticesrange_min").val();
            this.model.get("notices_range").max = $("#edit_TemperatureProbeForm_noticesrange_max").val();

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