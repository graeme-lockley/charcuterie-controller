define([
    'jquery',
    'underscore',
    'backbone',
    'collections/containers',
    'text!/templates/container/list.html'
], function ($, _, Backbone, ContainersCollection, ContainersListTemplate) {
    return Backbone.View.extend({
        el: $("#content"),
        initialize: function () {
            var thisThis = this;
            var xxx = new ContainersCollection();

            xxx.fetch({
                success: function () {
                    var compiledTemplate = _.template(ContainersListTemplate, { containers: xxx });
                    thisThis.$el.html(compiledTemplate);
                }
            });
        }
    });
});