// GLOBAL VARS
var DEFAULT_PROJECT_DATA_PATH = "js/component/data/projects/";



// READ FILE

$("#projects-choice input[type=radio]").click(function(){
	readTextFile(DEFAULT_PROJECT_DATA_PATH + $("#projects-choice input[type=radio]:checked").val() + ".txt");
	
});


// SHOW READ FILE
function displayProjectDetails(txt){
	$("#project-details-txt")
        .animate({opacity:0})
        .queue(function(){
             $(this).html(txt)
                    .dequeue()
        })
        .animate({opacity:1});  
		
		
	$("#project-details-txt #first")
		 .animate({opacity:0})
		 .queue(function(){ 
			$(this).dequeue()
		})
		.animate({opacity:1});  
		
}


// FILE READER
function readTextFile(file)
{	
	var Httpreq = new XMLHttpRequest(); // a new request	
	Httpreq.onreadystatechange = function() {
		if (Httpreq.readyState == 4 && Httpreq.status == 200) {
			 var allText = Httpreq.responseText;
			 displayProjectDetails(allText);
		}
	}
	Httpreq.open("GET",file,true);
	Httpreq.send();	
}




