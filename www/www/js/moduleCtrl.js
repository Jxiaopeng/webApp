angular.module("moduleCtrl",[])
    /*.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })*/
    .controller("dashCtrl",function($scope){

    })
    .controller("chatCtrl",function($scope,Chats){
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }
    })
    .controller("chatDetailCtrl",function($scope,Chats,$stateParams){
        $scope.chat=Chats.get($stateParams.chatId)
    })
    .controller("friendCtrl",function($scope,Friends){
        $scope.friends=Friends.all();
        $scope.remove = function(friend) {
            Friends.remove(friend);
        }
    })
    .controller("friendDetailCtrl",function($scope,Friends,$stateParams){
        $scope.friend=Friends.get($stateParams.friendId);
        console.log($stateParams.friendId);
    })
    .controller("accountCtrl",function($scope){
        $scope.settings = {
            enableFriends: true
        };
    })
