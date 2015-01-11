/**
 * @license Angulartics v0.17.0
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */
(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.segment.io
 * Enables analytics support for Segment.io (http://segment.io)
 */
angular.module('angulartics.segment.io', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {
  $analyticsProvider.registerPageTrack(function (path, $location) {
    try {
        analytics.page({
          path: path,
          url: $location.absUrl()
        });
    } catch (e) {
        if (!(e instanceof ReferenceError)) {
            throw e;
        }
    }
  });

  $analyticsProvider.registerEventTrack(function (action, properties) {
    try {
      analytics.track(action, properties);
    } catch (e) {
        if (!(e instanceof ReferenceError)) {
            throw e;
        }
    }
  });
  
  // Segment Identify Method
  // https://segment.com/docs/api/tracking/identify/
  $analyticsProvider.registerSetUserProperties(function (userId, traits) {
    try {
      analytics.identify(userId, traits);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });

  // Segment Identify Method
  // https://segment.com/docs/api/tracking/identify/
  $analyticsProvider.registerSetUserPropertiesOnce(function (userId, traits) {
    try {
      analytics.identify(userId, traits);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  });
  
}]);
})(angular);
