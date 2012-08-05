$(function() {
  ko.bindingHandlers.sortable.allowDrop = false;
  var model = new surveyViewModel();
  ko.applyBindings(model);
});