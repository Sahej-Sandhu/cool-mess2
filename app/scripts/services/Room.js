(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room){
      rooms.$add(room);
    }

    Room.delete = function(room){
      rooms.$remove(room);
    }

    return Room;
  }

  angular
    .module('cool-mess2')
    .factory('Room', ['$firebaseArray', Room]);
})();
