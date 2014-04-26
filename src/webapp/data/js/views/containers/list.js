define([
    'jquery',
    'underscore',
    'backbone',
    'collections/containers',
    'text!/templates/container/list.html'
], function ($, _, Backbone, ContainersCollection, ContainersListTemplate) {
    var ProjectListView = Backbone.View.extend({
        el: $("#content"),
        initialize: function () {
            this.collection = new ContainersCollection();

            var compiledTemplate = _.template(ContainersListTemplate, { collections: this.collection });
            this.$el.html(compiledTemplate);
        }
    });

    return ProjectListView;
});