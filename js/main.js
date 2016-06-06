var app = angular.module("demoapp", []);
app.controller("demoCtrl", function($scope) {});
app.directive('letterOnly', function() {
    return {
      restrict: 'A',
      require: "ngModel",
      link: function(scope, element, attrs, model) {
        var regex = new RegExp(/[^a-zA-Z]/);
        var replace_with = '';

        model.$parsers.push(function(val) {
          if (!val) {
            return;
          }
          var replaced = val.replace(regex, replace_with);

          if (replaced !== val) {
            model.$setViewValue(replaced);
            model.$render();
          }
          return replaced;
        });
      }
    };
  })
  .directive('uppercase', function() {
    return {
      restrict: 'A',
      require: "ngModel",
      link: function(scope, element, attrs, model) {
        model.$parsers.push(function(val) {
          if (!val) {
            return;
          }

          if (val.toUpperCase() !== val) {
            model.$setViewValue(val.toUpperCase());
            model.$render();
          }
          return val.toUpperCase();
        });
      }
    };
  })
  .directive('lowercase', function() {
    return {
      restrict: 'A',
      require: "ngModel",
      link: function(scope, element, attrs, model) {
        model.$parsers.push(function(val) {
          if (!val) {
            return;
          }

          if (val.toLowerCase() !== val) {
            model.$setViewValue(val.toLowerCase());
            model.$render();
          }
          return val.toLowerCase();
        });
      }
    };
  });
