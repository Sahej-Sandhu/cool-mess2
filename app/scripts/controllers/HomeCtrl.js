(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('cool-mess2')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
