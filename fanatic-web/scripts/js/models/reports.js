var reports;
var report;

function getReports(callback)
{
    $.ajax({
        url: "/scripts/js/data/reports.html",
        dataType: "json",
        success: function (result) {
            reports = result;
            callback();
        },
        error: function (jqXHR, textStatus, errorThrown ) {
            //console.log(errorThrown);
        }
    });
}

function getReport(ID, callback) {
    $.ajax({
        url: "/scripts/js/data/report.html",
        dataType: "json",
        success: function (result) {
            report = result;
            callback();
        }
    });
}