
chair1 = new Item(
    /* itemEl */ null,
    /* itemName */ "chair1",
    /* itemText */ "Chair",
    /* itemMove */ "dragger",
    /* itemImage */ "chair1",
    /* startXY */ { itemL:0, itemT:0, mouseX:0, mouseY:0, diffX:0, diffY:0, dragL:0, dragT:0 },
    /* minMaxLT */ { minL:0, minT:0, maxL:0, maxT:0 },
    /* dropLTWH */ { L:0, T:0, W:0, H:0 },
    /* initLTWH */ { L:0, T:0, W:100, H:100 },
    /* bounds */ { L:0, T:0, W:condoW, H:condoH }      // relative
);


activatePageItems

$('#' + item.itemId).on('mousedown', function(e) {
    console.log("\nmousedown");
    var actor = clientApp.items[$(e.currentTarget).attr('id')];
    var actorEl = $(e.currentTarget);
    e.preventDefault();
    clientApp.activeActor = actor;
    actor.initMove(e, actorEl, actor);


initMove
window.addEventListener('mousemove', actor.moveItem, true);
window.addEventListener('mouseup', actor.mouseUp, true);

moveItem
checkItemTargets
updateItemLoc
getMoveBoundaries
mouseUp




condo sizing algorithm

get condo size
condoW
condoH

set LR max/min
LRmaxW = condoW/2           // can't be more than 1/2 of condo width
LRmaxH = condoH             // can't be more than condo height
LRminW = condoW * .33       // must be at least 1/3 condo width
LRminH = condoH * .66       // must be at least 2/3 condo height

if (nextXYWH.W > LRmaxW) {
    nextXYWH.W = LRmaxW
} else if (nextXYWH.W < LRminW) {
    nextXYWH.W = LRminW
}
if (nextXYWH.H > LRmaxH) {
    nextXYWH.H = LRmaxH
} else if (nextXYWH.H < LRminH) {
    nextXYWH.H = LRminH
}

nextXYWH.W > LRmaxW
    ? nextXYWH.W = LRmaxW
    : expr2

var roomSizes = {
    condo: { W:360, H:180 },
    livingRoom: { maxW:this.condo.W/2, minW:this.condo.W/3, maxH:this.condo.W, minH:this.condo.W/3 },
    kitchen: {  maxW:120, H:120 },
    bathroom: { maxW:120, H:60 },
    bedroom: { maxW:120, H:180 }
}
console.dir(roomSizes);
