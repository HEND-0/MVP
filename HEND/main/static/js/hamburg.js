const hamburg_bar=document.querySelector(".hamburg_bar");
const hamburg1=document.querySelector(".hamburg_ele1");
const hamburg2 = document.querySelector(".hamburg_ele2");
const hamburg3 = document.querySelector(".hamburg_ele3");
const sidebar= document.querySelector(".sidebar");
const categories= document.querySelector(".categories");

hamburg_bar.addEventListener("click", ()=>{
  if(sidebar.style.width==="" || sidebar.style.width==="86px"){
    sidebar.style.width = "230px";
    categories.style.display ='block';
  }else{
    sidebar.style.width= "86px";
    categories.style.display= 'none';
  }
})

