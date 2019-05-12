fanaticApp.service('TerrainService', function ($q, $timeout) {

    this.drawTerrain = function (continentJSON, gridSize, offset, images, scale, ctx) {
        var rects = new Array();
        ctx.scale(scale, scale);
        for (var i = 0; i < continentJSON.length; i++) {
            var tile = continentJSON[i];
            //console.log(tile);
            var pos = {
                x: (tile.x * gridSize.x / 2) + offset.x,
                y: (tile.y * gridSize.y / 2) + offset.y
            }
            //console.log(pos);
            tile.offset = 0;
            switch (tile.image) {
                case "water":
                    ctx.drawImage(images.water, pos.x, pos.y + 7);
                    tile.type = "water";
                    tile.offset = 7;
                    break;
                case "grass":
                    ctx.drawImage(images.grass, pos.x, pos.y);
                    tile.type = "land";
                    break;
                case "beach":
                    ctx.drawImage(images.beach, pos.x, pos.y);
                    tile.type = "land";
                    break;
                case "beachCornerES":
                    ctx.drawImage(images.beachCornerES, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "beachCornerNE":
                    ctx.drawImage(images.beachCornerNE, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "beachCornerNW":
                    ctx.drawImage(images.beachCornerNW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "beachCornerSW":
                    ctx.drawImage(images.beachCornerSW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "beachCornerS":
                    ctx.drawImage(images.beachCornerS, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "beachE":
                    ctx.drawImage(images.beachE, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "beachES":
                    ctx.drawImage(images.beachES, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "beachN":
                    ctx.drawImage(images.beachN, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "beachNE":
                    ctx.drawImage(images.beachNE, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "beachNW":
                    ctx.drawImage(images.beachNW, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "beachS":
                    ctx.drawImage(images.beachS, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "beachSW":
                    ctx.drawImage(images.beachSW, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "beachW":
                    ctx.drawImage(images.beachW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "dirt":
                    ctx.drawImage(images.dirt, pos.x, pos.y);
                    tile.type = "land";
                    break;
                case "dirtDouble":
                    ctx.drawImage(images.dirtDouble, pos.x, pos.y);
                    tile.type = "land";
                    break;
                case "grassWhole":
                    ctx.drawImage(images.grassWhole, pos.x, pos.y);
                    tile.type = "land";
                    break;
                case "hillE":
                    ctx.drawImage(images.hillE, pos.x, pos.y);
                    tile.type = "slope";
                    break;
                case "hillES":
                    ctx.drawImage(images.hillES, pos.x, pos.y);
                    tile.type = "slope";
                    break;
                case "hillN":
                    ctx.drawImage(images.hillN, pos.x, pos.y);
                    tile.type = "slope";
                    break;
                case "hillNE":
                    ctx.drawImage(images.hillNE, pos.x, pos.y);
                    tile.type = "slope";
                    break;
                case "hillNW":
                    ctx.drawImage(images.hillNW, pos.x, pos.y);
                    tile.type = "slope";
                    break;
                case "hillS":
                    ctx.drawImage(images.hillS, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "slope";
                    break;
                case "hillSW":
                    ctx.drawImage(images.hillSW, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "slope";
                    break;
                case "hillW":
                    ctx.drawImage(images.hillW, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "slope";
                    break;
                case "riverBankedES":
                    ctx.drawImage(images.riverBankedES, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverBankedEW":
                    ctx.drawImage(images.riverBankedEW, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverBankedNE":
                    ctx.drawImage(images.grassWhole, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverBankedNS":
                    ctx.drawImage(images.riverBankedNS, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverBankedNW":
                    ctx.drawImage(images.riverBankedNW, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverBankedSW":
                    ctx.drawImage(images.riverBankedSW, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverES":
                    ctx.drawImage(images.riverES, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverEW":
                    ctx.drawImage(images.riverEW, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverNE":
                    ctx.drawImage(images.riverNE, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverNS":
                    ctx.drawImage(images.riverNS, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverNW":
                    ctx.drawImage(images.riverNW, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverSW":
                    ctx.drawImage(images.riverSW, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "riverNE":
                    ctx.drawImage(images.riverNE, pos.x, pos.y);
                    tile.type = "river";
                    break;
                case "waterCornerES":
                    ctx.drawImage(images.waterCornerES, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterCornerNE":
                    ctx.drawImage(images.waterCornerNE, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "waterCornerNW":
                    ctx.drawImage(images.waterCornerNW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterCornerSW":
                    ctx.drawImage(images.waterCornerSW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterCornerS":
                    ctx.drawImage(images.waterCornerS, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterCornerW":
                    ctx.drawImage(images.waterCornerW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterE":
                    ctx.drawImage(images.waterE, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "waterES":
                    ctx.drawImage(images.waterES, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "waterN":
                    ctx.drawImage(images.waterN, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "waterNE":
                    ctx.drawImage(images.waterNE, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "waterNW":
                    ctx.drawImage(images.waterNW, pos.x, pos.y);
                    tile.type = "coast";
                    break;
                case "waterS":
                    ctx.drawImage(images.waterS, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterSW":
                    ctx.drawImage(images.waterSW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "waterW":
                    ctx.drawImage(images.waterW, pos.x, pos.y + 7);
                    tile.offset = 7;
                    tile.type = "coast";
                    break;
                case "hillTop":
                    ctx.drawImage(images.grass, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "land";
                    break;
                case "hillTopDirt":
                    ctx.drawImage(images.dirt, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "land";
                    break;
                case "trees1":
                    ctx.drawImage(images.trees1, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "land";
                    break;
                case "trees2":
                    ctx.drawImage(images.trees2, pos.x, pos.y - 15);
                    tile.offset = -15;
                    tile.type = "land";
                    break;
                case "castle1":
                    ctx.drawImage(images.grass, pos.x, pos.y);
                    ctx.drawImage(images.castle1, pos.x, pos.y - 20);
                    tile.type = "castle";
                    break;
                case "castle2":
                    ctx.drawImage(images.grass, pos.x, pos.y);
                    ctx.drawImage(images.castle2, pos.x, pos.y - 20);
                    tile.type = "castle";
                    break;
                case "castle3":
                    ctx.drawImage(images.grass, pos.x, pos.y);
                    ctx.drawImage(images.castle3, pos.x, pos.y - 19);
                    tile.type = "castle";
                    break;
                case "castle6":
                    ctx.drawImage(images.grass, pos.x, pos.y);
                    ctx.drawImage(images.castle6, pos.x, pos.y - 47);
                    tile.type = "castle";
                    break;
                case "dungeon1":
                    ctx.drawImage(images.grass, pos.x, pos.y);
                    ctx.drawImage(images.dungeon1, pos.x, pos.y - 30);
                    tile.type = "dungeon";
                    break;
            }

            tile.name = "t" + tile.x + "-" + tile.y;
            rects.push({ tile: tile, x: pos.x, y: pos.y, w: gridSize.x, h: gridSize.y });
        }
        return rects;
    };

    this.drawWorld = function (continentJSON, gridSize, offset, images, scale, ctx) {
        this.goFullScreen();
        var rects = this.drawTerrain(continentJSON, gridSize, offset, images, scale, ctx);
        return rects;
    };

    this.goFullScreen = function () {
        var c = document.getElementById("gameCanvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    };

});

