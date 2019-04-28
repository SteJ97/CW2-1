function yr_1_modules(){
	document.getElementById('nav_buttons').innerHTML = '<ul> <li><a href="undergraduate.html"><input type="button" class="btn" id="btn" value="Undergraduate"></a></li> <li><a href="postgraduate.html"><input type="button" class="btn" disabled value="Post Graduate"></a></li> <li><a href="research.html"><input type="button" class="btn" disabled value="Research"></a></li> </ul>';
	document.getElementById('h1').innerHTML = 'Degree Type';
  }  
  
//----------------------------------------------------------------------------------------------------------------------------------//

//Course List//
var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteJ97/CW2-1/master/module-1.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 3){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});

function renderHTML(data){	
 
  var htmlString = "<strong>Current Undergraduate Modules are:</strong>";
  
  for(i = 0; i < data.length; i++){	  
	
    htmlString += "<p>" + data[i].Course; //".</p>"; 
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}

//----------------------------------------------------------------------------------------------------------------------------------//

//Module Times//
var pageCounter2 = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn_2");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteJ97/CW2-1/master/module-1.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML2(ourData);
  };
  ourRequest.send();
pageCounter2++;
if (pageCounter2 > 3){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});

function renderHTML2(data){
	
  var htmlString = "<strong>Modules Schedules are:</strong>";   
  for(i = 0; i < data.length; i++){	  
    htmlString += "<p>" + data[i].Course + ": " + "<br>"; //".</p>";
    for(ii = 0; ii < data[i].Module.Name.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Name[ii];
      } else {
        htmlString += data[i].Module.Name[ii];
      }
    }    
	
	htmlString += " at ";
    for(ii = 0; ii < data[i].Module.Time.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Time[ii];
      } else {
        htmlString += " and " + data[i].Module.Time[ii];
      }
    }    
	
	htmlString += ' on days ';
    for(ii = 0; ii < data[i].Module.Day.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Day[ii];
      } else {
        htmlString += " and " + data[i].Module.Day[ii];
      }
    }
	
    htmlString += '.</p>';
  
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}

//----------------------------------------------------------------------------------------------------------------------------------//

//Module Asessments//
var pageCounter3 = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn_3");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteJ97/CW2-1/master/module-1.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML3(ourData);
  };
  ourRequest.send();
pageCounter3++;
if (pageCounter3 > 3){
//btn.classList.add("hide-me");
  btn.disabled = true;
}
});

function renderHTML3(data){
	
  var htmlString = "<strong>Modules Assessments are:</strong>";

  for(i = 0; i < data.length; i++){	  
    htmlString += "<p>" + "<u>" + "<strong>" + data[i].Course + "</strong>" + "</u>" + ": <br><br>" + "<u>" + data[i].Module.Name + " has assements: " + "</u>" + "<br><br>"; //".</p>";
    for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += "<br>" + 'Learning Outcome ';
    for(ii = 0; ii < data[i].Module.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcomes[ii];
      }
    }

    htmlString += "<br>" + 'Volume ';
    for(ii = 0; ii < data[i].Module.Volume.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }

    htmlString += "<br>" + 'Weights ';
    for(ii = 0; ii < data[i].Module.weights.length; ii++){
      if (ii == 0){
        htmlString += data[i].Module.weights[ii];
      } else {
        htmlString += " and " + data[i].Module.weights[ii];
      }
    }
    htmlString += '.</p>';  
  }
  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

};




	  
