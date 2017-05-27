
// ======= ======= ======= REFACTORING ======= ======= =======
// ======= ======= ======= REFACTORING ======= ======= =======
// ======= ======= ======= REFACTORING ======= ======= =======

// ======= default rooms =======
var rooms = {
    livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
    bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
    bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
}

// ======= myCondo =======
var myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    rooms: rooms,
    initialize: function() {
        console.log("== initialize ==");
        myCondo.makeRooms();
    },
    makeRooms: function() {
        console.log("== makeRooms ==");
        var condoEl = document.getElementById('condo');
        var nextRoomEl;

        // == create div elements (with id, class); append to condo
        $.each(myCondo.rooms, function(key, roomObj) {

            // == divs
            nextRoomEl = document.createElement("div");
            nextRoomEl.id = key;
            nextRoomEl.className = "room";
            condoEl.appendChild(nextRoomEl);

            // == name labels
            nextName = roomObj.name;
            nextNameEl = document.createElement("p");
            nextNameEl.innerHTML = nextName;
            nextNameEl.className = "room-label";
            nextRoomEl.appendChild(nextNameEl);

            // == size labels
            nextRoomEl = document.getElementById(key);
            nextSizeEl = document.createElement("p");
            nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
            nextSizeEl.className = "size-label";
            nextRoomEl.appendChild(nextSizeEl);

            // == convert feet to pixels for positioning
            roomObj = myCondo.feetToPixels(roomObj);
            nextStyles = "position:absolute; ";
            nextStyles += "left:" + roomObj.X + "px; top:" + roomObj.Y + "px; ";
            nextStyles += "width:" + roomObj.W + "px; height:" + roomObj.H + "px";
            nextRoomEl.setAttribute("style", nextStyles);
        });
    },
    feetToPixels: function(roomObj) {
        console.log("== feetToPixels ==");
        roomObj.X = roomObj.X * 10;
        roomObj.Y = roomObj.Y * 10;
        roomObj.W = roomObj.W * 10;
        roomObj.H = roomObj.H * 10;
        return roomObj;
    }
};
myCondo.initialize();


// ======= ======= ======= EVENTS ======= ======= =======
// ======= ======= ======= EVENTS ======= ======= =======
// ======= ======= ======= EVENTS ======= ======= =======

// ======= activateRoomSelect =======
function activateRoomSelect() {
    console.log("== activateRoomSelect ==");
    document.getElementById("selRoom").addEventListener("change", getSelectedRoom);
    // $('#selRoom').change(getSelectedRoom);
}
// ======= activateClearSelection =======
function activateClearSelection() {
    console.log("== activateClearSelection ==");
    document.getElementById("clearBtn").addEventListener("click", clearSelectedRoom);
    // $('#clearBtn').on('click', clearSelectedRoom);
}
activateRoomSelect();
activateClearSelection();

// ======= clearSelectedRoom =======
function clearSelectedRoom() {
    console.log("== clearSelectedRoom ==");
    $('#roomN').val("");
    $('#roomW').val("");
    $('#roomH').val("");
    $('#selRoom>option:eq(0)').prop('selected', true);
    $.each(myCondo.rooms, function(roomKey, roomObj) {
        var nextRoomId = roomObj.id;
        var nextRoomEl = document.getElementById(nextRoomId);
        nextRoomEl.style.backgroundColor = "#ddd";
    });
}

// ======= getSelectedRoom =======
function getSelectedRoom() {
    console.log("\n== getSelectedRoom ==");
    var selectedRoom = $('#selRoom').find(":selected").val();
    var selectedRoomObj = myCondo.rooms[selectedRoom];
    console.log("selectedRoomObj:", selectedRoomObj);
    if (selectedRoomObj) {
        $('#roomN').val(selectedRoomObj.name);
        $('#roomW').val(selectedRoomObj.W / 10);
        $('#roomH').val(selectedRoomObj.H / 10);
        // showRoomData(selectedRoomObj.id);
        showSelectedRoom(selectedRoomObj.id);
    } else {
        $('#roomN').val("");
        $('#roomW').val("");
        $('#roomH').val("");
    }
}


// ======= showSelectedRoom =======
function showSelectedRoom(whichRoom) {
    console.log("== showSelectedRoom ==");
    $.each(myCondo.rooms, function(roomKey, roomObj) {
        var nextRoomId = roomObj.id;
        var nextRoomEl = document.getElementById(nextRoomId);
        nextRoomEl.style.backgroundColor = "#ddd";
    });
    var roomEl = document.getElementById(whichRoom);
    roomEl.style.backgroundColor = "thistle";
}


// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======


// ======= showRoomData =======
function showRoomData(whichRoom) {
    console.log("== showRoomData ==");
    console.log("whichRoom: ", whichRoom);
    console.log("\n if...");
    $.each(myCondo.rooms, function(key, roomObj) {
        nextRoomId = roomObj.id;
        nextRoomName = roomObj.name;

        // ======= if =======
        if (nextRoomId == whichRoom) {
            console.log("nextRoomName: ", nextRoomName);
        }
    });
    console.log("\n if...else");
    $.each(myCondo.rooms, function(key, roomObj) {
        nextRoomId = roomObj.id;
        nextRoomName = roomObj.name;

        // ======= if...else =======
        if (nextRoomId == whichRoom) {
            console.log("SELECTED: ", nextRoomName);
        } else {
            console.log("NOT SELECTED: ", nextRoomName);
        }
    });
    console.log("\n if...else if...else");
    $.each(myCondo.rooms, function(key, roomObj) {
        nextRoomId = roomObj.id;
        nextRoomName = roomObj.name;

        // ======= if...else if...else ======= AND: && ======= OR: || =======
        if ((nextRoomId == whichRoom) && (nextRoomId == "bathroom")) {
            console.log("SELECTED: ", nextRoomName);
            console.log("** Eewwww... CLEAN TOILET **");
        } else if (nextRoomId == whichRoom)  {
            console.log("SELECTED: ", nextRoomName);
        } else {
            console.log("NOT SELECTED: ", nextRoomName);
        }
    });
}


// ======= ======= ======= SWITCH ======= ======= =======
// ======= ======= ======= SWITCH ======= ======= =======
// ======= ======= ======= SWITCH ======= ======= =======

// function switchSelectedRoom(whichRoom) {
//     console.log("== switchSelectedRoom ==");
//     switch (whichRoom) {
//         case "livingRoom":
//             console.log("** livingRoom **");
//             break;
//         case "bathroom":
//             console.log("** bathroom **");
//             break;
//         case "bedroom":
//             console.log("** bedroom **");
//             break;
//         case "kitchen":
//             console.log("** kitchen **");
//             break;
//         default:
//             console.log("** default **");
//     }
// }
// switchSelectedRoom("livingRoom");


// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======
// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======
// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======

// // == multiple condo instances
// var condo2B = new Condo(
//     /* name: */ "Unit 2-B",
//     /* box: */  {},
//     /* X: */    0,
//     /* Y: */    0,
//     /* W: */    36,
//     /* H: */    18
// )
// var condo5A = new Condo(
//     /* name: */ "Unit 5-A",
//     /* box: */  {},
//     /* X: */    0,
//     /* Y: */    30,
//     /* W: */    48,
//     /* H: */    24
// )
//
// // == Condo constructor function
// function Condo(name, condoBox, X, Y, W, H) {
//     console.log("== Condo ==");
//     this.condoBox = condoBox;
//     this.name = name;
//     this.X = X;
//     this.Y = Y;
//     this.W = W;
//     this.H = H;
// }
//
// // == adding methods to the Condo object prototype
// Condo.prototype.initialize = function() {
//     console.log("== initialize ==");
//     console.log("   condo: ", this.name);
//     this.condoBox.L = $('#condo').offset().left;
//     this.condoBox.T = $('#condo').offset().top;
//     this.condoBox.W = $('#condo').width();
//     this.condoBox.H = $('#condo').height();
//     $(window).on('mousemove', this.mouseLoc)
// }
//
// console.log("condo2B: ", condo2B);
// console.log("condo5A: ", condo5A);
// condo2B.initialize();
// condo5A.initialize();

// ======= ======= ======= DRAGGERS ======= ======= =======
// ======= ======= ======= DRAGGERS ======= ======= =======
// ======= ======= ======= DRAGGERS ======= ======= =======

