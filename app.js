let addBtn = document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj={
    title:addTitle.value,
    text:addTxt.value
  };
  notesObj.push(myObj);
  // console.log(notesObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});
// function to shownotes from localstorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCards card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text" >${element.text}</p>
          <button class="btn btn-primary" id=${index} onclick=delBtn(this.id)>Delete</button>
        </div>
      </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<div class="card my-2 mx-2" style="width: 18rem;">
    <div class="card-body container-fluid">
      <p class="card-text" >There is nothing in your notes. Please Add something...🖊</p>
    </div>
  </div>`;
  }
}
showNotes();
function delBtn(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
let search= document.getElementById("searchTxt");
search.addEventListener('input',function(){
  inputVal=search.value;
 let noteCards= document.getElementsByClassName("noteCards");
 Array.from(noteCards).forEach(function(element){
  //  console.log(element);
  if(element.getElementsByTagName("p")[0].innerText.includes(inputVal) || element.getElementsByTagName("h5")[0].innerText.includes(inputVal))
  {
    element.style.display="block";
  }
  else
  element.style.display="none";
 })
})