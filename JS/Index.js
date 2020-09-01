window.addEventListener("dragover",function(e){
    e = e || event;
    e.preventDefault();
  },false);
  window.addEventListener("drop",function(e){
    e = e || event;
    e.preventDefault();
  },false);

const reader = new FileReader();
// const DLMode = document.getElementById("DLMode");
// const comment = document.querySelector(".comments");
const output = document.getElementById("post_appearance")
let files=[];
let imgs=[];

let skillname;
let skill;
let picture;
let SkillDescription;

let lastrow =0;


function navSlide(burger)
{
    burger.classList.toggle("toggle");
    burger.parentElement.parentElement.querySelector(".nav-list").classList.toggle("nav-active")
};


function toggleUI(element) 
{
    let parent =element.parentElement.parentElement.parentElement;

    if (element.querySelector(".arrow-button")) 
    {
        let button =element.querySelector(".arrow-button")
        button.children[0].classList.toggle("toggle")
        button.children[1].classList.toggle("toggle")
    }
    let section = parent.querySelector(".add-skill-section")||parent.querySelector(".add-self-description-section")||parent.querySelector(".add-new-section")||parent.querySelector(".add-blog-section")||parent.querySelector(".add-project-section")||parent.querySelector(".Comments");
    section.classList.toggle("active");
    let Bsection = parent.querySelector(".add-data-buttons");
    Bsection.classList.toggle("active");
    
}


function toggleMode(element)
{
    let check = element.parentElement.querySelector('.DLMode');
    if(!check.checked)
    {
        document.documentElement.setAttribute('data-theme','light');
    }
    else
    {
        document.documentElement.setAttribute('data-theme','dark');
    };
}

function checktheme()
{
    if(DLMode.checked)
    {
        document.documentElement.setAttribute('data-theme','light');
    }
    else
    {
        document.documentElement.setAttribute('data-theme','dark');
    };
};


function showcomment(elemnt)
{
   var parent=elemnt.parentElement.parentElement;
   var commentsection = parent.querySelector(".comments");
   commentsection.classList.toggle("comment-active");
    
};


function TextAreaAdjust(TA) 
{
    let fontsize = (window.getComputedStyle(TA, null).getPropertyValue('font-size'));
    let size  = Math.floor(parseFloat(fontsize));
    let colcount =  Math.floor((TA.getBoundingClientRect().width/size)*2.22);
    
    let x ="";
    let rowcount = 1;
    let parent =TA.parentElement.parentElement;
    
    
    for (let i = 0; i < TA.value.length; i++) 
    {
        x+=TA.value[i];
        if(x.match(/(?:\r\n|\r|\n)/g))
        {
            x="";
            rowcount++;
        }
        else if(x.length === colcount)
        {
            x="";
            rowcount++;
        }

        if(rowcount > lastrow)
        {
            // let heightincrease = 16/(rowcount+1.63);
            classhieght = parseInt(getComputedStyle(parent.parentElement.querySelector(".active")).height);
            
            if (lastrow >= 5) 
            {
                
            }
            
                   
        }
        else if(rowcount < lastrow)
        { 
            if (lastrow >= 5) 
            {
            
            }
            
        }
    } 
};


function newLine(element)
{
    let text = element.value.replace(/(?:\r\n|\r|\n)/g, "<br>");
    finalcheck(text);
};

function finalcheck(text)
{
    
    for (let i = 0; i <= imgs.length; i++) 
    {
        if(imgs[i]== null)continue;
        
        let myRegex = new RegExp(`/img${i}`, 'g');
        text= text.replace(myRegex,`</p> ${imgs[i]} <p>`);
    }
    output.innerHTML=`<p>${text}`
};


function deletetext(element) 
{
    var parent=element.parentElement.parentElement;
    var CT = parent.querySelector("textarea");
    CT.value ="";
    CT.style.height = "1px";
    CT.style.height = (CT.scrollHeight)+"px";
};



function dragover(elemnt)
{
    let droparea = elemnt.parentElement.querySelector(".droparea")||elemnt.parentElement.querySelector(".Add-Skill-Image");
    droparea.classList.add("dragover");
};

