function selectedTileController($scope, $q, EventService) {
    $scope.foundCity = function () {
        EventService.btnClicked = true;
        console.log("foundcity");
        console.log(EventService.rect);
        console.log("foundcity");
    }
}