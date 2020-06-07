const DLMode = document.getElementById("DLMode");

const elemnts = document.querySelectorAll("*");

function navSlide()
{
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    //toggle nav
        burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //animate links

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
    
    if(DLMode.checked)
    {
        document.documentElement.setAttribute('data-theme','light');
    
    }
    else
    {
        document.documentElement.setAttribute('data-theme','dark');
    }


});

function checktheme()
{
    if(DLMode.checked)
    {
        document.documentElement.setAttribute('data-theme','light');
    
    }
    else
    {
        document.documentElement.setAttribute('data-theme','dark');
    }
}

