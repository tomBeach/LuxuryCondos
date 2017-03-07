

roomKeys: Object.keys(this.rooms),      // extract object keys for use in id generation


var whichCondo = { W:36, H:18 };
var borderW = 4/10;
var rooms = {
    livingRoom: { name:"Living Room", X:0, Y:0, W:12, H:18 },
    kitchen: { name:"Kitchen", X:(12 + borderW), Y:0, W:12, H:12 },
    bathroom: { name:"Bathroom", X:(12 + borderW), Y:(12 + borderW), W:12, H:(6 - borderW) },
    bedroom: { name:"Bedroom", X:(12 + 12 + (borderW * 2)), Y:0, W:12, H:18 }
}

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
    $('#roomBtn').on('click', myCondo.saveRoom);
},
setSizeParams: function(whichCondo) {
    console.log("== setSizeParams ==");
    var roomSizes = {
        livingRoom: { maxW:whichCondo.W/2, minW:whichCondo.W/3, maxH:whichCondo.H, minH:whichCondo.H*2/3 },
        kitchen: {  maxW:whichCondo.W/3, minW:whichCondo.W/3, maxH:whichCondo.H/2, minH:whichCondo.H/3 },
        bathroom: { maxW:whichCondo.W/3, minW:whichCondo.W/3, maxH:whichCondo.H/3, minH:whichCondo.H/3 },
        bedroom: { maxW:whichCondo.W/2, minW:whichCondo.W/3, maxH:whichCondo.H*2/3, minH:whichCondo.H/2 }
    }
    console.dir(roomSizes);
},
validateRoom: function(room, roomW, roomH) {
    console.log("== validateRoom ==");
    console.log("room: ", room);
    var condoW = $('#condo').width();
    var condoH = $('#condo').height();
    switch(room) {
        case "livingRoom":
        if (nextXYWH.W > LRmaxW) {
            nextXYWH.W = LRmaxW
        } else if (nextXYWH.W < LRminW) {
            nextXYWH.W = LRminW
        }
        if (nextXYWH.H > LRmaxH) {
            nextXYWH.H = LRmaxH
        } else if (nextXYWH.H < LRminH) {
            nextXYWH.H = LRminH
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
