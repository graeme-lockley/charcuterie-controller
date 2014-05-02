define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    return Backbone.View.extend({
        el: "#footer",
        template: _.template(''),
        render: function () {
            $(this.el).html(this.template({ item: this.model}));
            this.$el.trigger('create');

            return this;
        }
    });
});