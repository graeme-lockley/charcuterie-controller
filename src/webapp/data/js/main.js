require.config({
    paths: {
        jquery: '/js/libs/jquery/jquery',
        jquerymobile: '/js/libs/jquery-mobile/jquery.mobile-1.4.2',
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
