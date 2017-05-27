

// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// // == project
//    workshop goals:
//    • basic object syntax/usage for SPA
//    • programmatic/dynamic DOM manipulation (vs html/css only)
//    • goals
//        MVP              dynamically build condo floorplan via divs, styles, XYWH values
//        upgrade          draggable/rotatable elements ("furniture")
//        pie-in-the-sky   add customization options (developing a layout algorithm, user selection interface)
//    • approach: hard-wired design (MVP version) then layout/algorithm discussion
//
// // == setup
//     github: https://github.com/tomBeach?tab=repositories
//     fork-and-clone to local computer, use "customize" branch
//     files: script.js (code-along), script_demo.js (copy-paste)
//     comment/uncomment script tag in index.html file
//
// // == concepts and tools
//     jquery vs javascript
//     plugins/widgets vs roll-your-own
//     page mark-up (interaction with DOM)
//     logical programatic flow (separation of concerns)
//     hard-wired vs customized (developing an algorithm)
//
// // == syntax heads-up
    // special characters -- (), [], {}, ",", ";", ":"

// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======

// // == single page app inside single object
// myCondo = {};
//
// // == var keyword (declares a variable)
// var myCondo = {};
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
// data (property) types:   numbers, strings, arrays, other objects
// syntax errors:           equals vs colons, commas vs semi-colons
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
//    creates struture for data
//    analogous to seeding a database
//
// ======= condo properties =======
//    property: (e.g. "livingRoom") used for references, element id values
//    name: (e.g. "Living Room") allows user-friendly display
//    XYWH: coordinate access to location and size
//    units: feet (must be converted to pixels for display)
//
// var condo_default = { name:null, X:0, Y:0, W:0, H:0 };
// var rooms_default = {
//     livingRoom: { name:"Living Room", X:0, Y:0, W:0, H:0 },
//     kitchen: { name:"Kitchen", X:0, Y:0, W:0, H:0 },
//     bathroom: { name:"Bathroom", X:0, Y:0, W:0, H:0 },
//     bedroom: { name:"Bedroom", X:0, Y:0, W:0, H:0 }
// }
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
