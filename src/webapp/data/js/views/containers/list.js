define([
    'jquery',
    'underscore',
    'backbone',
    'collections/containers',
    'views/containers/list_item',
    'text!/templates/container/list.html'
], function ($, _, Backbone, ContainersCollection, ContainersListItemView, ContainersListTemplate) {
    return Backbone.View.extend({
        el: "#content",
        initialize: function () {
            this.container = new ContainersCollection();
            this.container.fetch({async: false});
        },
        render: function () {
            var listView = this;

            listView.$el.html(_.template(ContainersListTemplate, { containers: listView.container }));

            listView.container.each(function (item) {
                var containerListItemView = new ContainersListItemView({model: item});
                listView.$el.find("ul").append(containerListItemView.render().el);
            });
        }
    });
});
