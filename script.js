//Selection
// document.getElementById - it will select the element with the given ID

//document.getElementById('heading');  
// document.getElementsByClassName - it will select all elements with the given class name and return an HTMLCollection
//document.getElementsByClassName('para'); 
// document.getElementsByTagName - it will select all the elements with the given tag name and return an HTMLCollection

// document.querySelector - it will select the first element that matches the selector
//document.querySelector('.para'); 
//- it uses . for class and # for id
//document.querySelector('#heading');

//document.querySelector('h1');  // it will select the first h1 element in the document

// document.querySelectorAll - it will select all the elements that matches the selector
//document.querySelectorAll('.para');  // it will select all the elements with class 'para' and return a NodeList
//document.querySelectorAll('h1');  // it will select all the h1 elements in the document and return a NodeList



// var imgid = doucument.querySelector('#imgid');
// var imgclass = document.querySelector('.imgclass');
// var h3id = document.querySelector('#h3id');
// var h3class = document.querySelector('.h3class');



//textContent - it will return the text content of the element
//innerHTML - it will return the HTML content of the element

var heading = document.querySelector('h1');
heading.textContent = "Welcome to Javascript";
heading.innerHTML = "<i>Welcome to Javascript</i>";  // it will change the HTML content of the heading to italicized text "Welcome to Javascript"
heading.style.color = 'red';
heading .style.fontSize = '60px';

var h2 = document.querySelector('h2');
h2.textContent += " Programming";  // it will append the text " Programming" to the existing text content of the heading matlab pichla jo tha uske aage add kar dega
h2.innerHTML += " <span style='color:blue'>Programming</span>";  // it will append the HTML content "<span style='color:blue'>Programming</span>" to the existing HTML content of the heading matlab pichla jo tha uske aage add kar dega aur text blue color me show hoga


var h3 = document.querySelector('h3');
h3.classList.add('highlight');  // it will add the class 'highlight' to the h3 element
h3.classList.remove('highlight');  // it will remove the class 'highlight' from the h3 element


var h1 = document.createElement('h1');  // it will create a new h1 element
h1.textContent = "This is a new heading";  // it will set the text content of the new h1 element to "This is a new heading"
h1.classList.add('makeitred');  // it will add the class 'makeitred' to the new h1 element
document.querySelector('body').appendChild(h1); // appendChild matlab  h1 child h usko body ke andar ke dega

var img = document.createElement('img');
img.src = "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg";
img.alt = "Web Development";
img.style.width = "300px";
document.querySelector('body').appendChild(img);
document.querySelector('body').removeChild(img);  // it will remove the img element from the body


var btn = document.querySelector('button'); 
//btn.textContent = 'Click Me';  // it will change the text content of the button to 'Click Me'

btn.addEventListener('click', function (){   // for double we can use 'dblclick' instead of 'click, u can use mouseover for hover and mouseout for hover out'
    //alert('Button Clicked !');
    btn.textContent = 'starting...';
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
    btn.style.padding = '10px 20px';
    btn.style.fontSize = '16px';
    btn.style.borderRadius = '5px';
});






//now we are going to see mouse moving event


document.querySelector('body').addEventListener('mousemove', function(dets){ // dets is the event object that contains the details of the event
    console.log(dets);
})