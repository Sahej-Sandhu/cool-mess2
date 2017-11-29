(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      this.cancel = function(){
        $uibModalInstance.dismiss();
      };

      this.submit = function(){
        Room.add(this.roomName);
        $uibModalInstance.close();
      };

    }

    angular
        .module('cool-mess2')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
