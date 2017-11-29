(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.addRoom = function(){
        $uibModal.open({
          size: 'sm',
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl as modal',
        });
      }

      this.deleteRoom = function(){
        Room.delete(this.room);
      };

    }

    angular
        .module('cool-mess2')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
