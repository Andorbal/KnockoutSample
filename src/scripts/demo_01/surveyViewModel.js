function surveyViewModel() {
  var self = this;
  self.questions = ko.observableArray();
  self.addTextQuestion = function() {
    self.questions.push(new textQuestionViewModel());
  };
  self.addMultipleChoiceQuestion = function() {
    self.questions.push(new multipleChoiceQuestionViewModel());
  };
  self.removeQuestion = function(item) {
    self.questions.remove(item);
  };
  self.getJSON = ko.computed(function() {
    return ko.toJSON({"questions": self.questions});
  });
};