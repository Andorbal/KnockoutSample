define(["../knockout-2.1.0", "textQuestionViewModel", "multipleChoiceQuestionViewModel"], 
    function(ko, textQuestionViewModel, multipleChoiceQuestionViewModel) {
  return function surveyViewModel() {
    var self = this;
    self.questions = ko.observableArray();
    self.addTextQuestion = function() {
      self.questions.push(new textQuestionViewModel());
    };
    self.addMultipleChoiceQuestion = function() {
      self.questions.push(new multipleChoiceQuestionViewModel());
    };
    self.getJSON = ko.computed(function() {
      return ko.toJSON({"questions": self.questions});
    });
  };
});