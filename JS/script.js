function displayMessage(type){
    var initialMessages = ["Hi How are you ?", "Please let me know your sufferings", "Do you have fever"]
    var responseMessages = ["Hi How are you ?", "Please let me know your sufferings", "Do you have fever"]
    
    var newDiv = document.createElement("div");
    newDiv.className = "chat-bubble";
    var newImg = document.createElement("img");
    newImg.className = "bot image";
    var newP = document.createElement("p");
    newP.innerHTML =  type == "initial" ? initialMessages[Math.floor(Math.random() * Math.floor(initialMessages.length))] : responseMessages[Math.floor(Math.random() * Math.floor(responseMessages.length))];
    newDiv.appendChild(newImg)
    newDiv.appendChild(newP);
    
    
    var messages = document.getElementById("chat-contents");
    messages.appendChild(newDiv);
  }
  
  function arrowSubmit(){
    console.log("here")
    button = document.getElementById("submit-chat");
    text = document.getElementById("chat-message-value");
    if( text.value != ""){
      button.classList = "active";
    }else{
      button.classList.remove("active");
    }
  }
  
  function submitMessage(){
    var text = document.getElementById("chat-message-value").value;
    if(text == ""){
      return
    }
    document.getElementById("chat-message-value").value = "";
    
    var newDiv = document.createElement("div");
    newDiv.className = "chat-bubble";
    var newImg = document.createElement("img");
    newImg.className = "user image";
    var newP = document.createElement("p");
    newP.innerHTML = text;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newP);
    
    var messages = document.getElementById("chat-contents");
    messages.appendChild(newDiv);
    document.getElementById("submit-chat").classList.remove("active");
    setTimeout(function(){displayMessage("response")}, 3000);
  
  }
  
  function addHandlers(){
    document.getElementById("submit-chat").addEventListener("click", submitMessage);
    document.onkeypress = function (e){
      if( e.keyCode == 13 ){
        document.getElementById("submit-chat").click();
      }
    };
    setTimeout(function(){displayMessage("initial")}, 1500);
    document.getElementById("chat-message-value").addEventListener("input", arrowSubmit);
  }
  
  window.addEventListener("load", addHandlers);
