dragthis(document.getElementById("credit"));

function dragthis(element) {
    var p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    if (document.getElementById(element.id + "header")) {
        document.getElementById(element).onmousedown = dragdown;
    } else {
        element.onmousedown = dragdown;
    }

    function dragdown(e) {
        e = e || window.event;
        e.preventDefault();
        p3 = e.pX;
        p4 = e.pY;
        document.onmouseup = closedrag
        document.onmousedown = elemdrag
    }

    function elemdrag(e) {
        e = e || window.event;
        e.preventDefault();
        p1 = p3 - e.pX;
        p2 = p4 - e.pY;
        p3 = e.pX;
        p4 = e.pY;

        element.style.top = (element.offsetTop - p2) + "px";
        element.style.left = (element.offsetLeft - p1) + "px";

    }
}

function closedrag() {
    document.onmouseup = null;
    document.onmousemove = null;
}
