const DLMode = document.getElementById("DLMode");

const elemnts = document.querySelectorAll("*");

function navSlide()
{
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
        burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) =>{
            if(link.style.animation)
            {
                link.style.animation =''
            }
            else
            {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.35}s` ;
            }
        }) 

        //burger animation
        burger.classList.toggle('toggle');
    });


}
navSlide();


function Navhoverin(x)
{
    x.classList.add('in-page')
}

function Navhoverout(x)
{
    x.classList.remove('in-page')
}




DLMode.addEventListener('change',() =>
{
    
    if(DLMode.checked===true)
    {
        for(let x=0; x < elemnts.length;x++)
        {
            elemnts[x].classList.add('light');
        }
    
    }
    else
    {
        for(let x=0; x < elemnts.length;x++)
        {
            elemnts[x].classList.remove('light');
        }
    }


});
