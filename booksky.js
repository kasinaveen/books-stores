var overlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addbtn=document.getElementById("add-btn")
addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display = "block"
     overlay.classList.add("show");
     popupbox.classList.add("show");

})
var cancel=document.getElementById("bookcancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    popupbox.style.display = "none"
     overlay.classList.remove("show");
     popupbox.classList.remove("show");
})
var container=document.querySelector(".container")
var booklist=document.getElementById("book-list")
var bookadd=document.getElementById("bookadd")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")
bookadd.addEventListener("click",function(event){
    event.preventDefault()
    if (!booktitle.value || !bookauthor.value || !bookdescription.value){
        alert("please fill in this fields.")
        return
    }

      var div = document.createElement("div");
    div.className="content"
    div.innerHTML=`<h2>${booktitle.value}</h2>              
                  <h3>${bookauthor.value}</h3>
                  <p>${bookdescription.value}</p>
                  <button onclick="del(event)">Delete</button>`
container.append(div)
booktitle.value = "";
bookauthor.value = "";
bookdescription.value = "";
 overlay.style.display = "none"
 popupbox.style.display = "none"
})
function del(event){
    event.target.parentElement.remove()
}   
addbtn.addEventListener("click", function () {
  overlay.classList.add("show");
  popupbox.classList.add("show");
});

cancel.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.remove("show");
  popupbox.classList.remove("show");
});
