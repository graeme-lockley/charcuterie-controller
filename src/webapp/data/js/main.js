require.config({
    paths: {
        jquery: '/js/libs/jquery/jquery',
        underscore: '/js/libs/underscore/underscore',
        backbone: '/js/libs/backbone/backbone',
        text: '/js/libs/text/text'
    }
});

require([
    'app',
    'views/containers/list'
], function (App, ContainerListView) {
    App.initialize();

    var containerListView = new ContainerListView();
    containerListView.render();
});
