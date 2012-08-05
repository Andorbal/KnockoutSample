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
    self.removeQuestion = function(item) {
      self.questions.remove(item);
    };
    self.getJSON = ko.computed(function() {
      return ko.toJSON({"questions": self.questions});
    });
    self.swapQuestions = function(elems) {
      var dataItems = ko.utils.arrayMap(elems, function(item) {
        return ko.dataFor(item);
      });

      self.questions(dataItems);

/*
      var tempArray = self.questions();

      var temp = tempArray[0];
      tempArray[0] = tempArray[1];
      tempArray[1] = temp;

      self.questions(tempArray);
*/
    };
  };
});