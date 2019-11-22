document.querySelector("h1").addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});

document.querySelector("h1").classList.remove("red");
document.querySelector("h1").classList.add("orange");

function WriteHi(){
           document.write("hi");
    }

function ShowName(){
    var x = document.getElementById("text-input").value;
    document.getElementById("name").innerHTML = x;
}