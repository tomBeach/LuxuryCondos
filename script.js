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
