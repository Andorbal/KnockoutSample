require(["../knockout-2.1.0", "surveyViewModel", "../domReady!"], 
    function(ko, surveyViewModel) {
  var model = new surveyViewModel();
  ko.applyBindings(model);
  $(".questions").sortable({
    sort: function(event, ui) {
      var elems = $(".questions li").map(function() {
        return this;
      });


    }
  });
});