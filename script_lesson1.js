

// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// // == Luxury Condos!!!
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

// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======

// // == single page app inside single object
// myCondo = {};               // automatically global scope (global variable)
// var myCondo = {};           // var keyword: scope depends on context (could be local variable)
//
// // == properties (key:value pairs, horizontal/vertical syntax)
// var myCondo = { address: "1400 U St." };
// var myCondo = {
//     address: "1400 U St."
// };
//
// // == accessing properties (dot syntax)
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
// console.log("myCondo.rooms:", myCondo.rooms);

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
//    XYWH: coordinate access to location and size (Xcoordinate, Ycoordinate, width, height)
//    units: feet (must be converted to pixels for display)
//
// ======= default objects =======
// var condo2B = { name:"Unit 2-B", X:0, Y:0, W:36, H:18 };
// var rooms = {
//     livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
// == console.dir: print the entire object to console
// console.dir(rooms);

// // == dot syntax
// console.log("rooms:", rooms);
// console.log("rooms.livingRoom:", rooms.livingRoom);
// console.log("rooms.livingRoom.name:", rooms.livingRoom.name);
// console.log("rooms.livingRoom.W:", rooms.livingRoom.W);

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
//         console.log("== initialize ==");        // classroom convention: print function name
//     }
// };
//
// // == calling initialize (ruby Class#new vs javascript)
// //    http://stackoverflow.com/questions/16245315/does-ruby-call-initialize-method-automatically
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
// myCondo.initialize();







                                    // BREAK BREAK BREAK BREAK BREAK BREAK BREAK







// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======

// // ======= object method =======
// var myCondo = {
//     initialize: function(value) {
//         console.log("== initialize ==");
//         console.log("value: ", value);
//     }
// }
// var myVariable = "objectMethod";
// myCondo.initialize(myVariable);
//
// // ======= printThisValue =======               // class convention: comment function start
// function printThisValue(value) {
//     console.log("== printThisValue ==");        // class convention: log function name
//     console.log("value: ", value);              // class convention: label/print arguments and variables
// }
// var myVariable = "regularFunction";
// printThisValue(myVariable);


// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======

// // ======= for loop =======
// function forLoopFunction(array) {
//     console.log("== forLoopFunction ==");
//     for (var i = 0; i < array.length; i++) {
//         var nextItem = array[i];
//         console.log("nextItem: ", nextItem);
//     }
// }
// var loopArray = ["Joe", "Jon", "Jim", "Jill", "Jane"];
// forLoopFunction(loopArray);
//
// // ======= each =======
// function eachLoopFunction(object) {
//     console.log("== eachLoopFunction ==");
//     $.each(object, function(key, value) {               // $ = jquery library ($.each: best way to "loop" thru object)
//         console.log("key/value:", key, value);          // name and value of each object property
//         // console.log("key:", key, " value:", value);     // alternative display format
//     });
// }
// var loopObject = {
//     name:"Tom",
//     email:"teb@gmail.com",
//     cat:"Sebastian"};
// eachLoopFunction(loopObject);
//
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

// // ======= default rooms collection =======
// var myRooms = {
//     livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
//
// // ======= myCondo =======
// var myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: myRooms,                                           // add default objects to app object
//     initialize: function() {
//         console.log("== initialize ==");
//     }
// }
// myCondo.initialize();


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
