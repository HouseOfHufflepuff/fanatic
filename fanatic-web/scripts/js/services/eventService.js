fanaticApp.service('EventService', function ($q, $timeout, TerrainService, AccountService) {
    this.rect;
    this.btnClicked = false;

    this.drawSelectedCursor = function (rect, ctx) {
        var circleDim = {
            x: rect.x + (rect.w / 2),
            y: (rect.y + (rect.h / 2) + rect.tile.offset) * 2,
            radius: rect.w / 2
        }
        ctx.save();
        ctx.beginPath();
        ctx.scale(1, .5);
        ctx.arc(circleDim.x, circleDim.y, circleDim.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(255, 255, 255, .2)";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(255, 255, 255, 1)";
        ctx.stroke();
        ctx.restore();
    };

    this.drawSelectedTileMenu = function (rect, player) {
        if (rect != null) {
            var gamemenu = document.getElementById("gamemenu");
            switch (rect.tile.type) {
                case "castle":
                    getCastle(function () {
                        gamemenu.innerHTML = "<span class='glyphicon glyphicon-tower glyphicon-lg'></span> ";
                        gamemenu.innerHTML += "name: " + castle.name + "<br/>";
                        gamemenu.innerHTML += "score: " + castle.score + "<br/>";
                    });
                    break;
                case "dungeon":
                    getDungeon(function () {
                        gamemenu.innerHTML = "<span class='glyphicon glyphicon-flag glyphicon-lg'></span> ";
                        gamemenu.innerHTML += "name: " + dungeon.name + "<br/>";
                        gamemenu.innerHTML += "level: " + dungeon.level + "<br/>";
                    });
                    break;
                case "land":
                    gamemenu.innerHTML = "<span class='glyphicon glyphicon-tree-conifer glyphicon-lg'></span> ";
                    gamemenu.innerHTML += rect.tile.name + " " + rect.tile.type;
                    if (player.fanatics > 0) {
                        var foundCityBtn = document.getElementById("foundCityBtn");
                        foundCityBtn.style.display = "block";
                    }
                    break;
                case "water":
                    gamemenu.innerHTML = "<span class='glyphicon glyphicon-tint glyphicon-lg'></span> ";
                    gamemenu.innerHTML += rect.tile.name + " " + rect.tile.type;
                    break;
                default:
                    break;
            }

        }
    };

    this.clearSelectedTileActions = function () {
        var foundCityBtn = document.getElementById("foundCityBtn");
        foundCityBtn.style.display = "none";
    }

    this.gameClick = function (point, continentJSON, gridSize, offset, images, scale, ctx, rects, player) {
        console.log(this.btnClicked);
        this.clearSelectedTileActions();
        var rect = this.determineTile(point, rects, gridSize);
        this.rect = rect;
        this.drawSelectedTileMenu(rect, player);
        rects = TerrainService.drawWorld(continentJSON, gridSize, offset, images, scale, ctx);
        if (rect) {
            tileSelected = rect.tile;
            this.drawSelectedCursor(rect, ctx);
        }
        return rects;
    };

    this.determineTile = function (point, rects, gridSize) {
        for (i = 0; i < rects.length ; i++) {
            var boolRect = inRect(point, rects[i]);
            if (boolRect) {
                var boolTile = inTile(point, rects[i], gridSize);
                if (boolTile) {
                    return rects[i];
                }
            }
        }
        return null;
    };

    this.drawMainMenu = function (menuData) {
        var gamemenutitle = document.getElementById("game-center-menu-title");
        var gamemenu = document.getElementById("game-center-menu");
        var gamemenubody = document.getElementById("game-center-menu-body");
        if (gamemenu.style.display == "block") {
            if (menuData.title == gamemenutitle.innerHTML) {
                gamemenu.style.display = "none";
            }
        }
        else {
            gamemenu.style.display = "block";
        }
        //TODO fix button/reselect
        gamemenutitle.innerHTML = menuData.title;
        gamemenubody.innerHTML = "";
        switch (menuData.title) {
            case "Reports":
                getReports(function () {
                    gamemenubody.innerHTML = reports.player + "<br/>";
                    var reportsToDisplay = 10;
                    if (reports.reports.length < reportsToDisplay) {
                        reportsToDisplay = reports.reports.length;
                    }
                    for (var i = 0; i < reportsToDisplay; i++) {
                        var report = reports.reports[i];
                        gamemenubody.innerHTML += "<a href='#' id='lnk-report-" + i + "'>" + report.ID + "</a> " + report.color + "<br/>";
                    }
                });
                break;
            case "Report":
                getReport(menuData.ID, function () {
                    gamemenubody.innerHTML = "Gold " + report.gold + "<br/>";
                    gamemenubody.innerHTML += "Lost " + report.lost + "<br/>";
                    gamemenubody.innerHTML += "Killed " + report.killed + "<br/>";

                });
        }
    };

    this.addGameListeners = function () {
        var es = this;
        $("#lnk-reports").click(function () {
            var menuData = {
                title: "Reports"
            };
            es.drawMainMenu(menuData);
        });

        $("#lnk-quests").click(function () {
            var menuData = {
                title: "Quests"
            };
            es.drawMainMenu(menuData);
        });

        $("#lnk-alliance").click(function () {
            var menuData = {
                title: "Alliance"
            };
            es.drawMainMenu(menuData);
        });

        $("#lnk-rankings").click(function () {
            var menuData = {
                title: "Rankings"
            };
            es.drawMainMenu(menuData);
        });

        $("#btn-view-city").click(function () {
            var menuData = {
                title: "View City"
            };
            es.drawMainMenu(menuData);
        });

        $("#btn-recruit-city").click(function () {
            var menuData = {
                title: "Recruit"
            };
            es.drawMainMenu(menuData);
        });

        for (var i = 0; i < 10; i++) {
            $("#game-center-menu-body").on("click", "#lnk-report-" + i, function (e) {
                var id = e.srcElement.innerHTML;
                var menuData = {
                    title: "Report",
                    ID: id
                };
                es.drawMainMenu(menuData);
            });
        }
    };

    this.clearMenu = function () {
        var gamemenu = document.getElementById("gamemenu");
        gamemenu.innerHTML = "";
    };

    this.getPos = function (e, gameCanvas) {
        var r = gameCanvas.getBoundingClientRect();
        var point = {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        }
        return point;

    };
});