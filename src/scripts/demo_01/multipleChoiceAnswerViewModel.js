define(["../knockout-2.1.0"], function(ko) {
  return function multipleChoiceAnswerViewModel() {
    var self = this;

    self.title = ko.observable('New answer');
  };
});