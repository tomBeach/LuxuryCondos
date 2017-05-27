

// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// ======= ======= ======= JS GLOBALS ======= ======= =======
var draggerBoxEl = document.getElementById("draggerBox");

// ======= ======= ======= FORMS ======= ======= =======

function nameDragger() {
    console.log("== nameDragger ==");
    var draggerName = document.getElementById("draggerName").value;
    console.log("draggerName: ", draggerName);
}

// ======= ======= ======= DIV CONTENT ======= ======= =======

function showDragger(whichDragger) {
    console.log("== showDragger ==");
    console.log("whichDragger: ", whichDragger);
    var draggerEl = document.getElementById(whichDragger);
    var draggerText = whichDragger;
    var draggerHtml = "<p>" + whichDragger + "</p>";
    draggerEl.text = whichDragger;
    draggerEl.html = draggerHtml;
}

// ======= ======= ======= STYLE CHANGES ======= ======= =======

function makeDraggers(whichDragger) {
    console.log("== makeDraggers ==");
    console.log("whichDragger: ", whichDragger);
    draggerEl = document.createElement("div");
    draggerEl.id = whichDragger;
    draggerEl.className = "dragger";
    nextStyles = "position:absolute; ";
    nextStyles += "background-color:red; ";
    draggerEl.setAttribute("style", nextStyles);
    draggerBoxEl.appendChild(draggerEl);
    activateDragger(whichDragger);                            // assign event listeners

}

// ======= ======= ======= EVENTS ======= ======= =======

function activateDragger(draggerId) {
    console.log("== activateDragger ==");
    $('#' + draggerId).on('mousedown', initDrag);
    $('#' + draggerId).on('dblclick', rotateDragger);
}

function initDrag(e) {
    console.log("== initDrag ==");
    e.preventDefault();

    // == set drag object, id and element
    activeDragger.id = e.currentTarget.id;
    activeDragger.el = e.currentTarget;
}

function rotateDragger(e) {
    console.log("== rotateDragger ==");
    e.preventDefault();
}


// ======= ======= ======= QUERY SELECTORS ======= ======= =======
function getAllDraggers() {
    console.log("== getAllDraggers ==");
    var firstDragger = document.querySelector(".dragger");
    var allDraggers = document.querySelectorAll(".dragger");
    console.log("firstDragger: ", firstDragger);
    console.log("allDraggers: ", allDraggers);
}

// makeDraggers("Zeron");
// nameDragger();
// showDragger("Zeron");
// getAllDraggers();
