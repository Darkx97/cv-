window.addEventListener("dragover",function(e){
    e = e || event;
    e.preventDefault();
  },false);
  window.addEventListener("drop",function(e){
    e = e || event;
    e.preventDefault();
  },false);

const output = document.getElementById("post_appearance")
let files=[];
let data=[];




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
    let section = parent.querySelector(".add-skill-section")||parent.querySelector(".add-self-description-section")||parent.querySelector(".add-new-section")||parent.querySelector(".add-blog-section")||parent.querySelector(".add-project-section")||parent.querySelector(".Comments")||parent.querySelector(".add-post-section");
    section.classList.toggle("active");
    let Bsection = parent.querySelector(".add-data-buttons");
    Bsection.classList.toggle("active");

    let textarea=parent.querySelector(`.Post-textarea`)||parent.querySelector(`.Self-Description-textarea`)||parent.querySelector(`.Blog-textarea`)||parent.querySelector(`.New-Section-textarea`);

    if(textarea=parent.querySelector(`.Post-textarea`)||parent.querySelector(`.Self-Description-textarea`)||parent.querySelector(`.Blog-textarea`)||parent.querySelector(`.New-Section-textarea`))
    {
        TextAreaAdjust(textarea);
    }
    
    
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
    let parent =TA.parentElement.parentElement||TA.parentElement.parentElement.parentElement;
    
    let droparea = parent.querySelector(".droparea") || "null";
    let FontSize=parseInt(getComputedStyle(document.documentElement).getPropertyValue(' --Textarea-font-size'));
    let sectionHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--post-section-height'));
    let Textareaheight =parseInt(getComputedStyle(document.documentElement).getPropertyValue('--Post--Textarea-height'));
    let colcount =  Math.floor((TA.getBoundingClientRect().width/FontSize)*2.1);
    
    let dropareaheight =parseInt(droparea.offsetHeight)/4 || 0;
    let TextMaxHegiht =400;
    let ParentMaxhight = sectionHeight+ (TextMaxHegiht-Textareaheight) + dropareaheight
    

    let rowcounter=1;
    let minrows =0;
    
    if(TA.classList.contains("Post-textarea") )
    {
        sectionHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--post-section-height'))+ droparea.offsetHeight;
        Textareaheight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--Post--Textarea-height'));
        minrows = 4;
        TextMaxHegiht =400;
        ParentMaxhight =sectionHeight+ (TextMaxHegiht-Textareaheight) + dropareaheight
        console.log(ParentMaxhight);
    }
    else if(TA.classList.contains("Blog-textarea"))
    {
        sectionHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--blog-section-height')+ dropareaheight);
        Textareaheight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--Blog--Textarea-height'));
        minrows =4;
        TextMaxHegiht =400;
        ParentMaxhight = sectionHeight+ (TextMaxHegiht-Textareaheight) + dropareaheight;
    }
    else if(TA.classList.contains("Self-Description-textarea"))
    {
        parent =TA.parentElement.parentElement.parentElement;
        console.log(parent);
        Textareaheight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--Blog--Textarea-height'));
        minrows =4;
        TextMaxHegiht =325;


        sectionHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--blog-section-height'));

        ParentMaxhight = sectionHeight+ (TextMaxHegiht-Textareaheight) + dropareaheight
        

    }
    else if(TA.classList.contains("New-Section-textarea"))
    {
        parent =TA.parentElement.parentElement.parentElement;
        Textareaheight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--Blog--Textarea-height'));

        sectionHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--new-section-height')+dropareaheight);
        minrows =4;
        TextMaxHegiht =300;
        ParentMaxhight = TextMaxHegiht+dropareaheight+ 175;

    }

    if(TA.value.length)
    {
        let x=""
        for (let i = 0; i < TA.value.length; i++) 
        {
            
            x+=TA.value[i];
            if(x.match(/(?:\r\n|\r|\n)/g))
            {
                x="";
                rowcounter++;
            }
            if(x.length > colcount)
            {
                x="";
                rowcounter++;
            }


        }
    }

    if(rowcounter > minrows)
    {
        if(parent.classList.contains("active"))
        {
            parent.style.height= ParentMaxhight +"px";
            TA.style.height = TextMaxHegiht + "px";
            console.log(sectionHeight);
        }
        else
        {
            parent.style.height= 0  +"px";
            TA.style.height = 0 + "px";
        }
    }
    else
    {
        if(parent.classList.contains("active"))
        {
            
            parent.style.height= sectionHeight+dropareaheight+"px" ;
            TA.style.height = Textareaheight + "px";
            console.log(sectionHeight);
        }
        else
        {
            parent.style.height= 0  +"px";
            TA.style.height = 0 + "px";
        }
    }

};



function finalcheck(text)
{
    
    for (let i = 0; i <= imgs.length; i++) 
    {
        if(imgs[i]== null)continue;
        
        let myRegex = new RegExp(`/img${i}`, 'g');
        text= text.replace(myRegex,`</p> ${imgs[i]} <p>`);
    }
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
    let droparea = elemnt.parentElement.querySelector(".droparea")||elemnt.parentElement.querySelector(".Add-Skill-Image");
    droparea.classList.remove("dragover");

    data =  event.dataTransfer.files;


    for (let i = 0; i < data.length; i++) 
    {
        if(data.item(i).type.indexOf("image") === -1)
        {
            continue
        }
        else
        {
            files.push(data.item(i));
            TextAreaDropFile(droparea,data.item(i));
        }
    }
    
    let input = elemnt.parentElement.parentElement.querySelector(`[type="file"]`)
    input.files = new filelistitems(files)
};

