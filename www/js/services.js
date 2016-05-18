angular.module('starter.services', [])

  .factory("NoteFactory", function(){

    var notes = [];

    var updateLocal = function() {

        localStorage.notes = JSON.stringify(notes);
        console.log("UPDATED!!!");
    };

    var getNote = function(id) {

      for(var i=0; i<notes.length; i++) {

        if(id == notes[i].id) {

          return {
            index: i,
            note: notes[i]
          };
        }
      }
    };

    if(localStorage && localStorage.notes){
      notes = JSON.parse(localStorage.notes);
    } else {
      localStorage.setItem('notes',JSON.stringify(notes));
    }

    if(localStorage.currNote == null){
      localStorage.setItem('currNote', "");
    }

    return {

      addNote: function() {

        var seed = new Date().getTime();
        var genId = Math.floor(Math.random() * seed / 200000);
        localStorage.currNote = genId;
        notes.push({
          id: genId,
          text: "Enter a message"
        });

        updateLocal();

        $state.go('tab.note', {id: genId});

      },

      saveNote: function(id, t) {

        console.log("text " + t);
        var i = getNote(id).index;

        notes[i].text = t;
        updateLocal();
      },

      removeNote: function(id) {

        var i = getNote(id).index;
        console.log(notes.splice(i,1));
        updateLocal();
      },

      getAllNotes: function() {

        return notes;
      },

      getNote: function(id) {

        return getNote(id);
      }
    }
  });
