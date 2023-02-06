// function conversion(){
//     document.getElementById("demo").innerHTML="Web Development";
// }
var counter = 1;
setInterval(opacityEqualOne, 4000);

function opacityEqualOne() {
    document.getElementById('text' + counter).style.opacity = "1";

    setTimeout(opacityEqualZero, 2000);
    setTimeout(function () {
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 2050)
}
function opacityEqualZero() {
    document.getElementById('text' + counter).style.opacity = "0";
}
