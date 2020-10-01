const hamburg_bar=document.querySelector(".hamburg_bar");
const hamburg1=document.querySelector(".hamburg_ele1");
const hamburg2 = document.querySelector(".hamburg_ele2");
const hamburg3 = document.querySelector(".hamburg_ele3");
const sidebar= document.querySelector(".sidebar");
const categories= document.querySelector(".categories");
const quick=document.querySelector(".quick");

hamburg_bar.addEventListener("click", ()=>{
  if(sidebar.style.width==="" || sidebar.style.width==="86px"){
    sidebar.style.width = "273px";
    categories.style.display ='block';
    quick.style.left= "100px";
  }else{
    sidebar.style.width= "86px";
    categories.style.display= 'none';
    quick.style.left= "30px";
  }
})

