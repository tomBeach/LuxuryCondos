
// ======= ======= ======= MVP ======= ======= =======
// ======= ======= ======= MVP ======= ======= =======
// ======= ======= ======= MVP ======= ======= =======

var myRooms = {
    livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { name:"Kitchen", X:12, Y:0, W:12, H:12 },
    bathroom: { name:"Bathroom", X:12, Y:12, W:12, H:6 },
    bedroom: { name:"Bedroom", X:24, Y:0, W:12, H:18 }
}
console.dir(rooms);

// ======= myCondo =======
var myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    rooms: myRooms,
    initialize: function() {
        console.log("== initialize ==");
        myCondo.makeRooms();
        myCondo.nameRooms();
        myCondo.sizeRooms();
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

            // == make room size labels
            nextRoomEl = document.getElementById(key);
            nextSizeEl = document.createElement("p");
            nextSizeEl.innerHTML = roomObj.W + " x " + roomObj.H;
            nextSizeEl.className = "size-label";
            nextRoomEl.appendChild(nextSizeEl);
        });
    },
    sizeRooms: function() {
        console.log("== sizeRooms ==");
        var nextRoomEl, nextStyles;

        // == set width and height of divs and position within condo div
        $.each(myCondo.rooms, function(key, roomObj) {

            // == locate rooms within condo (convert pixels to feet)
            nextRoomEl = document.getElementById(key);
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
