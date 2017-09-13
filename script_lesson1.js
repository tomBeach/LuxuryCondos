

// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// == Luxury Condos!!!
//    lesson goals:
//    • basic object syntax/usage for SPA (single page application)
//    • document object model (DOM)
//    • programmatic DOM manipulation (js vs html/css)
//    • minimum viable product (MVP)
//    MVP goal: dynamically build condo floorplan via divs, styles, XYWH values
//    upgrade goal: add draggable elements ("furniture")
//    upgrade goal: add rotation function
//    advanced goals:
//      user selection interface (customization options)
//      developing a layout algorithm
//
// // == programming concepts and tools
//     variables
//     data types
//     arrays
//     objects
//     properties
//     methods
//     loops
//     logic
//     query selectors
//     programmatic elements (e.g. divs)
//     programmatic element styles (css)
//     programmatic reading of form data
//     events (user/computer actions)
//
// // == methodology concepts
//     jquery vs javascript
//          javascript first
//          $.each ($ = jquery)
//          both
//     plugins/widgets vs roll-your-own
//     page mark-up (interaction with DOM)
//     logical programatic flow (separation of concerns)
//
// // == syntax heads-up
//     special characters -- ()  []  {}  ","  ";"  ":"


// ======= ======= ======= CONSOLE ======= ======= =======
// ======= ======= ======= CONSOLE ======= ======= =======
// ======= ======= ======= CONSOLE ======= ======= =======

// x = 2
// => 2
// x = "2"
// => "2"
// x = 2 + 2
// => 4
// x = "2" + "2"
// => "22"
// x = "Jon"
// => "Jon"
//
// name = "Jon"
// name
// => Jon
// Jon
// => ERROR (undefined variable)
// nameArray = ["Jon", "Joe", "Jim"]
// => ["Jon", "Joe", "Jim"]
// nameArray[0]
// => "Jon"
// nameArray[1]
// => "Joe"
// nameArray[2]
// => "Jim"
// myCondo = {}
// => {}
// myCondo = { name: "LuxuryLofts" }
// myCondo.name
// => "LuxuryLofts"

// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======

// // == single page app inside single object
// myCondo = {};               // automatically global scope (global variable)
// var myCondo = {};           // var keyword: scope depends on context (could be local variable)

// == properties (key:value pairs, horizontal/vertical syntax)
// var myCondo = { address: "1400 U St." };
// var myCondo = {
//     address: "1400 U St."
// };

// == accessing properties via dot notation (square bracket notation below)
// console.log("myCondo.address:", myCondo.address);   // print items inside () to console


// ======= ======= ======= PROPERTIES ======= ======= =======
// ======= ======= ======= PROPERTIES ======= ======= =======
// ======= ======= ======= PROPERTIES ======= ======= =======

// == multiple properties
   // variable types: numbers, string, arrays, other objects
   // syntax errors: equals vs colons, commas vs semi-colons
// var myCondo = {
//     floor: 2,                                               // number
//     unit: "2-B",                                            // string
//     address: "1400 U St.",                                  // string
//     rooms: ["livingRoom", "kitchen", "bedroom", "bathroom"] // array
// };
// console.log("myCondo:", myCondo);
// console.log("myCondo.unit:", myCondo.unit);
// console.log("myCondo.rooms:", myCondo.rooms);


// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======


// // == default property concepts
// //    defines structure for data
// //    analogous to seeding a database
// //    arrays vs objects (index vs dot notation vs square bracket notation)
// //
// // ======= condo properties =======
// //    id: (e.g. "livingRoom") used for references, element id values
// //    name: (e.g. "Living Room") allows user-friendly display
// //    XYWH: coordinate access to location and size (Xcoordinate, Ycoordinate, width, height)
// //    units: feet (must be converted to pixels for display)

// ======= default objects =======
// var rooms = {
//     livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
// == console.dir: print the entire object to console
// console.dir(rooms);

// == dot notation
// console.log("rooms:", rooms);
// console.log("rooms.livingRoom:", rooms.livingRoom);
// console.log("...name:", rooms.livingRoom.name);
// console.log("...W:", rooms.livingRoom.W);

// == square bracket notation (specifying via variable)
// console.log("rooms['livingRoom']:", rooms['livingRoom']);
// var selectedRoom = "bathroom";
// console.log("rooms[selectedRoom]:", rooms[selectedRoom]);


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
//         console.log("== initialize ==");        // classroom convention: print function name
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//     }
// };
//
// myCondo.initialize();


// ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: rooms,                                           // add default objects to app object
//     roomsArray: [],
//     initialize: function() {
//         console.log("== initialize ==");
//         myCondo.makeRooms();                                // "myCondo" vs "this"
//     },
//     makeRooms: function() {
//         console.log("== makeRooms ==");
//     }
// }


                    // BREAK BREAK BREAK BREAK BREAK BREAK BREAK


// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======


// ======= object method =======
// var myCondo = {
//     initialize: function(value) {
//         console.log("== initialize ==");
//         console.log("value: ", value);
//     }
// }
// var myVariable = "objectMethod";
// myCondo.initialize(myVariable);
// console.log("myVariable: ", myVariable);
// console.log("value: ", value);

// ======= printThisValue =======               // class convention: comment function start
// function printThisValue(nextVar) {
//     console.log("== printThisValue ==");     // class convention: log function name
//     console.log("nextVar:", nextVar);        // class convention: label/print arguments and variables
// }
//
// var myVariable = "Joe";
// printThisValue(myVariable);


// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======


// // ======= for loop =======
// function forLoopFunction(array) {
//     console.log("== forLoopFunction ==");
//
//     for (var index = 0; index < array.length; index++) {
//         console.log("array[index]:", array[index]);
//     }
// }
//
// var loopArray = ["Joe", "Jon", "Jim", "Jill", "Jane"];
// forLoopFunction(loopArray);

// ======= each =======
// function eachLoopFunction(object) {
//     console.log("== eachLoopFunction ==");
//
//     // ======= jquery =======
//     $.each(object, function(key, value) {
//         console.log("key:", key, " value:", value);
//     });
//
//     // ======= javascript =======
//     for (var key in object) {
//         if (object.hasOwnProperty(key)) {               // excludes "built-in" properties
//             console.log("key/value:", key, object[key]);
//         }
//     }
// }
//
// var loopObject = { name:"Tom", email:"teb@gmail.com", cat:"Sebastian" };
// eachLoopFunction(loopObject);

// // ======= while loop =======
// function whileLoopFunction(loopLimit) {
//     console.log("== whileLoopFunction ==");
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
// var loopX = whileLoopFunction(10);
// console.log("loopX: ", loopX);


// ======= ======= ======= MAKE ROOMS ======= ======= =======
// ======= ======= ======= MAKE ROOMS ======= ======= =======
// ======= ======= ======= MAKE ROOMS ======= ======= =======


// ======= default rooms collection =======
var myRooms = {
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
    rooms: myRooms,                 // add default objects to app object
    initialize: function() {
        console.log("== initialize ==");
        myCondo.makeRooms();
    },
    makeRooms: function() {
        console.log("== makeRooms ==");
        var condoEl = document.getElementById("condo");
        console.log("condoEl:", condoEl);
        $.each(myCondo.rooms, function(room, roomObj) {
            console.log("room/roomObj:", room, roomObj);
            var roomEl = document.createElement("div");
            roomEl.className = "room";
            roomEl.id = roomObj.id;
            console.log("roomEl.id:", roomEl.id);
            condoEl.appendChild(roomEl);
        });
    }


}
myCondo.initialize();


// ======= ======= ======= SIZE ROOMS ======= ======= =======
// ======= ======= ======= SIZE ROOMS ======= ======= =======
// ======= ======= ======= SIZE ROOMS ======= ======= =======


// ======= ======= ======= ADD LABELS ======= ======= =======
// ======= ======= ======= ADD LABELS ======= ======= =======
// ======= ======= ======= ADD LABELS ======= ======= =======


// ======= ======= ======= MVP ======= ======= =======
// ======= ======= ======= MVP ======= ======= =======
// ======= ======= ======= MVP ======= ======= =======


                    // BREAK BREAK BREAK BREAK BREAK BREAK BREAK


// ======= ======= ======= REFACTORING ======= ======= =======
// ======= ======= ======= REFACTORING ======= ======= =======
// ======= ======= ======= REFACTORING ======= ======= =======

                    // students work independently


// ======= ======= ======= EXERCISE ======= ======= =======
// ======= ======= ======= EXERCISE ======= ======= =======
// ======= ======= ======= EXERCISE ======= ======= =======


                    // write javascript that creates roomSelect form


// ======= ======= ======= ======= ======= ======= =======
