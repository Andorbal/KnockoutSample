require(["../knockout-2.1.0", "surveyViewModel", "../domReady!"], 
    function(ko, surveyViewModel) {
  ko.applyBindings(new surveyViewModel());
});