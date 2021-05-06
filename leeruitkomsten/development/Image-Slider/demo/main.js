window.onload = init;

let imgfrtJavascript;
let imgbckJavascript;

function init()
{
    imgbckJavascript = document.getElementById('imgbck');
    imgfrtJavascript = document.getElementById('imgfrt');
    imgArray = ['https://wallpaperaccess.com/full/96462.jpg', 'https://i.pinimg.com/originals/af/8e/d3/af8ed3265ed9b78d34f2340b5bb42b71.jpg',
    'https://wallpapercave.com/wp/wp3386769.jpg', 'https://s1.1zoom.me/b5050/562/France_Sunrises_and_sunsets_Mountains_Stones_566654_1920x1080.jpg'];
    curImg = 0;
    fadeOut(imgfrtJavascript,5000);
}

function setImgUrl(el,arr)
{
    if(curImg == arr.length)
    {
        curImg = 0;
    }
    el.src = arr[curImg];
    console.log("current image " + curImg + ":" +arr[curImg]);
    curImg++;
}
function fadeOut(el, duration)
{
    let s = el.style;
    let step = 25/duration;
    let factor = 1;

    function fade()
    {
        if(s.opacity < 0 && factor == 1)
        {
            
            factor = -1;
            setTimeout(fade, 25);
            setImgUrl(imgfrtJavascript, imgArray);
        }

        else if(s.opacity > 1 && factor == -1)
        {
            
            factor = 1;
            setImgUrl(imgbckJavascript,imgArray);
            fade();
        }
        else
        {
            s.opacity = s.opacity - (step*factor)
            setTimeout(fade, 25);
        }
    }
    fade();
}

