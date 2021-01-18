var img_array=["Director1.jpg","My mom.png","My2.jpeg","brother.jpeg"]

var name_array=["Keyur Thakrar", "Rima Thakrar", "Yuvraj Thakrar", "Ansh Thakrar"]

var i=0;


function nextslide(){
document.getElementById("family").src=img_array[i];
document.getElementById("name").innerHTML=name_array[i];

i++
}