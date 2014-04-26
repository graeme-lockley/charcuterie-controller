require.config({
    paths: {
        jquery: '/js/libs/jquery/jquery',
        underscore: '/js/libs/underscore/underscore',
        backbone: '/js/libs/backbone/backbone',
        text: '/js/libs/text/text'
    }
});

console.log("main: before the require");

require([
    'app',
    'views/containers/list'
], function (App, ContainerListView) {
    console.log("main: before app initialize");

    App.initialize();

    console.log("main: we have arrived");

    var containerListView = new ContainerListView();
    containerListView.render();
});
