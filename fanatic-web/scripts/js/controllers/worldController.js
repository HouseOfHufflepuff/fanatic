function WorldController($scope, $q, $route, WorldService, TerrainService, EventService, SecurityService) {
    var c = document.getElementById("gameCanvas");
    var ctx = c.getContext("2d");
    var rects = new Array();
    var gridSize = {
        x: 100,
        y: 50
    };

    var mouseDown = false;
    var mouseDragged = false;
    var offset = { x: 0, y: 0 };
    var mousePointStart = { x: 0, y: 0 };
    var deltaMouse = { x: 0, y: 0 };
    var imagesLoaded = false;
    var images = {};
    var tileSelected;
    var scale = 1;

    var sources = {
        grass: "/images/env/grass.png",
        water: "/images/env/water.png",
        beach: "/images/env/beach.png",
        beachCornerES: "/images/env/beachCornerES.png",
        beachCornerNE: "/images/env/beachCornerNE.png",
        beachCornerNW: "/images/env/beachCornerNW.png",
        beachCornerSW: "/images/env/beachCornerSW.png",
        beachE: "/images/env/beachE.png",
        beachES: "/images/env/beachES.png",
        beachN: "/images/env/beachN.png",
        beachNE: "/images/env/beachNE.png",
        beachNW: "/images/env/beachNW.png",
        beachS: "/images/env/beachS.png",
        beachSW: "/images/env/beachSW.png",
        beachW: "/images/env/beachW.png",
        dirt: "/images/env/dirt.png",
        dirtDouble: "/images/env/dirtDouble.png",
        grassWhole: "/images/env/grassWhole.png",
        hillE: "/images/env/hillE.png",
        hillES: "/images/env/hillES.png",
        hillN: "/images/env/hillN.png",
        hillNE: "/images/env/hillNE.png",
        hillNW: "/images/env/hillNW.png",
        hillS: "/images/env/hillS.png",
        hillSW: "/images/env/hillSW.png",
        hillW: "/images/env/hillW.png",
        riverBankedES: "/images/env/riverBankedES.png",
        riverBankedEW: "/images/env/riverBankedEW.png",
        riverBankedNE: "/images/env/riverBankedNE.png",
        riverBankedNS: "/images/env/riverBankedNS.png",
        riverBankedNW: "/images/env/riverBankedNW.png",
        riverBankedSW: "/images/env/riverBankedSW.png",
        riverES: "/images/env/riverES.png",
        riverEW: "/images/env/riverEW.png",
        riverNE: "/images/env/riverNE.png",
        riverNS: "/images/env/riverNS.png",
        riverNW: "/images/env/riverNW.png",
        riverSW: "/images/env/riverSW.png",
        riverNE: "/images/env/riverNE.png",
        waterCornerES: "/images/env/waterCornerES.png",
        waterCornerNE: "/images/env/waterCornerNE.png",
        waterCornerNW: "/images/env/waterCornerNW.png",
        waterCornerSW: "/images/env/waterCornerSW.png",
        waterCornerS: "/images/env/waterCornerS.png",
        waterCornerW: "/images/env/waterCornerW.png",
        waterE: "/images/env/waterE.png",
        waterES: "/images/env/waterES.png",
        waterN: "/images/env/waterN.png",
        waterNE: "/images/env/waterNE.png",
        waterNW: "/images/env/waterNW.png",
        waterS: "/images/env/waterS.png",
        waterSW: "/images/env/waterSW.png",
        waterW: "/images/env/waterW.png",
        trees1: "/images/env/trees1.png",
        trees2: "/images/env/trees2.png",
        castle1: "/images/env/castle1.png",
        castle2: "/images/env/castle2.png",
        castle3: "/images/env/castle3.png",
        castle6: "/images/env/castle6.png",
        dungeon1: "/images/env/dungeon1.png",
        gameIcons: "/images/icons/gameIcons.png"
    }
    var player = SecurityService.getActivePlayer();
    var continentJSON = null;
    var world = null;
    var promises = [];
    var promise2 = WorldService.get($route.current.params.id);
    $q.all([promise2]).then(function (results) {
        world = results[0];
        continentJSON = world.terrain;
        newGame();
    });

    function newGame() {
        // center game on continent
        offset = { x: -2000, y: 0 };
        // initialize all views
        // TODO add spinner when loading the views
        if (imagesLoaded == false) {
            loadImages(sources, function () {
                rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
            });
        }
        else {
            rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
        }
        window.onresize = function (event) {
            rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
        };
        EventService.addGameListeners();

    }

    function loadImages(sources, callback) {
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for (var src in sources) {
            numImages++;
        }
        for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
                if (++loadedImages >= numImages) {
                    imagesLoaded = true;
                    callback();
                }
            };
            images[src].src = sources[src];
        }
    }

    //move to event service
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37: //left
                offset = { x: offset.x + 5, y: offset.y };
                EventService.clearMenu();
                rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
                break;
            case 38: //up
                offset = { x: offset.x, y: offset.y + 5 };
                EventService.clearMenu();
                rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
                break;
            case 39: //right
                offset = { x: offset.x - 5, y: offset.y };
                EventService.clearMenu();
                rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
                break;
            case 40: //down
                offset = { x: offset.x, y: offset.y - 5 };
                EventService.clearMenu();
                rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
                break;
        }
    }
    


    gameCanvas.onmousedown = function (e) {
        mousePointStart = EventService.getPos(e, gameCanvas);
        mouseDown = true;
        mouseDragged = false;
    }

    gameCanvas.onmousemove = function (e) {
        if (mouseDown == true) {
            EventService.clearMenu();
            var point = EventService.getPos(e, gameCanvas);
            deltaMouse.x = point.x - mousePointStart.x;
            deltaMouse.y = point.y - mousePointStart.y;
            if (deltaMouse.x != 0 || deltaMouse.y != 0) {
                mouseDragged = true;
                offset.x = offset.x + deltaMouse.x;
                offset.y = offset.y + deltaMouse.y;
                mousePointStart.x = point.x;
                mousePointStart.y = point.y;
                rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
            }
        }
    }

    document.onmouseup = function (e) {
        mouseDown = false;
        if (mouseDragged == false) {
            var point = EventService.getPos(e, gameCanvas);
            rects = EventService.gameClick(point, continentJSON, gridSize, offset, images, scale, ctx, rects, player);
        }
    }

    var closeMainMenu = function () {
        var gamemenu = document.getElementById("game-center-menu");
        gamemenu.style.display = "none";
    };
    $scope.closeMainMenu = closeMainMenu;

    c.onmousewheel = function (e) {
        //console.log("zoom");
        //var wheel = e.wheelDelta / 120;//n or -n
        //var zoom = 1 + wheel / 2;
        //scale = scale * zoom;
        //rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
    }

}