// draggers = {
//     chair1: { id:"chair1", name:"Chair", class:"chair", el:null,
//         msX:0, msY:0, moX:0, moY:0, X:0, Y:0, W:30, H:35 },
//     couch1: { id:"couch1", name:"Sofa", class:"couch", el:null,
//         msX:0, msY:0, moX:0, moY:0, X:20, Y:20, W:60, H:30 }
// };
// console.dir(draggers);
//
// // ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,
//     condoBox: {},                            // new property for drag limits
//     draggers: draggers,                      // make draggers part of object
//     customRooms: {},                         // store user-designed room data
//     activeDragger: null,                     // store currently active dragger
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.condoBox.L = $('#condo').offset().left;
//         myCondo.condoBox.T = $('#condo').offset().top;
//         myCondo.condoBox.W = $('#condo').width();
//         myCondo.condoBox.H = $('#condo').height();
//         $(window).on('mousemove', myCondo.mouseLoc)
//         myCondo.makeRooms();
//         myCondo.makeDraggers();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         $.each(myCondo.rooms, function(key, roomObj) {
//
//             // == divs
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = key;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//
//             // == name labels
//             nextName = roomObj.name;
//             nextNameEl = document.createElement("p");
//             nextNameEl.innerHTML = nextName;
//             nextNameEl.className = "room-label";
//             nextRoomEl.appendChild(nextNameEl);
//
//             // == size labels
//             nextRoomEl = document.getElementById(key);
//             nextSizeEl = document.createElement("p");
//             nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
//             nextSizeEl.className = "size-label";
//             nextRoomEl.appendChild(nextSizeEl);
//
//             // == convert feet to pixels for positioning
//             roomObj = myCondo.feetToPixels(roomObj);
//             nextStyles = "position:absolute; ";
//             nextStyles += "left:" + roomObj.X + "px; top:" + roomObj.Y + "px; ";
//             nextStyles += "width:" + roomObj.W + "px; height:" + roomObj.H + "px";
//             nextRoomEl.setAttribute("style", nextStyles);
//         });
//     },
//     feetToPixels: function(roomObj) {
//         console.log("== feetToPixels ==");
//         roomObj.X = roomObj.X * 10;
//         roomObj.Y = roomObj.Y * 10;
//         roomObj.W = roomObj.W * 10;
//         roomObj.H = roomObj.H * 10;
//         return roomObj;
//     },
//
//     // ======= ======= ======= dragger functions ======= ======= =======
//     makeDraggers: function() {
//         console.log("== makeDraggers ==");
//         var condoEl = document.getElementById('condo');
//         var nextDragEl;
//
//         $.each(myCondo.draggers, function(key, dragObj) {
//             nextDragEl = document.createElement("div");
//             nextDragEl.id = key;
//             nextDragEl.className = "dragger " + dragObj.class;       // class for different items
//             nextStyles = "position:absolute; ";
//             nextStyles += "left:" + dragObj.X + "px; top:" + dragObj.Y + "px; ";
//             nextStyles += "width:" + dragObj.W + "px; height:" + dragObj.H + "px";
//             nextDragEl.setAttribute("style", nextStyles);
//             condoEl.appendChild(nextDragEl);
//             myCondo.activateDragger(key);                            // assign event listeners
//         });
//     },
//     activateDragger: function(draggerId) {
//         console.log("== activateDragger ==");
//         $('#' + draggerId).on('mousedown', myCondo.initDrag);
//         $('#' + draggerId).on('dblclick', myCondo.rotateDragger);
//     },
//     initDrag: function(e) {
//         console.log("== initDrag ==");
//         e.preventDefault();
//
//         // == set drag object, id and element
//         myCondo.activeDragger = myCondo.draggers[e.currentTarget.id];
//         myCondo.activeDragger.id = e.currentTarget.id;
//         myCondo.activeDragger.el = e.currentTarget;
//
//         // == set start positions (draggerXY, mouse startXY, mouse offsetXY)
//         myCondo.activeDragger.X = $(myCondo.activeDragger.el).position().left;
//         myCondo.activeDragger.Y = $(myCondo.activeDragger.el).position().top;
//         myCondo.activeDragger.msX = e.clientX;      // mouse
//         myCondo.activeDragger.msY = e.clientY;
//         myCondo.activeDragger.moX = e.clientX - myCondo.activeDragger.X - myCondo.condoBox.L;
//         myCondo.activeDragger.moY = e.clientY - myCondo.activeDragger.Y - myCondo.condoBox.T;
//
//         // == add move and up listeners
//         $(window).on('mousemove', myCondo.moveItem)
//         $(window).on('mouseup', myCondo.dropItem)
//     },
//     moveItem: function(e) {
//         // console.log("== moveItem ==");
//
//         // == change in mouse loc from start position
//         var dX = parseInt(e.clientX - myCondo.activeDragger.msX);
//         var dY = parseInt(e.clientY - myCondo.activeDragger.msY);
//
//         // == updated dragger loc
//         var draggerX = myCondo.activeDragger.X + dX;
//         var draggerY = myCondo.activeDragger.Y + dY;
//         var dXY = getMoveBoundaries(draggerX, draggerY);
//         $(myCondo.activeDragger.el).css({top: dXY[1] + 'px', left: dXY[0] + 'px'});
//
//         // ======= getMoveBoundaries =======
//         function getMoveBoundaries(draggerX, draggerY) {
//             // console.log("== getMoveBoundaries== ");
//             if ((draggerX + myCondo.condoBox.L) < myCondo.condoBox.L) {
//                 draggerX = 0;
//             }
//             if ((draggerX + myCondo.condoBox.L + myCondo.activeDragger.W) > myCondo.condoBox.L + myCondo.condoBox.W) {
//                 draggerX = myCondo.condoBox.W - myCondo.activeDragger.W;
//             }
//             if ((draggerY + myCondo.condoBox.T) < myCondo.condoBox.T) {
//                 draggerY = 0;
//             }
//             if ((draggerY + myCondo.condoBox.T + myCondo.activeDragger.H) > myCondo.condoBox.T + myCondo.condoBox.H) {
//                 draggerY = myCondo.condoBox.H - myCondo.activeDragger.H;
//             }
//             return [draggerX, draggerY];
//         }
//     },
//     dropItem: function(e) {
//         console.log("== dropItem ==");
//         myCondo.draggers[myCondo.activeDragger.id].X = $(myCondo.activeDragger.el).offset().left;
//         myCondo.draggers[myCondo.activeDragger.id].Y = $(myCondo.activeDragger.el).offset().top;
//         myCondo.activeDragger = {};
//         $(window).off('mousemove', myCondo.moveItem)
//         $(window).off('mouseup', myCondo.dropItem)
//     },
//     mouseLoc: function(e) {
//         // console.log("== mouseLoc ==");
//         // console.log("...e.clientXY: ", e.clientX, e.clientY);
//     },
//
//     // ======= ======= ======= rotation functions ======= ======= =======
//     rotateDragger: function(e) {
//         console.log("== rotateDragger ==");
//         var obj = $('#' + e.currentTarget.id);
//         var dragRot = myCondo.getRotationDegrees(obj) + 90;
//         $('#' + e.currentTarget.id).css({
//             "-moz-transform":"rotate(" + dragRot + "deg)",
//             "-webkit-transform":"rotate(" + dragRot + "deg)",
//             "-o-transform":"rotate(" + dragRot + "deg)",
//             "-ms-transform":"rotate(" + dragRot + "deg)",
//             "transform":"rotate(" + dragRot + "deg)"
//         });
//         if (dragRot == 90) {
//             $('#' + e.currentTarget.id).css('box-shadow', '2px -2px 2px #555')
//         } else if (dragRot == 180) {
//             $('#' + e.currentTarget.id).css('box-shadow', '-2px -2px 2px #555')
//         } else if (dragRot == 270) {
//             $('#' + e.currentTarget.id).css('box-shadow', '-2px 2px 2px #555')
//         } else if (dragRot == 360) {
//             $('#' + e.currentTarget.id).css('box-shadow', '2px 2px 2px #555')
//         }
//     },
//     getRotationDegrees: function(obj) {
//         console.log("== getRotationDegrees ==");
//         // == http://stackoverflow.com/questions/8270612/get-element-moz-transformrotate-value-in-jquery
//         var matrix = obj.css("-webkit-transform") ||
//             obj.css("-moz-transform")    ||
//             obj.css("-ms-transform")     ||
//             obj.css("-o-transform")      ||
//             obj.css("transform");
//
//         // == calculate rotation process from matrix values
//         if (matrix !== 'none') {
//             var values = matrix.split('(')[1].split(')')[0].split(',');
//             var a = values[0];
//             var b = values[1];
//             var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
//         } else {
//             var angle = 0;
//         }
//         return (angle < 0) ? angle + 360 : angle;
//         console.dir(myCondo);
//     }
// };
// myCondo.initialize();
//

// ======= ======= ======= CUSTOMIZE ======= ======= =======
// ======= ======= ======= CUSTOMIZE ======= ======= =======
                                    // ======= ======= ======= CUSTOMIZE ======= ======= =======
