function inRect(point, rect) {
    if (point.x >= rect.x && point.x <= (rect.x + rect.w)) {
        if (point.y >= rect.y + rect.tile.offset && point.y <= (rect.y + rect.h + rect.tile.offset)) {
            return true;
        }
    }
    return false;
}

function inQuadrant(point, rect) {
    //assumes already passed inRect
    var mid = {
        x: rect.x + (rect.w / 2),
        y: rect.y + rect.tile.offset + (rect.h / 2)
    }
    
    if (point.x <= mid.x) {
        if (point.y <= mid.y) {
            return 2;
        }
        else {
            return 3;
        }
    }
    else {
        if (point.y <= mid.y) {
            return 1;
        }
        else {
            return 4;
        }
    }
    return null;
}

function inTile(point, rect, gridSize) {
    var quadrant = inQuadrant(point, rect);
    var angle;
    var relPoint = {
        x: point.x - rect.x,
        y: point.y - (rect.y + rect.tile.offset)
    }
    var dist = {
        x: 0,
        y: 0
    }
    switch (quadrant) {
        case 1:
            dist.x = gridSize.x - relPoint.x;
            dist.y = (gridSize.y / 2) - relPoint.y;
            angle = toDegrees(Math.atan(dist.y / dist.x));
            if (angle <= 26.57) {
                return true;
            }
            break;
        case 2:
            dist.x = relPoint.x;
            dist.y = (gridSize.y / 2) - relPoint.y;
            angle = toDegrees(Math.atan(dist.y / dist.x));
            if (angle <= 26.57) {
                return true;
            }
            break;
        case 3:
            dist.x = relPoint.x;
            dist.y = relPoint.y - (gridSize.y / 2);
            angle = toDegrees(Math.atan(dist.y / dist.x));
            if (angle <= 26.57) {
                return true;
            }
            break;
        case 4:
            dist.x = gridSize.x - relPoint.x;
            dist.y = relPoint.y - (gridSize.y / 2);
            angle = toDegrees(Math.atan(dist.y / dist.x));
            if (angle <= 26.57) {
                return true;
            }
            break;
    }
    return false;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}