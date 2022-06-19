


function blink(id) {
    var e = document.getElementById(id);

    setInterval(() => {
        if(e.style.visibility == 'visible')
            e.style.visibility = 'hidden';
        else
            e.style.visibility = 'visible';             
    }, 500);
}

const pacArray = ["./design/PacManGame.png", "./design/PacMan2.png"]

let image = document.getElementById("img-to-flip")


function chomp() {
    let img1 = pacArray[0]
    let img2 = pacArray[1]

    
    setInterval(() => {

        console.log( image.src, img1 );
        
        if ( image.src.includes('PacManGame.png') ) {
            image.src = img2;
        } else {
            image.src = img1;
        }
    }, 450);
}




