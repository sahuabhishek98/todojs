function addCard(){//onclick  plus icon function we get pop card
    let cardFirst = document.getElementById("card1");
    const parentElement = document.getElementById("firstparent");
    cardFirst.style.display = "block";
    parentElement.style.filter = "blur(11px)";
   
 }


const tasklist=[];
const addTask=function(){
    const name=document.getElementById("name").value 
    console.log(name);
    const tempObj={
        id:Date.now(),
        taskName:name
    }
    tasklist.push(tempObj);
    console.log(tasklist);
    addTaskOnScreen();
}
function addTaskOnScreen(){
    const element=document.createElement("div");
    element.setAttribute("class","child");
    element.innerText=tasklist[tasklist.length-1].taskName;
    const parentElement=document.getElementById("firstparent");
    parentElement.appendChild(element);
    const horiline=document.createElement("hr");
    horiline.setAttribute("class","line");
    element.appendChild(horiline);
    const delIcon=document.createElement("i");
    delIcon.setAttribute("class","fa fa-trash deleteIcon");
    element.appendChild(delIcon);
    const addIcon=document.createElement("i");
    addIcon.setAttribute("class","fa-solid fa-circle-plus addIcon");
    element.appendChild(addIcon);
// #######################################################
// card1 code
    let card1=document.getElementById("card1");
    card1.style.display="none";
    parentElement.style.filter="blur(0px)";
    const task2=document.getElementById("task2");
    task2.style.display="none";
// #######################################################
// card2 code
    let card2=document.getElementById('card2');
    addIcon.addEventListener('click',function(){
        card2.style.display="block";
        parentElement.style.filter="blur(12px)";
    })



    const secondCard=document.createElement("div");
    element.appendChild(secondCard);

    const btn=document.getElementById("btn");
    const name1=document.getElementById("name1");
   

    btn.addEventListener('click',function(){
        parentElement.style.filter="blur(0px)";
        card2.style.display="none";
        let paragraph=document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        secondCard.appendChild(paragraph);
        paragraph.innerText=name1.value;
        name1.value="";

        let markIcon=document.createElement("button");
        markIcon.setAttribute("id","markIcon");
        markIcon.innerHTML="Mark Done";
        markIcon.style.backgroundColor="blue";
        markIcon.style.color="white";
        markIcon.style.width="100px";
        markIcon.style.height="25px";
        markIcon.style.textAlign="center";
        markIcon.style.borderRadius="5px";
        markIcon.style.fontSize="15px";
        markIcon.style.padding="4px";
        secondCard.appendChild(markIcon);
       
        markIcon.addEventListener('click',function(){
            paragraph.style.textDecoration="line-through";
            paragraph.style.color="red";
            markIcon.style.display="none";
        })   
       
    })

}



function closeTask(){
    let card1=document.getElementById("card1");
    const parentElement=document.getElementById("firstparent");
    card1.style.display="none";
    parentElement.style.filter="blur(0px)";
}
function closeTask_1(){
    let card2=document.getElementById("card2");
    const parentElement=document.getElementById("firstparent");
    card2.style.display="none";
     parentElement.style.filter="blur(0px)";
}