angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {})
  // TODO
  // JSON.parse JSON.Stringify create JSON (id, text)
  // Add to localStorage
  // Gen random number for id
  // delete function
  // views page (ng-repeat)
  // on click un-disable the note name field

.controller('NoteCtrl', ['$scope', '$state','NoteFactory', function($scope, $state, NoteFactory) {

  $scope.notes = NoteFactory.getAllNotes();

  $scope.newNote = NoteFactory.addNote;

  $scope.rem = NoteFactory.removeNote;

  $scope.openNote = function (theId) {

    $state.go('tab.note', {id: theId});

    localStorage.currNote = theId;
  }

}])

  .controller('NoteDetailCtrl', ['$scope', '$state','NoteFactory', function($scope, $state, NoteFactory) {

    $scope.id = localStorage.currNote;

    $scope.n = NoteFactory.getNote(localStorage.currNote).note.text || "";

    $scope.note = NoteFactory.getNote;

    $scope.save = NoteFactory.saveNote;



  }])

;
