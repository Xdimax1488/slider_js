window.addEventListener('load',slider => {


    const btnLeft =document.querySelector('.left_btn')
    const btnRight= document.querySelector('.right_btn')
    

    const slaider = document.querySelector('.slaider')
    const images = document.querySelector('.slaider img')



    const stepSize = images.clientWidth
    let couter = 0

    btnRight.addEventListener('click',() =>{
        if (couter >= slaider.childElementCount -3){couter= -1}
        couter++;
        slaider.style.transform = 'translateX(' + `${-(stepSize) * counter}px)`;
    })
    btnLeft.addEventListener('click',()=>{
        if (couter <= 0){ couter = slaider.childElementCount - 2}
        couter --;
        slaider.style.transform ='translateX(' + `${-(stepSize) * counter}px)`;
    })

})
