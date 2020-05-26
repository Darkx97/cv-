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


function Mainhoverin(x)
{
    x.style.color = "rgb(99, 55, 221)";
}

function Mainhoverout(x)
{
    x.style.color = " rgb(148, 148, 148)";
}


function Linkhoverin(x)
{
    x.style.color = "rgb(219, 219, 219)";
}

function Linkhoverout(x)
{
    x.style.color = " rgb(148, 148, 148)";
}
