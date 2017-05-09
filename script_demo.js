

// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// == project
//    workshop goals:
//    • basic object syntax/usage for SPA
//    • programmatic/dynamic DOM manipulation (vs html/css only)
//    • add customization options (developing a layout algorithm, user selection interface)
//    MVP goal: dynamically build condo floorplan via divs, styles, XYWH values
//    upgrade goal: draggable/rotatable elements ("furniture")
//    approach: hard-wired design (MVP version) then layout/algorithm discussion
//
// == setup
//     github: https://github.com/tomBeach?tab=repositories
//     fork-and-clone to local computer, use "customize" branch
//     files: script.js (code-along), script_demo.js (copy-paste)
//     comment/uncomment script tag in index.html file
//
// == concepts and tools
//     loops
//     logic
//     DOM (document object model): query selectors, divs, forms, styles
//     events (user/computer actions)
//     jquery vs javascript
//     plugins/widgets vs roll-your-own
//     page mark-up (interaction with DOM)
//     logical programatic flow (separation of concerns)
//     hard-wired vs customized (developing an algorithm)
//
// == syntax heads-up
//     special characters -- ()  []  {}  ","  ";"  ":"

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

// == multiple properties
   // variable types: numbers, string, arrays, other objects
   // syntax errors: equals vs colons, commas vs semi-colons
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
// // == calling initialize (ruby Class#new vs javascript)
// //    http://stackoverflow.com/questions/16245315/does-ruby-call-initialize-method-automatically
// myCondo.initialize();

// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======

// == default property benefits/purpose
//    creates structure for data
//    analogous to seeding a database
//
// ======= condo properties =======
//    property: (e.g. "livingRoom") used for references, element id values
//    name: (e.g. "Living Room") allows user-friendly display
//    XYWH: coordinate access to location and size
//    units: feet (must be converted to pixels for display)
//
// ======= default objects =======
var condo2B = { name:"Unit 2-B", X:0, Y:0, W:36, H:18 };
var rooms = {
    livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { name:"Kitchen", X:12, Y:0, W:12, H:12 },
    bathroom: { name:"Bathroom", X:12, Y:12, W:12, H:6 },
    bedroom: { name:"Bedroom", X:24, Y:0, W:12, H:18 }
}
console.dir(rooms);

// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======

// ======= for loop =======
// function forLoop(array) {
//     console.log("== forLoop ==");
//     for (var i = 0; i<array.length; i++) {
//         var nextItem = array[i];
//         console.log("nextItem: ", nextItem);
//     }
// }
// var loopArray = ["Joe", "Jon", "Jim", "Jill", "Jane"];
// forLoop(loopArray);
//
// // ======= each =======
// function eachLoop(object) {
//     console.log("== eachLoop ==");
//     $.each(object, function(key, value) {           // best way to "loop" thru object
//         console.log("key/value: ", key, value);     // name and value of each object property
//     });
// }
// var loopObject = { name:"Tom", email:"teb@gmail.com", cat:"Sebastian"};
// eachLoop(loopObject);
//
// // ======= while loop =======
// function whileLoop(loopLimit) {
//     console.log("== whileLoop ==");
//     console.log("loopLimit: ", loopLimit);
//     var x = 0;
//     var counter = 0;
//     while (x < loopLimit) {
//         counter++;
//         x = x + 2;
//         console.log("counter/x: ", counter, x);
//     }
//     return x;
// }
// var loopX = whileLoop(10);
// console.log("loopX: ", loopX);

// ======= myCondo =======
var myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    rooms: rooms,                                           // add default objects to app object
    roomsArray: [],
    initialize: function() {
        console.log("== initialize ==");
        myCondo.makeRooms();                                // "myCondo" vs "this"
        myCondo.listRooms();
    },
    makeRooms: function() {
        console.log("== makeRooms ==");
        var condoEl = document.getElementById('condo');     // parent element for rooms
        var nextRoomEl;

        // == create div elements (with id, class); append to condo
        $.each(myCondo.rooms, function(key, roomObj) {      // best way to "loop" thru object
            console.log("key/roomObj: ", key, roomObj);              // complete "sub-objects" contained in rooms property
            nextRoomEl = document.createElement("div");     // document.createElement is the fastest method
            nextRoomEl.id = key;
            nextRoomEl.className = "room";
            condoEl.appendChild(nextRoomEl);                // add new div to parent
            myCondo.roomsArray.push(key);
        });
    },
    listRooms: function() {
        console.log("== listRooms ==");
        for (var i = 0; i<myCondo.roomsArray.length; i++) {
            var nextRoom = myCondo.roomsArray[i];
            console.log("nextRoom: ", nextRoom);
        }
    }
}
myCondo.initialize();

