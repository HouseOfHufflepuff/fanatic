var dungeon;

function getDungeon(callback) {
    $.ajax({
        url: "/scripts/js/data/dungeon-stats.html",
        dataType: "json",
        success: function (result) {
            dungeon = result;
            callback();
        }
    });
}