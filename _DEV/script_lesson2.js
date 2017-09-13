
// ======= ======= ======= DRAGGERS ======= ======= =======
// ======= ======= ======= DRAGGERS ======= ======= =======
// ======= ======= ======= DRAGGERS ======= ======= =======


// ======= default objects =======
var rooms = {
    livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
    bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
    bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
}
console.dir(rooms);

draggers = {
    chair1: { id:"chair1", name:"Chair", class:"chair", el:null,
        msX:0, msY:0, moX:0, moY:0, X:0, Y:0, W:30, H:35 },
    couch1: { id:"couch1", name:"Sofa", class:"couch", el:null,
        msX:0, msY:0, moX:0, moY:0, X:20, Y:20, W:60, H:30 }
};
console.dir(draggers);

// ======= myCondo =======
var myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    rooms: rooms,
    condoBox: {},                            // new property for drag limits
    draggers: draggers,                      // make draggers part of object
    customRooms: {},                         // store user-designed room data
    activeDragger: null,                     // store currently active dragger
    initialize: function() {
        console.log("== initialize ==");
        myCondo.condoBox.L = $('#condo').offset().left;
        myCondo.condoBox.T = $('#condo').offset().top;
        myCondo.condoBox.W = $('#condo').width();
        myCondo.condoBox.H = $('#condo').height();
        $(window).on('mousemove', myCondo.mouseLoc)
        myCondo.makeRooms();
        myCondo.activateUserActions();
    },
    makeRooms: function() {
        console.log("== makeRooms ==");
        var condoEl = document.getElementById('condo');
        var nextRoomEl, nextStyles;

        // == convert feet to pixels for positioning
        function conversion(feet) {
            // console.log("== conversion ==");
            var pixels = feet * 10;
            return pixels;
        }

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
            nextSizeEl = document.createElement("p");
            nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
            nextSizeEl.className = "size-label";
            nextRoomEl.appendChild(nextSizeEl);

            // == add size and position styles to divs
            var pixelsW = conversion(roomObj.W);
            var pixelsH = conversion(roomObj.H);
            var pixelsX = conversion(roomObj.X);
            var pixelsY = conversion(roomObj.Y);
            nextStyles = "position:absolute; ";
            nextStyles += "left:" + pixelsX + "px; top:" + pixelsY + "px; ";
            nextStyles += "width:" + pixelsW + "px; height:" + pixelsH + "px; ";
            nextRoomEl.setAttribute("style", nextStyles);

        });
    },
    activateUserActions: function() {
        console.log("== activateUserActions ==");
        var selRoom = document.getElementById("selRoom");
        selRoom.addEventListener("change", myCondo.setSelectedRoom);
        var roomContainer = document.getElementById("condo");
        var roomDivs = roomContainer.childNodes;
        console.log("roomDivs:", roomDivs);
        for (var i = 0; i < roomDivs.length; i++) {
            var nextRoom = roomDivs[i];
            nextRoom.addEventListener("click", myCondo.showRoomName)
        }
    },
    showRoomName: function(event) {
        console.log("== showRoomName ==");
        var toolTips = document.getElementById("toolTips");
        console.log("event.currentTarget.id:", event.currentTarget.id);
        var roomName = myCondo.rooms[event.currentTarget.id].name;
        console.log("roomName:", roomName);
        toolTips.innerHTML = "<p>" + roomName + "</p>";
    },
    setSelectedRoom: function() {
        console.log("== setSelectedRoom ==");
        var roomN = document.getElementById("roomN");
        var roomW = document.getElementById("roomW");
        var roomH = document.getElementById("roomH");
        // var selectedRoom = $('#selRoom').find(":selected").val();

        var selectedRoomId = document.getElementById("selRoom").value;
        console.log("selectedRoomId:", selectedRoomId);
        var selectedRoomName = myCondo.rooms[selectedRoomId].name;
        console.log("selectedRoomName:", selectedRoomName);
        roomN.value = selectedRoomName;
    }
    // ======= activateClearSelection =======
    // ======= clearSelectedRoom =======
    // ======= setSelectedRoom =======
};
myCondo.initialize();


// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======
// ======= ======= ======= LOGIC ======= ======= =======


    // ======= showRoomData =======
    // ======= if =======
    // ======= if...else =======
    // ======= if...else if...else =======
    // ======= AND: && =======
    // ======= OR: || =======


// ======= ======= ======= SWITCH ======= ======= =======
// ======= ======= ======= SWITCH ======= ======= =======
// ======= ======= ======= SWITCH ======= ======= =======


    // ======= switchSelectedRoom =======


// ======= ======= ======= THIS ======= ======= =======
// ======= ======= ======= THIS ======= ======= =======
// ======= ======= ======= THIS ======= ======= =======


// var myFunction = function () {
//     console.log(this); // this = global, [object Window]
// };
// myFunction();
//
// var myObject = {};
// myObject.myMethod = function () {
//     console.log(this); // this = Object { myObject }
// };
// myObject.myMethod();
//
// var clear = document.getElementById('clearBtn'); // <nav class="nav">
// var toggleClear = function () {
//     console.log(this); // this = <nav> element
// };
//
// clear.addEventListener('click', toggleClear, false);


// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======
// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======
// ======= ======= ======= CONSTRUCTORS & PROTOTYPES ======= ======= =======

// var condo2B = new Condo(
//     /* address: */ "1400 U St.",
//     /* floor:   */ "2",
//     /* unit:    */ "2-B"
// )
// console.log("condo2B:", condo2B);
//
// var condo5A = new Condo(
//     /* address: */ "1400 U St.",
//     /* floor:   */ "5",
//     /* unit:    */ "5-A"
// )
// console.log("condo5A:", condo5A);
//
// // == Condo constructor function
// function Condo(address, floor, unit) {
//     console.log("== Condo ==");
//     this.address = address;
//     this.floor = floor;
//     this.unit = unit;
// }
//
// // == adding methods to the Condo object prototype
// Condo.prototype.rooms = function(whichRooms) {
//     console.log("== rooms ==");
// }
//
// var rooms2B = {
//     livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen:    { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom:   { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom:    { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
// };
// var rooms5A = {
//     openRoom:   { id:"openRoom", name:"Main Room", X:0, Y:0, W:12, H:18 },
//     bathroom:   { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom:    { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
//
// condo2B.rooms(rooms2B);
// condo5A.rooms(rooms5A);
// console.log("condo2B:", condo2B);
// console.log("condo5A:", condo5A);
