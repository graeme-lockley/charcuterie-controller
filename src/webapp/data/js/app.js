define([
    'jquery',
    'jquerymobile',
    'underscore',
    'backbone',
    'router'
], function ($, JQueryMobile, _, Backbone, Router) {
    var initialize = function () {
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
