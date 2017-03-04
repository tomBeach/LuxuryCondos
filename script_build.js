
// == comment

// == project: build a condo diagram on web page

// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// == intro
// concepts, syntax
// concepts -- like any web process: page mark-up vs logical programatic flow
// syntax -- (), [], {}, ";", ":"
// variable names -- camelCase, snake_case, css-classes, UpperFirstChar, lowerFirstChar
// words -- variable, number, decimal, string, variableName, variableValue, memoryLocation, pointer

// == tools
// Chrome > OPTION/COMMAND/J > console
// COMMAND/J

// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======

// console.log("\n======= objects =======");
// myCondo = {};
// console.log("myCondo:", myCondo);
//
// == properties
// var myCondo = { address: "1400 U St." };
// var myCondo = {
//     address: "1400 U St."
// };
// console.log("myCondo.address:", myCondo.address);
//
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: ["livingRoom", "kitchen", "bedroom", "bathroom"]
// };
//
// == methods
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: ["livingRoom", "kitchen", "bedroom", "bathroom"],
//     initialize: function() {
//         console.log("== initialize ==");
//     }
// };
//
// == calling initialize
// myCondo.initialize();

// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======

var defaultCondo = {
    address: null,
    floor: 0,
    unit: null,
    rooms: [],
}

var borderW = 2 + 2;        // left + right || top + bottom (total 4px)

var defaultRoom = { name:null, X:0, Y:0, W:0, H:0 };

// ======= ======= ======= CONSTRUCTOR ======= ======= =======
// ======= ======= ======= CONSTRUCTOR ======= ======= =======
// ======= ======= ======= CONSTRUCTOR ======= ======= =======

var livingRoom = { name:"livingRoom", X:0, Y:0, W:120, H:180 };
var kitchen = { name:"kitchen", X:(120 + borderW), Y:0, W:120, H:120 };
var bathroom = { name:"bathroom", X:(120 + borderW), Y:(120 + borderW), W:120, H:(60 - borderW) };
var bedroom = { name:"bedroom", X:(120 + 120 + (borderW * 2)), Y:0, W:120, H:180 };

// var condo2B = new Condo (
//     /* address */ "1400 U St.",
//     /* floor */   "2",
//     /* unit */    "2-B",
//     /* rooms */   [livingRoom, kitchen, bathroom, bedroom]
// );
//
// function Condo (address, floor, unit, rooms) {
//     console.log("== Condo ==");
//     this.address = address;
//     this.floor = floor;
//     this.unit = unit;
//     this.rooms = rooms;
// }
//
// console.dir(condo2B);

// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======

// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: [livingRoom, kitchen, bedroom, bathroom],
//     initialize: function() {
//         console.log("== initialize ==");
//     }
// }
// myCondo.initialize();

// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: [livingRoom, kitchen, bedroom, bathroom],
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//     }
// }
// myCondo.initialize();

// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: [livingRoom, kitchen, bedroom, bathroom],
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextRoom = myCondo.rooms[i];
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = nextRoom.name;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//         }
//     }
// }
// myCondo.initialize();

// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: [livingRoom, kitchen, bedroom, bathroom],
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
//         myCondo.nameRooms();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextRoom = myCondo.rooms[i];
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = nextRoom.name;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//         }
//     },
//     nameRooms: function() {
//         console.log("== nameRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextName, nextRoomEl, nextNameEl;
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextName = myCondo.rooms[i].name;
//             nextRoomEl = document.getElementById(nextName);
//             nextNameEl = document.createElement("p");
//             nextNameEl.innerHTML = nextName;
//             nextNameEl.className = "room-label";
//             nextRoomEl.appendChild(nextNameEl);
//         }
//     }
// };
// myCondo.initialize();

// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: [livingRoom, kitchen, bedroom, bathroom],
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
//         myCondo.nameRooms();
//         myCondo.sizeRooms();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextRoom = myCondo.rooms[i];
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = nextRoom.name;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//         }
//     },
//     nameRooms: function() {
//         console.log("== nameRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextName, nextRoomEl, nextNameEl;
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextName = myCondo.rooms[i].name;
//             nextRoomEl = document.getElementById(nextName);
//             nextNameEl = document.createElement("p");
//             nextNameEl.innerHTML = nextName;
//             nextNameEl.className = "room-label";
//             nextRoomEl.appendChild(nextNameEl);
//         }
//     },
//     sizeRooms: function() {
//         console.log("== sizeRooms ==");
//         var nextName, nextRoomEl, nextXYWH, nextStyles;
//
//         // == set width and height of divs and position within condo div
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextName = myCondo.rooms[i].name;
//             nextRoomEl = document.getElementById(nextName);
//             nextXYWH = myCondo.roomSizes[nextName];
//             nextStyles = "position:absolute; ";
//             nextStyles += "left:" + nextXYWH.X + "px; top:" + nextXYWH.Y + "px; ";
//             nextStyles += "width:" + nextXYWH.W + "px; height:" + nextXYWH.H + "px";
//             nextRoomEl.setAttribute("style", nextStyles);
//
//             // == make room size labels
//             nextSizeEl = document.createElement("p");
//             nextSizeEl.innerHTML = nextXYWH.W + " x " + nextXYWH.H;
//             nextSizeEl.className = "size-label";
//             nextRoomEl.appendChild(nextSizeEl);
//         }
//     }
// };
// myCondo.initialize();

