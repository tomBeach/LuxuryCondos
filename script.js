// ======= default properties =======
var borderW = 4;
var rooms = {
    livingRoom: { name:"Living Room", X:0, Y:0, W:120, H:180 },
    kitchen: { name:"Kitchen", X:(120 + borderW), Y:0, W:120, H:120 },
    bathroom: { name:"Bathroom", X:(120 + borderW), Y:(120 + borderW), W:120, H:(60 - borderW) },
    bedroom: { name:"Bedroom", X:(120 + 120 + (borderW * 2)), Y:0, W:120, H:180 }
}

// ======= myCondo =======
var myCondo = {
    rooms: rooms,
    roomKeys: Object.keys(this.rooms),
    customRooms: {},
    initialize: function() {
        console.log("== initialize ==");
        myCondo.makeRooms();
        myCondo.nameRooms();
        myCondo.sizeRooms();
        myCondo.activateForm();
    },
    validateRoom: function(room, roomW, roomH) {
        console.log("== validateRoom ==");
        console.log("room: ", room);
        var condoW = $('#condo').width();
        var condoH = $('#condo').height();
        switch(room) {
            case "livingRoom":
            if (roomW > (condoW/10)/2) {
                roomW = (condoW/10)/2
            }
            if (roomH > (condoH/10)) {
                roomH = (condoH/10)
            }
            $("#room option[value='livingRoom']").remove();
            break;
            case "kitchen":
            if (roomW > (condoW/10)/3) {
                roomW = (condoW/10)/3
            }
            if (roomH > (condoH/10)/2) {
                roomH = (condoH/10)/2
            }
            break;
            default:
            // code block
        }
        console.log("roomW: ", roomW);
        var tableRow = "<tr><td>" + room + "</td><td>" + roomW + "</td><td>" + roomH + "</td><td></td></tr>"
        var table = $('#roomsTable').append(tableRow);
        return [room, roomW, roomH];
    },
    saveRoom: function(e) {
        console.log("== saveRoom ==");
        var room = $('#room').find(":selected").text();
        var roomW = $('#width').val();
        var roomH = $('#height').val();
        var validRoom = myCondo.validateRoom(room, roomW, roomH);
        myCondo.customRooms[room] = { name:room, X:0, Y:0, W:roomW, H:roomH };
    },
    activateForm: function() {
        console.log("== activateForm ==");
        $('#saveBtn').on('click', myCondo.saveRoom);
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

            // == make room size labels (convert pixels to feet)
            nextSizeEl = document.createElement("p");
            nextSizeEl.innerHTML = parseInt(roomObj.W)/10 + " x " + parseInt(roomObj.H)/10;
            nextSizeEl.className = "size-label";
            nextRoomEl.appendChild(nextSizeEl);
        });
    }
};

myCondo.initialize();
