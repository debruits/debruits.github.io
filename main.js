const monito = document.getElementById('gallery').children;

for(const item of monito){

    item.addEventListener('mouseover', (e)=>{
    e.target.style.transition ='all .2s';
    e.target.style.transform ='scale(2) rotate(20deg)';
    e.target.style.filter ='invert(100%)';
    e.target.style.backgroundColor ='black';

});

}

for(const items of monito){

 items.addEventListener('mouseleave', (e)=>{
    e.target.style.transition ='all .2s';
    e.target.style.transform ='none';
        e.target.style.filter ='invert(0)';
    e.target.style.backgroundColor ='blue';



});
}
