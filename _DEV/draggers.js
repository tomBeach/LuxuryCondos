
draggers = {
    chair1: { id:"chair1", name:"Chair", class:"chair", el:null,
        msX:0, msY:0, moX:0, moY:0, X:0, Y:0, W:30, H:35 },
    couch1: { id:"couch1", name:"Sofa", class:"couch", el:null,
        msX:0, msY:0, moX:0, moY:0, X:20, Y:20, W:60, H:30 }
};
console.dir(draggers);

var dragObj = {

    // draggerX, draggerY, mouseX, mouseY, mouseOffsetX, mouseOffsetY
    activeDragger: { X:0, Y:0, msX:0, msY:0, moX:0, moY:0 },
    dragBox: { L:0, T:0, W:0, H:0 },

    // ======= ======= ======= dragger functions ======= ======= =======
    makeDraggers: function() {
        // make dragger elements
        // store selected dragger as activeDragger variable on top level object
    },
    activateDragger: function(draggerId) {
        // add eventlisteners for click and double click
    },
    initDrag: function(e) {
        // set initial values for draggerXY, mouseXYm offsetXY
        // activate mousemove and mouseup listeners on window
    },
    moveItem: function(e) {
        // get change in mouseXY location from start position
        // apply change values to dragger div
    },
    dropItem: function(e) {
        // set new draggerXY values on dragger object (record its new location)
        // remove mousemove and mouseup listeners
    },
    mouseLoc: function(e) {
        // helper (dev only) display of mouseXY location
    },

    // ======= ======= ======= rotation functions ======= ======= =======
    rotateDragger: function(e) {
    },
    getRotationDegrees: function(obj) {
    }
}


