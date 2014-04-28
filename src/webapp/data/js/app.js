define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'jquerymobile'
], function ($, _, Backbone, Router, JQM) {
    var initialize = function () {
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