function dragout(elemnt)
{
    let droparea = elemnt.parentElement.querySelector(".droparea")||elemnt.parentElement.querySelector(".Add-Skill-Image");
    droparea.classList.remove("dragover");
};

function TextAreaDrop(elemnt,event)
{
    var file;
    let droparea = elemnt.parentElement.querySelector(".droparea")||elemnt.parentElement.querySelector(".Add-Skill-Image");
    droparea.classList.remove("dragover");
    droparea.style.display="inline-block";

    data =  event.dataTransfer.files;

    file=data.item(0);
    files.push(file);

    TextAreaDropFile(droparea,file);
};

function TextAreaDropFile(droparea,files) 
{
    let textarea =droparea.parentElement.querySelector("#add_post");
    reader.readAsDataURL(files);
    reader.onload = () =>
    {
        droparea.innerHTML+=`<img class='dropitem' onclick="removefile(this)" src='${reader.result}'>`;
        imgs.push(`<img class="blogImg" onclick="removefile(this)" src='${reader.result}'>`);
        textarea.value+=` /img${imgs.length-1}  `;
        console.log(textarea);
        TextAreaAdjust(textarea);
    };

};

function removefile(element) 
{
    let parent = element.parentNode;
    let index=Array.prototype.indexOf.call(parent.children, element);
    let textarea = parent.parentElement.querySelector("textarea");

    if(index === parent.children.length-1)
    {
        let oldpic = new RegExp("/img"+index);
        textarea.value = textarea.value.replace(oldpic," ");
    }
    else
    {
        for (let i = index; i < parent.children.length; i++) 
        {
            let oldpic = new RegExp(`/img${i}`);
            textarea.value = textarea.value.replace(oldpic," ");
            let newpic = new RegExp(`/img${i+1}`);
            textarea.value = textarea.value.replace(newpic,"/img"+i);
            textarea.value = textarea.value.replace(`/\\`,"/img"+i)
            // textarea.value = textarea.value.replace(`/\\`," ")
        }
        TextAreaAdjust(textarea);
    }

    imgs.splice(index,1);

    parent.children[index].remove();

    if(parent.children.length==0)parent.style.display="none"
    console.log(textarea);
}

function RemovePicture(Pic)
{
    let droparea = Pic.parentElement;
    droparea.innerHTML  = `<p class="note" align="center" style="cursor: pointer;">click / tap to add picture</p>`;
    if(droparea.childNodes.length == 0)droparea.style.display="none"
};


function GetSkillDescription(elemnt) 
{
    SkillDescription = elemnt.value;
    console.log(SkillDescription);
};

function GetSkillName(element) 
{
    skillname=element.value;
    console.log(skillname);
};

function PictureDrop(elemnt)
{
    var file;

    let droparea = elemnt.parentElement.querySelector(".Add-Skill-Image");

    droparea.classList.remove("dragover");

    data =  event.dataTransfer.files;

    file=data.item(0);
    files.push(file);

    PictureDropFile(droparea,file);
};

function PictureDropFile(droparea,files) 
{
    reader.readAsDataURL(files);
    reader.onload = () =>
    {
        droparea.innerHTML=`<img class='dropitem' onclick='RemovePicture(this)' src='${reader.result}'>`;
        picture = `<img class="blogImg" " src='${reader.result}'>`;
    };
};

function GetDropedFile(element) 
{
    console.log(element.children);
};

function PickSkillLevel(SkillLevel)
{
    let radios = SkillLevel.querySelectorAll("input");
    for (var i = 0; i < radios.length; i++)if (radios[i].checked)skill=radios[i].value;
    console.log(skill);
};


function CreateSkillRow(button)
{
    let Parent = button.parentElement.parentElement;

    
    let SNname  = Parent.querySelector(".Skill-Name-text");
    GetSkillName(SNname);

    let SPicture = Parent.querySelector(".Add-Skill-Image");
    GetDropedFile(SPicture);

    let SDescription= Parent.querySelector(".Skill-description-text")
    GetSkillDescription(SDescription);


    let SLevel = Parent.querySelector(".option-list");
    PickSkillLevel(SLevel)
};
