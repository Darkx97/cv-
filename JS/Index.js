const DLMode = document.getElementById("DLMode");


const comment = document.querySelector(".comments");


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


function showcomment(elemnt)
{
   var parent=elemnt.parentElement.parentElement;
   var commentsection = parent.querySelector(".comments")
   commentsection.classList.toggle("comment-active");
    
};

function textAreaAdjust(TA) 
{
    if (TA.scrollHeight <300)
    {
        TA.style.height = "1px";
        TA.style.height = TA.scrollHeight + 'px'; 

    }
}


function deletetext(element) 
{
    var parent=element.parentElement.parentElement;
    // var CT = parent.querySelector(".Text");
    var CT = parent.querySelector("textarea");
    CT.value ="";
    CT.style.height = "1px";
    CT.style.height = (CT.scrollHeight)+"px";
}
