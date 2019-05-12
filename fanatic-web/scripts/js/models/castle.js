var castle;

function getCastle(callback)
{
    $.ajax({
        url: "/scripts/js/data/castle-stats.html",
        dataType: "json",
        success: function (result) {
            castle = result;
            callback();
        }
    });
}

function selectedCastle(callback) {
    $.ajax({
        url: "/scripts/js/data/castle-selected.html",
        dataType: "json",
        success: function (result) {
            castle = result;
            callback();
        }
    });
}