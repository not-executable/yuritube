// idk man
/*
let lainlove = 0;
const aishite = document.getElementById("amelove")
const display = document.getElementById("love")
function loveAme() {
   display.textContent = lainlove;
   localStorage.getItem('total', lainlove)
}
if (aishite) {
aishite.addEventListener('click', () => {
    lainlove++;
    loveAme();
});
}
loveAme();
*/
dragElement(document.getElementById("watashi2"));

// javascript go fuck yourself i will kms i hate you so fucking much 45euisxczvjzkxcvjzxlcojlz;xokv
function dragElement(elem) {
    var p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    if (document.getElementById(elem.id + "header")) {

        document.getElementById(elem.id + "header").onmousedown = dragMouseDown;

    }   else {

        elem.onmousedown = dragMouseDown;
    }
    function dragMouseDown(yay) {
        yay = yay || window.Event;
        yay.preventDefault();
        p3 = yay.clientX;
        p4 = yay.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(yay) {
        yay = yay || window.Event;
        yay.preventDefault();
        let p1 = p3 - yay.clientX;
        let p2 = p4 - yay.clientY;
        p3 = yay.clientX;
        p4 = yay.clientY;
        elem.style.top = (elem.offsetTop - p2) + "px";
        elem.style.left = (elem.offsetLeft - p1) + "px";
    }
}
