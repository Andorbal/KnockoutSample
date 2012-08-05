function multipleChoiceQuestionViewModel() {
  var self = this;

  self.questionType = "multipleChoice";
  self.title = ko.observable('New question');
  self.answers = ko.observableArray();
  self.allowMultipleAnswers = ko.observable(false);

  self.addAnswer = function() {
    self.answers.push(new multipleChoiceAnswerViewModel());
  };
  self.removeAnswer = function(item) {
    self.answers.remove(item);
  };
};