// var livingRoom = { name:"livingRoom", X:0, Y:0, W:120, H:180 };
// var kitchen = { name:"kitchen", X:(120 + borderW), Y:0, W:120, H:120 };
// var bathroom = { name:"bathroom", X:(120 + borderW), Y:(120 + borderW), W:120, H:(60 - borderW) };
// var bedroom = { name:"bedroom", X:(120 + 120 + (borderW * 2)), Y:0, W:120, H:180 };


// ======= ======= ======= YOU DO ======= ======= =======
// ======= ======= ======= YOU DO ======= ======= =======
// ======= ======= ======= YOU DO ======= ======= =======

// ======= ======= ======= ADD ROOM NAMES ======= ======= =======

// == create new function that adds a room name to each room
    // declare variable to hold <p> element html string:
    // set value of p element html string within : "<p>" + nextRoom + "</p>"
    // append <p> element to each room div

// var rooms_1 = ["livingRoom", "kitchen", "bedroom", "bathroom"];
//
// // ======= myCondo =======
// var myCondo = {
//     rooms: rooms_1,
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextRoomEl;
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextRoom = myCondo.rooms[i];
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = nextRoom;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//             console.log("nextRoomEl:", nextRoomEl);
//         }
//     },
//     nameRooms: function() {
//         console.log("== nameRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoom, nextName, nextRoomEl, nextNameEl;
//         for (var i = 0; i < myCondo.rooms.length; i++) {
//             nextName = myCondo.rooms[i];
//             nextRoomEl = document.getElementById(nextName);
//             nextNameEl = document.createElement("p");
//             nextNameEl.innerHTML = nextName;
//             nextNameEl.className = "room-label";
//             nextRoomEl.appendChild(nextNameEl);
//         }
//     }
// };
// myCondo.makeRooms();
// myCondo.nameRooms();

// ======= ======= ======= set size and location of each room ======= ======= =======

// draw wireframe with width and height of each room div in pixels
// add or subtract width of border on surrounding rooms to fit properly
// create room sizes object with livingRoom, kitchen, bedroom and bathroom properties
// set values for X, Y, W, H properties of each room

// other concepts:
// initialize, setting styles, dot.syntax, bracket[syntax]

// ======= default properties =======
var borderW = 4;
var rooms = {
    livingRoom: { name:"Living Room", X:0, Y:0, W:120, H:180 },
    kitchen: { name:"Kitchen", X:(120 + borderW), Y:0, W:120, H:120 },
    bathroom: { name:"Bedroom", X:(120 + borderW), Y:(120 + borderW), W:120, H:(60 - borderW) },
    bedroom: { name:"Bathroom", X:(120 + 120 + (borderW * 2)), Y:0, W:120, H:180 }
}

// ======= myCondo =======
var myCondo = {
    rooms: rooms,
    roomKeys: Object.keys(this.rooms),
    initialize: function() {
        console.log("== initialize ==");
        myCondo.makeRooms();
        myCondo.nameRooms();
        myCondo.sizeRooms();
        myCondo.customize();
    },
    makeRooms: function() {
        console.log("== makeRooms ==");
        var condoEl = document.getElementById('condo');
        var nextRoomEl;

        // == create div elements (with id, class); append to condo
        $.each(myCondo.rooms, function(key, roomObj) {
            nextRoomEl = document.createElement("div");
            nextRoomEl.id = key;
            nextRoomEl.className = "room";
            condoEl.appendChild(nextRoomEl);
        });
    },
    nameRooms: function() {
        console.log("== nameRooms ==");
        var condoEl = document.getElementById('condo');
        var nextName, nextRoomEl, nextNameEl;

        // == create label (p) elements (with class); append to room div
        $.each(myCondo.rooms, function(key, roomObj) {
            nextName = roomObj.name;
            nextRoomEl = document.getElementById(key);
            nextNameEl = document.createElement("p");
            nextNameEl.innerHTML = nextName;
            nextNameEl.className = "room-label";
            nextRoomEl.appendChild(nextNameEl);
        });
    },
    sizeRooms: function() {
        console.log("== sizeRooms ==");
        var nextRoomEl, nextStyles;

        // == set width and height of divs and position within condo div
        $.each(myCondo.rooms, function(key, roomObj) {
            nextRoomEl = document.getElementById(key);
            nextStyles = "position:absolute; ";
            nextStyles += "left:" + roomObj.X + "px; top:" + roomObj.Y + "px; ";
            nextStyles += "width:" + roomObj.W + "px; height:" + roomObj.H + "px";
            nextRoomEl.setAttribute("style", nextStyles);

            // == make room size labels
            nextSizeEl = document.createElement("p");
            nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
            nextSizeEl.className = "size-label";
            nextRoomEl.appendChild(nextSizeEl);
        });
    },
    customize: function() {
        console.log("== customize ==");
        var condoW = $('#condo').width();
        var condoH = $('#condo').height();
        console.log("condoW: ", condoW);
        console.log("condoH: ", condoH);
    }
};

myCondo.initialize();
