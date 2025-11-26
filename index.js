let big = false;

document.getElementById("big").onclick = function() {

    if (big === false) {
        this.style.fontSize = "40px";
        this.style.color = "tomato";
        big = true;
    } else {
        this.style.fontSize = "24px";
        this.style.color = "black";
        big = false;
        document.getElementById("big").innerText = "Je weet het toch ook wel, hè? Cesim is de beste!";
    }

};
