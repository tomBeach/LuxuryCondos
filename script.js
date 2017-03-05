
var condo2B = { name:"Unit 2-B", X:0, Y:0, W:36, H:18 };
var rooms = {
    livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { name:"Kitchen", X:12, Y:0, W:12, H:12 },
    bathroom: { name:"Bathroom", X:12, Y:12, W:12, H:6 },
    bedroom: { name:"Bedroom", X:24, Y:0, W:12, H:18 }
}
console.dir(rooms);


// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// // == project
//    workshop goals:
//    • basic object syntax/usage for SPA
//    • programmatic/dynamic DOM manipulation (vs html/css only)
//    • add customization options (developing a layout algorith, user selection interface)
//    MVP goal: dynamically build condo floorplan via divs, styles, XYWH values
//    approach: hard-wired design (MVP version) then layout/algorith discussion
//
// // == concepts and tools
//     jquery vs javascript
//     page mark-up (interaction with DOM)
//     logical programatic flow (separation of concerns)
//     hard-wired vs customized (developing an algorithm)
//
// // == syntax heads-up
//     special characters -- (), [], {}, ",", ";", ":"

// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======

// // == single page app inside single object
// myCondo = {};
//
// // == properties (key:value pairs, horizontal/vertical syntax)
// var myCondo = { address: "1400 U St." };
// var myCondo = {
//     address: "1400 U St."
// };
//
// // == accessing properties (dot syntax)
// console.log("myCondo.address:", myCondo.address);

// ======= ======= ======= PROPERTIES ======= ======= =======
// ======= ======= ======= PROPERTIES ======= ======= =======
// ======= ======= ======= PROPERTIES ======= ======= =======

// // == multiple properties
// //    variable types: numbers, string, arrays, other objects
// //    syntax errors: equals vs colons, commas vs semi-colons
// var myCondo = {
//     floor: 2,
//     unit: "2-B",
//     address: "1400 U St.",
//     rooms: ["livingRoom", "kitchen", "bedroom", "bathroom"]
// };
// console.log("myCondo.rooms:", myCondo.rooms);

// ======= ======= ======= METHODS ======= ======= =======
// ======= ======= ======= METHODS ======= ======= =======
// ======= ======= ======= METHODS ======= ======= =======

// // == methods
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
// // == calling initialize (ruby Class#new vs javascript)
// //    http://stackoverflow.com/questions/16245315/does-ruby-call-initialize-method-automatically
// myCondo.initialize();

// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======

// // == default property benefits/purpose
// //    creates struture for data
// //    analogous to seeding a database
// //
// // ======= condo properties =======
// //    property: (e.g. "livingRoom") used for references, element id values
// //    name: (e.g. "Living Room") allows user-friendly display
// //    XYWH: coordinate access to location and size
// //    units: feet (must be converted to pixels for display)
//
// var condo2B = { name:"Unit 2-B", X:0, Y:0, W:36, H:18 };
// var rooms = {
//     livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
// console.dir(rooms);

// ======= ======= ======= MAKE DIVS ======= ======= =======
// ======= ======= ======= MAKE DIVS ======= ======= =======
// ======= ======= ======= MAKE DIVS ======= ======= =======

// // ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,                                           // add default objects to app object
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();                                // "myCondo" vs "this"
//         console.log("this: ", this);                        // reference to the instance "myCondo"
//         console.log("myCondo: ", myCondo);
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');     // parent element for rooms
//         var nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         $.each(myCondo.rooms, function(key, roomObj) {      // best way to "loop" thru object
//             console.log("key: ", key);                      // extraced for element id naming
//             console.log("roomObj: ", roomObj);              // complete "sub-objects" contained in rooms property
//             nextRoomEl = document.createElement("div");     // document.createElement is the fastest method
//             nextRoomEl.id = key;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);                // add new div to parent
//         });
//     }
// }
// myCondo.initialize();

// ======= ======= ======= ADD LABELS ======= ======= =======
// ======= ======= ======= ADD LABELS ======= ======= =======
// ======= ======= ======= ADD LABELS ======= ======= =======

// ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
//         myCondo.nameRooms();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         $.each(myCondo.rooms, function(key, roomObj) {
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = key;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//         });
//     },
//     nameRooms: function() {
//         console.log("== nameRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextName, nextRoomEl, nextNameEl;
//
//         // == create label (p) elements (with class); append to room div
//         $.each(myCondo.rooms, function(key, roomObj) {
//             nextName = roomObj.name;                        // reader-friendly version of name
//             nextRoomEl = document.getElementById(key);      // get element created by previous method
//             nextNameEl = document.createElement("p");       // making <p> tags for room name
//             nextNameEl.innerHTML = nextName;
//             nextNameEl.className = "room-label";
//             nextRoomEl.appendChild(nextNameEl);
//         });
//     }
// };
// myCondo.initialize();

// ======= ======= ======= MVP ======= ======= =======
// ======= ======= ======= MVP ======= ======= =======
// ======= ======= ======= MVP ======= ======= =======

// // ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
//         myCondo.nameRooms();
//         myCondo.sizeRooms();
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextRoomEl;
//
//         // == create div elements (with id, class); append to condo
//         $.each(myCondo.rooms, function(key, roomObj) {
//             nextRoomEl = document.createElement("div");
//             nextRoomEl.id = key;
//             nextRoomEl.className = "room";
//             condoEl.appendChild(nextRoomEl);
//         });
//     },
//     nameRooms: function() {
//         console.log("== nameRooms ==");
//         var condoEl = document.getElementById('condo');
//         var nextName, nextRoomEl, nextNameEl;
//
//         // == create label (p) elements (with class); append to room div
//         $.each(myCondo.rooms, function(key, roomObj) {
//             nextName = roomObj.name;
//             nextRoomEl = document.getElementById(key);
//             nextNameEl = document.createElement("p");
//             nextNameEl.innerHTML = nextName;
//             nextNameEl.className = "room-label";
//             nextRoomEl.appendChild(nextNameEl);
//
//             // == make room size labels
//             nextRoomEl = document.getElementById(key);
//             nextSizeEl = document.createElement("p");
//             nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
//             nextSizeEl.className = "size-label";
//             nextRoomEl.appendChild(nextSizeEl);
//         });
//     },
//     sizeRooms: function() {
//         console.log("== sizeRooms ==");
//         var nextRoomEl, nextStyles;
//
//         // == set width and height of divs and position within condo div
//         $.each(myCondo.rooms, function(key, roomObj) {
//
//             // == locate rooms within condo (convert pixels to feet)
//             nextRoomEl = document.getElementById(key);
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
//     }
// };
// myCondo.initialize();

// ======= ======= ======= REFACTORING ======= ======= =======
// ======= ======= ======= REFACTORING ======= ======= =======
// ======= ======= ======= REFACTORING ======= ======= =======

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
