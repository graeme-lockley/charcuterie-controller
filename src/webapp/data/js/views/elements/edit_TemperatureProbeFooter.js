define([
    'jquery',
    'underscore',
    'backbone',
    'views/elements/edit_TemperatureProbe'
], function ($, _, Backbone, EditTemperatureProbeView) {
    return Backbone.View.extend({
        el: "#footer",
        template: _.template('<div data-role="footer" class="ui-bar"> <a id="edit_TemperatureProbeFooter_Update" data-role="button" >Update</a> <a id="edit_TemperatureProbeFooter_Cancel" data-role="button" >Cancel</a></div>'),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            this.$el.trigger('create');

            return this;
        },
        events: {
            "click #edit_TemperatureProbeFooter_Update": "update",
            "click #edit_TemperatureProbeFooter_Cancel": "cancel"
        },
        update: function () {
            if (this.model.updateButton()) {
                this.undelegateEvents();
            }
        },
        cancel: function () {
            if (this.model.cancelButton()) {
                this.undelegateEvents();
            }
        }
    });
});