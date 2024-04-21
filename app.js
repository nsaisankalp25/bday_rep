function start() {

        //NEXT &#8250


    var but = document.getElementById("show");
    but.onclick = test;
    but.style.textContent = "NEXT &#8250";
    //but.style.borderColor = "#36FF00";
}

function test3() {
    var info = document.createElement('h1');
    info.id = 'info3'
    info.textContent = "Enjoy your Day!"
    document.body.appendChild(info)

    console.log("Hello ")

    var imageElement = document.getElementById("info2");
    if (imageElement) {
        imageElement.remove();
    }

    var imageElement = document.getElementById("show");
    if (imageElement) {
        imageElement.remove();
    }
}
function test2() {
    var info = document.createElement('h1');
    info.id = 'info2'
    info.textContent = "You are the Best! \n Keep Rocking!!"
    document.body.appendChild(info)

    console.log("Hello ")
    items = ["gif_img", "gif_img2p1", "gif_img2p2"]

    for (i = 0; i < items.length; i++) {

        var imageElement = document.getElementById(items[i]);
        if (imageElement) {
            imageElement.remove();
        }
    }
    var but = document.getElementById("show");
    but.onclick = test3;
    but.style.color = "#36FF00";
    but.style.borderColor = "#36FF00";

}

function test() {


    var imageElement = document.getElementById("happy");
    if (imageElement) {
        imageElement.remove();
    }

    var img1 = document.createElement('img');
    img1.src = 'Dependencies/image.gif';
    img1.id = 'gif_img'
    document.body.appendChild(img1)

    var img1 = document.createElement('img');
    img1.src = 'Dependencies/party.gif';
    img1.id = 'gif_img2p2'
    document.body.appendChild(img1)

    var img1 = document.createElement('img');
    img1.src = 'Dependencies/party.gif';
    img1.id = 'gif_img2p1'
    document.body.appendChild(img1)


    var but = document.getElementById("show");
    but.onclick = test2;
    but.style.color = "#36FF00";
    but.style.borderColor = "#36FF00";
    

}


function first() {
    

    var info = document.createElement('h1');
    info.id = 'happy'
    info.textContent = "HAPPY BIRTHDAY PAPAA!"
    document.body.appendChild(info)

    var but = document.getElementById("start");
    but.onclick = test;
    but.id = "show";
    but.textContent = "NEXT \u203A";
}