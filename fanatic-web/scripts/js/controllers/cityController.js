function CityController($scope, $q, $route) {
    var stage = new Kinetic.Stage({
        container: 'gameCanvas',
        width: 578,
        height: 200
    });
    var layer = new Kinetic.Layer();
    var triangle = new Kinetic.RegularPolygon({
        x: 190,
        y: 120,
        sides: 3,
        radius: 80,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
    });
    triangle.on('mouseout', function () {
        console.log('Mouseout triangle');
    });
    layer.add(triangle);
    stage.add(layer);

    
}

