define(["../knockout-2.1.0"], function(ko) {
  return function textQuestionViewModel() {
    this.questionType = "text";
    this.title = ko.observable('New question');
  };
});