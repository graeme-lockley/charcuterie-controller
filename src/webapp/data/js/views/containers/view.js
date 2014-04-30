define([
    'jquery',
    'underscore',
    'backbone',
    'views/containers/list',
    'text!/templates/container/view.html',
    'views/containers/view_Chamber',
    'views/containers/view_TemperatureProbe',
    'views/containers/view_HumidityProbe'
], function ($, _, Backbone, ContainerListView, ContainersViewTemplate) {
    return Backbone.View.extend({
        el: "#content",
        newElementView: function (element) {
            var elementType = element.get("class").substr(9);
            var elementView = require("views/containers/view_" + elementType);

            return new elementView({model: element});
        },
        render: function () {
            var view = this;

            view.$el.html(_.template(ContainersViewTemplate, { model: view.model }));

            view.model.elements().each(function (element) {
                var elementView = view.newElementView(element);
                view.$el.find("ul").append(elementView.render().el);
            });

            view.$el.find('ul').listview().listview('refresh');
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