// ======= ======= ======= MAKE DIVS ======= ======= =======
// ======= ======= ======= MAKE DIVS ======= ======= =======
// ======= ======= ======= MAKE DIVS ======= ======= =======

// ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,                                           // add default objects to app object
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();                                // "myCondo" vs "this"
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

// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======


// ======= ======= ======= FORMS ======= ======= =======
// ======= ======= ======= FORMS ======= ======= =======
// ======= ======= ======= FORMS ======= ======= =======


// ======= ======= ======= DIV CONTENT ======= ======= =======
// ======= ======= ======= DIV CONTENT ======= ======= =======
// ======= ======= ======= DIV CONTENT ======= ======= =======


// ======= ======= ======= STYLE CHANGES ======= ======= =======
// ======= ======= ======= STYLE CHANGES ======= ======= =======
// ======= ======= ======= STYLE CHANGES ======= ======= =======


// ======= ======= ======= QUERY SELECTORS ======= ======= =======
// ======= ======= ======= QUERY SELECTORS ======= ======= =======
// ======= ======= ======= QUERY SELECTORS ======= ======= =======


// ======= ======= ======= EVENTS ======= ======= =======
// ======= ======= ======= EVENTS ======= ======= =======
// ======= ======= ======= EVENTS ======= ======= =======














// ======= ======= ======= ADD LABELS ======= ======= =======
// ======= ======= ======= ADD LABELS ======= ======= =======
// ======= ======= ======= ADD LABELS ======= ======= =======

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
//             nextStyles = "position:absolute; ";          // note semi-colon syntax
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

// // ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();
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
//     }
// };
// myCondo.initialize();

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
// var rooms = {
//     livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
// console.dir(draggers);
// console.dir(rooms);
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

// ======= ======= ======= CUSTOMIZE ======= ======= =======
// ======= ======= ======= CUSTOMIZE ======= ======= =======
// ======= ======= ======= CUSTOMIZE ======= ======= =======

// draggers = {
//     chair1: { id:"chair1", name:"Chair", class:"chair", el:null,
//         msX:0, msY:0, moX:0, moY:0, X:0, Y:0, W:30, H:35 },
//     couch1: { id:"couch1", name:"Sofa", class:"couch", el:null,
//         msX:0, msY:0, moX:0, moY:0, X:20, Y:20, W:60, H:30 }
// };
// var rooms = {
//     livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
// console.dir(draggers);
// console.dir(rooms);
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
//         myCondo.activateForm();
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
//         // == set start positions (draggerXY, mouseXY, mouse offsetXY)
//         myCondo.activeDragger.X = $(myCondo.activeDragger.el).position().left;
//         myCondo.activeDragger.Y = $(myCondo.activeDragger.el).position().top;
//         myCondo.activeDragger.msX = e.clientX;
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
//         // == change in mouse loc from start
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
//         if (matrix !== 'none') {
//             var values = matrix.split('(')[1].split(')')[0].split(',');
//             var a = values[0];
//             var b = values[1];
//             var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
//         } else {
//             var angle = 0;
//         }
//         return (angle < 0) ? angle + 360 : angle;
//     },
//
//     // ======= ======= ======= customize functions ======= ======= =======
//     activateForm: function() {
//         console.log("== activateForm ==");
//         $('#roomBtn').on('click', myCondo.saveRoom);
//     },
//     saveRoom: function(e) {
//         console.log("== saveRoom ==");
//         var room = $('#room').find(":selected").val();
//         var roomN = $('#room').find(":selected").text();
//         var roomW = $('#width').val();
//         var roomH = $('#height').val();
//         console.log("room: ", room);
//         myCondo.customRooms[room] = { name:roomN, X:0, Y:0, W:roomW, H:roomH };
//         var tableRow = "<tr><td>" + roomN + "</td><td>" + roomW + "</td><td>" + roomH + "</td><td></td></tr>"
//         var table = $('#roomsTable').append(tableRow);
//         if ((room == "livingRoom") || (room == "kitchen")) {
//             $("#room option[value='" + room + "']").remove();
//         }
//         console.dir(myCondo);
//     }
// };
// myCondo.initialize();
