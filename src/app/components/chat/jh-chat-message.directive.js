(function () {
  'use strict';

  angular.module('janusHangouts')
    .directive('jhChatMessage', jhChatMessageDirective);

  function jhChatMessageDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/chat/jh-chat-message.html',
      scope: {
        message: '='
      },
      controllerAs: 'vm',
      bindToController: true,
      controller: JhChatMessageCtrl
    };
  }

  function JhChatMessageCtrl() {
    /* jshint: validthis */
    var vm = this;
  }
})();