var dragObj = {

    // draggerX, draggerY, mouseX, mouseY, mouseOffsetX, mouseOffsetY
    activeDragger: { X:0, Y:0, msX:0, msY:0, moX:0, moY:0 },
    dragBox: { L:0, T:0, W:0, H:0 },

    // ======= ======= ======= dragger functions ======= ======= =======
    makeDraggers: function() {
        console.log("== makeDraggers ==");
        // make dragger elements
        // store selected dragger as activeDragger variable on top level object
    },
    activateDragger: function(draggerId) {
        console.log("== activateDragger ==");
        $('#draggerId').on('mousedown', dragObj.initDrag);
        $('#draggerId').on('dblclick', dragObj.rotateDragger);
    },
    initDrag: function(e) {
        console.log("== initDrag ==");
        e.preventDefault();

        // == set start positions (draggerXY, mouse startXY, mouse offsetXY)
        activeDragger.X = $(activeDragger.el).position().left;
        activeDragger.Y = $(activeDragger.el).position().top;
        activeDragger.msX = e.clientX;      // mouse start
        activeDragger.msY = e.clientY;
        activeDragger.moX = e.clientX - activeDragger.X - dragBox.L;   // mouse offSet
        activeDragger.moY = e.clientY - activeDragger.Y - dragBox.T;

        // == add move and up listeners
        $(window).on('mousemove', dragObj.moveItem)
        $(window).on('mouseup', dragObj.dropItem)
    },
    moveItem: function(e) {
        // console.log("== moveItem ==");

        // == change in mouse loc from start position
        var dX = parseInt(e.clientX - dragObj.activeDragger.msX);
        var dY = parseInt(e.clientY - dragObj.activeDragger.msY);

        // == updated dragger loc
        var draggerX = dragObj.activeDragger.X + dX;
        var draggerY = dragObj.activeDragger.Y + dY;
        var dXY = getMoveBoundaries(draggerX, draggerY);
        $(dragObj.activeDragger.el).css({top: dXY[1] + 'px', left: dXY[0] + 'px'});

        // ======= getMoveBoundaries =======
        function getMoveBoundaries(draggerX, draggerY) {
            // console.log("== getMoveBoundaries== ");
            if ((draggerX + dragObj.dragBox.L) < dragObj.dragBox.L) {
                draggerX = 0;
            }
            if ((draggerX + dragObj.dragBox.L + dragObj.activeDragger.W) > dragObj.dragBox.L + dragObj.dragBox.W) {
                draggerX = dragObj.dragBox.W - dragObj.activeDragger.W;
            }
            if ((draggerY + dragObj.dragBox.T) < dragObj.dragBox.T) {
                draggerY = 0;
            }
            if ((draggerY + dragObj.dragBox.T + dragObj.activeDragger.H) > dragObj.dragBox.T + dragObj.dragBox.H) {
                draggerY = dragObj.dragBox.H - dragObj.activeDragger.H;
            }
            return [draggerX, draggerY];
        }
    },
    dropItem: function(e) {
        console.log("== dropItem ==");
        dragObj.draggers[dragObj.activeDragger.id].X = $(dragObj.activeDragger.el).offset().left;
        dragObj.draggers[dragObj.activeDragger.id].Y = $(dragObj.activeDragger.el).offset().top;
        dragObj.activeDragger = {};
        $(window).off('mousemove', dragObj.moveItem)
        $(window).off('mouseup', dragObj.dropItem)
    },
    mouseLoc: function(e) {
        // console.log("== mouseLoc ==");
        // console.log("...e.clientXY: ", e.clientX, e.clientY);
    },

    // ======= ======= ======= rotation functions ======= ======= =======
    rotateDragger: function(e) {
        console.log("== rotateDragger ==");
        var obj = $('#' + e.currentTarget.id);
        var dragRot = dragObj.getRotationDegrees(obj) + 90;
        $('#' + e.currentTarget.id).css({
            "-moz-transform":"rotate(" + dragRot + "deg)",
            "-webkit-transform":"rotate(" + dragRot + "deg)",
            "-o-transform":"rotate(" + dragRot + "deg)",
            "-ms-transform":"rotate(" + dragRot + "deg)",
            "transform":"rotate(" + dragRot + "deg)"
        });
        if (dragRot == 90) {
            $('#' + e.currentTarget.id).css('box-shadow', '2px -2px 2px #555')
        } else if (dragRot == 180) {
            $('#' + e.currentTarget.id).css('box-shadow', '-2px -2px 2px #555')
        } else if (dragRot == 270) {
            $('#' + e.currentTarget.id).css('box-shadow', '-2px 2px 2px #555')
        } else if (dragRot == 360) {
            $('#' + e.currentTarget.id).css('box-shadow', '2px 2px 2px #555')
        }
    },
    getRotationDegrees: function(obj) {
        console.log("== getRotationDegrees ==");
        // == http://stackoverflow.com/questions/8270612/get-element-moz-transformrotate-value-in-jquery
        var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform")    ||
            obj.css("-ms-transform")     ||
            obj.css("-o-transform")      ||
            obj.css("transform");

        // == calculate rotation process from matrix values
        if (matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else {
            var angle = 0;
        }
        return (angle < 0) ? angle + 360 : angle;
        console.dir(dragObj);
    }
}



// ======= ======= ======= dragger functions ======= ======= =======
makeDraggers: function() {
    console.log("== makeDraggers ==");
    var condoEl = document.getElementById('condo');
    var nextDragEl;

    $.each(myCondo.draggers, function(key, dragObj) {
        nextDragEl = document.createElement("div");
        nextDragEl.id = key;
        nextDragEl.className = "dragger " + dragObj.class;       // class for different items
        nextStyles = "position:absolute; ";
        nextStyles += "left:" + dragObj.X + "px; top:" + dragObj.Y + "px; ";
        nextStyles += "width:" + dragObj.W + "px; height:" + dragObj.H + "px";
        nextDragEl.setAttribute("style", nextStyles);
        condoEl.appendChild(nextDragEl);
        myCondo.activateDragger(key);                            // assign event listeners
    });
},
activateDragger: function(draggerId) {
    console.log("== activateDragger ==");
    $('#' + draggerId).on('mousedown', myCondo.initDrag);
    $('#' + draggerId).on('dblclick', myCondo.rotateDragger);
},
initDrag: function(e) {
    console.log("== initDrag ==");
    e.preventDefault();

    // == set drag object, id and element
    myCondo.activeDragger = myCondo.draggers[e.currentTarget.id];
    myCondo.activeDragger.id = e.currentTarget.id;
    myCondo.activeDragger.el = e.currentTarget;

    // == set start positions (draggerXY, mouse startXY, mouse offsetXY)
    myCondo.activeDragger.X = $(myCondo.activeDragger.el).position().left;
    myCondo.activeDragger.Y = $(myCondo.activeDragger.el).position().top;
    myCondo.activeDragger.msX = e.clientX;      // mouse
    myCondo.activeDragger.msY = e.clientY;
    myCondo.activeDragger.moX = e.clientX - myCondo.activeDragger.X - myCondo.condoBox.L;
    myCondo.activeDragger.moY = e.clientY - myCondo.activeDragger.Y - myCondo.condoBox.T;

    // == add move and up listeners
    $(window).on('mousemove', myCondo.moveItem)
    $(window).on('mouseup', myCondo.dropItem)
},
moveItem: function(e) {
    // console.log("== moveItem ==");

    // == change in mouse loc from start position
    var dX = parseInt(e.clientX - myCondo.activeDragger.msX);
    var dY = parseInt(e.clientY - myCondo.activeDragger.msY);

    // == updated dragger loc
    var draggerX = myCondo.activeDragger.X + dX;
    var draggerY = myCondo.activeDragger.Y + dY;
    var dXY = getMoveBoundaries(draggerX, draggerY);
    $(myCondo.activeDragger.el).css({top: dXY[1] + 'px', left: dXY[0] + 'px'});

    // ======= getMoveBoundaries =======
    function getMoveBoundaries(draggerX, draggerY) {
        // console.log("== getMoveBoundaries== ");
        if ((draggerX + myCondo.condoBox.L) < myCondo.condoBox.L) {
            draggerX = 0;
        }
        if ((draggerX + myCondo.condoBox.L + myCondo.activeDragger.W) > myCondo.condoBox.L + myCondo.condoBox.W) {
            draggerX = myCondo.condoBox.W - myCondo.activeDragger.W;
        }
        if ((draggerY + myCondo.condoBox.T) < myCondo.condoBox.T) {
            draggerY = 0;
        }
        if ((draggerY + myCondo.condoBox.T + myCondo.activeDragger.H) > myCondo.condoBox.T + myCondo.condoBox.H) {
            draggerY = myCondo.condoBox.H - myCondo.activeDragger.H;
        }
        return [draggerX, draggerY];
    }
},
dropItem: function(e) {
    console.log("== dropItem ==");
    myCondo.draggers[myCondo.activeDragger.id].X = $(myCondo.activeDragger.el).offset().left;
    myCondo.draggers[myCondo.activeDragger.id].Y = $(myCondo.activeDragger.el).offset().top;
    myCondo.activeDragger = {};
    $(window).off('mousemove', myCondo.moveItem)
    $(window).off('mouseup', myCondo.dropItem)
},
mouseLoc: function(e) {
    // console.log("== mouseLoc ==");
    // console.log("...e.clientXY: ", e.clientX, e.clientY);
},

// ======= ======= ======= rotation functions ======= ======= =======
rotateDragger: function(e) {
    console.log("== rotateDragger ==");
    var obj = $('#' + e.currentTarget.id);
    var dragRot = myCondo.getRotationDegrees(obj) + 90;
    $('#' + e.currentTarget.id).css({
        "-moz-transform":"rotate(" + dragRot + "deg)",
        "-webkit-transform":"rotate(" + dragRot + "deg)",
        "-o-transform":"rotate(" + dragRot + "deg)",
        "-ms-transform":"rotate(" + dragRot + "deg)",
        "transform":"rotate(" + dragRot + "deg)"
    });
    if (dragRot == 90) {
        $('#' + e.currentTarget.id).css('box-shadow', '2px -2px 2px #555')
    } else if (dragRot == 180) {
        $('#' + e.currentTarget.id).css('box-shadow', '-2px -2px 2px #555')
    } else if (dragRot == 270) {
        $('#' + e.currentTarget.id).css('box-shadow', '-2px 2px 2px #555')
    } else if (dragRot == 360) {
        $('#' + e.currentTarget.id).css('box-shadow', '2px 2px 2px #555')
    }
},
getRotationDegrees: function(obj) {
    console.log("== getRotationDegrees ==");
    // == http://stackoverflow.com/questions/8270612/get-element-moz-transformrotate-value-in-jquery
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");

    // == calculate rotation process from matrix values
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else {
        var angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
    console.dir(myCondo);
}
