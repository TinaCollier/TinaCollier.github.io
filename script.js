

function toggle_visibility(id) {
    
    var e = document.getElementById(id);
    
    if(e.style.visibility == 'visible')
       e.style.visibility = 'hidden';
    else
       e.style.visibility = 'visible';
    console.log('poop')
 }

function blink(id) {
    var e = document.getElementById(id);

    setInterval(() => {
        if(e.style.visibility == 'visible')
            e.style.visibility = 'hidden';
        else
            e.style.visibility = 'visible';
        console.log('poop')               
    }, 1000);
}

