// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyBnWGQfM677TswYMBUDMCVSC1CtuswL5Fo",
  authDomain: "login-95de5.firebaseapp.com",
  databaseURL: "https://login-95de5.firebaseio.com",
  projectId: "login-95de5",
  storageBucket: "login-95de5.appspot.com",
  messagingSenderId: "277584537988",
  appId: "1:277584537988:web:9446b819f007e75d4215d1",
  measurementId: "G-S2DDKPEH1J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

window.onload=function(){
  var head=document.getElementById("head")
  var head1=document.getElementById("head1")
  var head2=document.getElementById("head2")
}

function look(){
  messagesRef.once('value').then(function(snapshort){
    var name=snapshort.val();
    var k=Object.keys(name);
    len=k.length; 
    head.innerHTML=""
    for (i=0;i<len;i++)
    {
      var name2=name[k[i]]["name"];
      head.innerHTML+="<td>"+name2+"\t</td>|";

    }
  })
}

function look1(){
  messagesRef.once('value').then(function(snapshort){
    var name=snapshort.val();
    var k=Object.keys(name);
    len=k.length;
    head1.innerHTML=""
    for (i=0;i<len;i++)
    {
      var name2=name[k[i]]["company"];
      head1.innerHTML+="<td>"+name2+"\t</td>|";

    }
  })
}

function look1(){
  messagesRef.once('value').then(function(snapshort){
    var name=snapshort.val();
    var k=Object.keys(name);
    len=k.length;
    head1.innerHTML=""
    for (i=0;i<len;i++)
    {
      var name2=name[k[i]]["company"];
      head1.innerHTML+="<td>"+name2+"\t</td>|";

    }
  })
}

function look2(){
  messagesRef.once('value').then(function(snapshort){
    var name=snapshort.val();
    var k=Object.keys(name);
    len=k.length;
    head2.innerHTML=""
    for (i=0;i<len;i++)
    {
      var name2=name[k[i]]["phone"];
      head2.innerHTML+="<td>"+name2+"\t</td>|";

    }
  })
}
