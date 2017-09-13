// ======= activateUserActions =======
activateUserActions: function() {
    console.log("== activateUserActions ==");
    var selRoom = document.getElementById("selRoom");
    selRoom.addEventListener("change", myCondo.setSelectedRoom);
    var hoverRoomBox = document.getElementById("condo");
    console.log("hoverRoomBox:", hoverRoomBox);
    var hoverRoomNodes = hoverRoomBox.childNodes;
    console.log("hoverRoomNodes:", hoverRoomNodes);
    for (var i = 0; i < hoverRoomNodes.length; i++) {
        console.log("hoverRoomNodes[i]:", hoverRoomNodes[i]);
        hoverRoomNodes[i].addEventListener("click", myCondo.displayRoomName);
        hoverRoomNodes[i].addEventListener("mouseover", myCondo.displayRoomName);
        hoverRoomNodes[i].addEventListener("mouseout", myCondo.clearRoomName);
    }
},
displayRoomName: function(e) {
    console.log("== displayRoomName ==");
    console.log("e.currentTarget:", e.currentTarget);
    var infoDisplay = document.getElementById("toolTips");
    infoDisplay.innerText = e.currentTarget.id;
},
clearRoomName: function(e) {
    console.log("== clearRoomName ==");
    var infoDisplay = document.getElementById("toolTips");
    infoDisplay.innerText = "";
},
