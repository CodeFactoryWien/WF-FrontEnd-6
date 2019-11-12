//---------------------------------------Contact------Builder--------------------------------------------------

function initCourse(id){
	id = 0;
	for(i=0; i<coursesJSON.length; i++){
		if(coursesJSON.id == id && id.isNaN() == false){
			id = coursesJSON.id;
		}
		else{
			id = 1;
		}
	}
	renderCourse(id);
	renderUsedCourseTech(id);

}	

//---------------------------------------End contact Builder---------------------------------------------------
function renderCourse(id){

	document.querySelector("main").innerHTML = `
	<div class="card my-4 shadow-lg rounded pt-3 border">
	<img class="card-img-top mx-auto img-fluid shadow rounded" src="${coursesJSON[id].image}" data-holder-rendered="true" style="width: 18.5rem; display: block;">
	<div class="card-body pt-0 row">
		<div class="col-12 display-4 text-dark px-0 pt-0 pb-1 my-4">
			<p class="col text-center p-1 my-0 mx-auto">${coursesJSON[id].name}</p>
		</div>
		<p class="col-12 col-md-9 card-text lead text-dark px-4 mx-auto" style="line-height: 1.5">${coursesJSON[id].description}</p>
		<p class="col-12 text-center h3 lead text-dark card-text">Choose your level</p>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
			<a class="btn btn-dark text-success btn-lg active mx-auto p-2 px-4 w-100 rounded" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="basic">Basic</a>
		</div>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
			<a class="btn btn-secondar
			text-danger btn-lg btn-dark active mx-auto p-2 px-4 w-100" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="advanced">Advanced</a>
		</div>
	</div>
</div>

<div class="accordion" id="courseDetails">
	  <div class="card shadow-lg p-2">
		<div class="card-body" id="headingOne">
			  <h2 class="mb-0 text-center">
				<button style="font-size: 100%" class="btn btn-lg lead" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				 course details
				</button>
			</h2>
		</div>

		<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#courseDetails">
			<div class="card-body row pl-4">
					
				
				
				<ul class="col-lg-6 col-10 card-text lead text-dark mx-auto list-group list-group-flush px-3">
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Price:
						</p>
						<p class="col-8">
							${coursesJSON[id].price}
						</p>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Duration:
						</p>
						<p class="col-8">
							${coursesJSON[id].duration}
						</p>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Language:
						</p>
						<p class="col-8">
							${coursesJSON[id].language}
						</p>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Location:
						</p>
						<p class="col-8">
							${coursesJSON[id].location}
						</p>
					</div>
				</li>				
			</ul>
			<div class="col-lg-6 col-10 card-text lead text-dark mx-auto px-3">
				<div class="mx-auto w-100 text-center">
					<p class="pt-2">
						Requirements:
					</p>
						sofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsnsofndsniusafiuwbfsn
				</div>
			</div>

			<div class="col-12 my-3 text-center h3">
				Technologies
			</div>
			
			<ul class="col-lg-5 offset-lg-1 col-10 card-text lead text-dark px-1 mx-auto" id="frontEndTechList" style="display: none">	
			
			</ul>
			<ul class="col-lg-5 offset-lg-1 col-10 card-text lead text-dark px-1 mx-auto" id="backEndTechList" style="display: none">	
			
			</ul>
		 </div>
		</div>
	  </div>
	</div>`
}
// ${(this.dataset.courseDifficulty).toUpperCase()}
function renderUsedCourseTech(id){
	
	

	if(coursesJSON[id].frontEndTech.length > 0){
		console.log(coursesJSON[id].frontEndTech.length)
		console.log(coursesJSON[id].backEndTech.length)
			for(j=0; j < coursesJSON[id].frontEndTech.length; j++){
			document.getElementById("frontEndTechList").innerHTML += `
				<li class="mb-3 mt-1 lead">
					${coursesJSON[id].frontEndTech[j]}
				</li>`
		}
		document.getElementById("frontEndTechList").style.display = "block";
	}

	if(coursesJSON[id].backEndTech.length > 0){

			for(j=0; j < coursesJSON[id].backEndTech.length; j++){
			document.getElementById("backEndTechList").innerHTML += `
				<li class="mb-3 mt-1 lead">
					${coursesJSON[id].backEndTech[j]}
				</li>`
		}	
	}
	document.getElementById("backEndTechList").style.display = "block";
}


