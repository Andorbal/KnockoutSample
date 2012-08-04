define(["../knockout-2.1.0"], function(ko) {
  return function surveyViewModel() {
    this.questions = ko.observableArray(['foo', 'bar']);
  };
});