function filelistitems(files) 
{
    let  b = new ClipboardEvent("").clipboardData || new DataTransfer();
    for (let i = 0; i < files.length; i++)b.items.add(files[i]);

    return b.files;
}

function TextAreaDropFile(droparea,file) 
{
    droparea.style.display="inline";
    let textarea =droparea.parentElement.querySelector(".Post-textarea") || droparea.parentElement.querySelector(".Chat-textarea") || droparea.parentElement.querySelector(".Blog-textarea");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
    {
        droparea.innerHTML+=`<img class='dropitem' onclick="removefile(this)" src='${reader.result}'>`;
        imgs.push(`<img class="blogImg" onclick="removefile(this)" src='${reader.result}'>`);
        textarea.value+=" /img"+(imgs.length-1)+" ";
        TextAreaAdjust(textarea);
    };
    
    
};

function inputItem(element)
{
    let parent = element.parentElement.parentElement;
    let input = parent.querySelector(`[type="file"]`);
    input.click();
}

function inputItemchange(element)
{
    let droparea =element.parentElement.parentElement.querySelector(`.droparea`)
    for (let i = 0; i < element.files.length; i++) {
        files.push(element.files[i]);
        TextAreaDropFile(droparea,element.files[i]);
    }
    element.files = new filelistitems(files)

    console.log( element.files);

}



function removefile(element) 
{
    let parent = element.parentNode;
    let input = parent.parentElement.querySelector(`[type="file"]`)
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
            textarea.value = textarea.value.replace("/img"+(i+1),"/img"+i);
            textarea.value = textarea.value.replace(`/\\`,"");
            textarea.value = textarea.value.replace(`//`,"");
        }
        textarea.value = textarea.value.replace("/img"+index,"");
        TextAreaAdjust(textarea);
    }

    imgs.splice(index,1);
    files.splice(index,1);
    parent.children[index].remove();

    if(parent.children.length==0)parent.style.display="none";

    input.files = new filelistitems(files);

}

function skillItemChange(element)
{
    let droparea =element.parentElement.querySelector(`.Add-Skill-Image`)

    files[0]=(element.files[0])
    element.files = new filelistitems(files)

    PictureDropFile(droparea,files[0])
    console.log( element.files);
}

function PictureDrop(elemnt,event)
{

    let droparea = elemnt.parentElement.querySelector(".Add-Skill-Image");
    input =elemnt.parentElement.querySelector(`[type="file"]`)
    
    droparea.classList.remove("dragover");
    
    data =  event.dataTransfer.files;
    
    files[0]=data.item(0);
    
    PictureDropFile(droparea,files[0]);

    input.files = new filelistitems(files);

    console.log(  input.files);
};

function PictureDropFile(droparea,files) 
{
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () =>
    {
        droparea.innerHTML=`<img class='dropitem' onclick='RemovePicture(this)' src='${reader.result}'>`;
        picture = `<img class="blogImg" " src='${reader.result}'>`;
    };
};

function RemovePicture(Pic)
{
    let droparea = Pic.parentElement;
    let input = droparea.parentElement.querySelector(`[type="file"]`)
    droparea.innerHTML  = `<p class="note" align="center" style="cursor: pointer;" onclick="inputItem(this)">click / tap to add picture</p>`;
    if(droparea.childNodes.length == 0)droparea.style.display="none"
    files.splice(0,1);
    input.files = new filelistitems(files);
    console.log(input.files);
};



function PickSkillLevel(SkillLevel)
{
    let radios = SkillLevel.querySelectorAll("input");
    for (var i = 0; i < radios.length; i++)if (radios[i].checked)skill=radios[i].value;
    // console.log(skill);
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


function logoption(element)
{
    element.querySelector(".Sign");
    

    if(element.querySelector(".Log"))
    {
        element.classList.add("active")
        element.parentElement.querySelector(".Sign-option").classList.remove("active")
        element.parentElement.parentElement.querySelector(".Log-in-data").classList.add("active");
        element.parentElement.parentElement.querySelector(".Sign-in-data").classList.remove("active");
        element.parentElement.parentElement.parentElement.querySelector(".log").classList.add("active");
        element.parentElement.parentElement.parentElement.querySelector(".sign").classList.remove("active");
    }
    else if(element.querySelector(".Sign"))
    {
        element.classList.add("active")
        element.parentElement.querySelector(".Log-option").classList.remove("active")
        element.parentElement.parentElement.querySelector(".Sign-in-data").classList.add("active");
        element.parentElement.parentElement.parentElement.querySelector(".sign").classList.add("active");
        element.parentElement.parentElement.parentElement.querySelector(".log").classList.remove("active");
        element.parentElement.parentElement.querySelector(".Log-in-data").classList.remove("active");
    }

}