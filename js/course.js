//---------------------------------------Contact------Builder--------------------------------------------------

function initCourse(id){
	for(i=0; i<coursesJSON.length; i++){

		if(id === parseInt(coursesJSON[i].id) && isNaN(id) == false){
			currentCourse = coursesJSON[i];
			break;
		}

	}
	renderCourse();
	renderUsedCourseTech()
	addCourseBtnClick();
}	

//---------------------------------------End contact Builder---------------------------------------------------
function renderCourse(){

	document.querySelector("main").innerHTML = `
	<div class="card my-4 shadow-lg rounded pt-3 border">
	<img class="card-img-top mx-auto img-fluid shadow rounded" src="${currentCourse.image}" data-holder-rendered="true" style="width: 18.5rem; display: block;">
	<div class="card-body pt-0 row">
		<div class="col-12 display-4 text-dark px-0 pt-0 pb-1 my-4">
			<p class="col text-center p-1 my-0 mx-auto">${currentCourse.name}</p>
		</div>
		<p class="col-12 col-md-9 card-text lead text-dark px-4 mx-auto" style="line-height: 1.5">${currentCourse.description}</p>
		<p class="col-12 text-center h3 lead text-dark card-text">Choose your level</p>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
			<a class="btn btn-dark text-success btn-lg active mx-auto p-2 px-4 w-100 extendBtn" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="Basic">Basic</a>
		</div>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
			<a class="btn text-danger btn-lg btn-dark active mx-auto p-2 px-4 w-100 extendBtn" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="Advanced">Advanced</a>
		</div>
	</div>
</div>

<div class="accordion" id="courseDetails">
	  <div class="card shadow-lg p-2">
		<div class="card-body" id="headingOne">
			  <h2 class="mb-0 text-center">
				<button style="font-size: 100%" id="detailsHeading" class="btn btn-lg lead" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
				 course details
				</button>
			</h2>
		</div>

		<div id="collapseOne" class="collapse" id="collapseShow" aria-labelledby="headingOne" data-parent="#courseDetails">
			<div class="card-body row pl-4">
					
				
				
				<ul class="col-lg-6 col-10 card-text lead text-dark mx-auto list-group list-group-flush px-3">
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Price:
						</p>
						<div class="col-8" id="coursePriceInfo">
							<p class="d-inline"id="coursePriceInfo">${currentCourse.price}</p><p class="d-inline ml-1">€</p>
						</div>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Duration:
						</p>
						<div class="col-8">
							<p class="d-inline"id="courseDurationInfo">${currentCourse.duration}</p><p class="d-inline ml-1">${renderWeeks(currentCourse.duration)}</p>
						</div>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Course times:
						</p>
						<div class="col-8">
							${currentCourse.times}
						</div>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Language:
						</p>
						<div class="col-8">
							${currentCourse.language}
						</div>
					</div>
				</li>
				<li class="list-group-item mx-auto w-100 text-center">
					<div class="row">
						<p class="col-4">
							Location:
						</p>
						<p class="col-8">
							${currentCourse.location}
						</p>
					</div>
				</li>				
			</ul>
			<div class="col-lg-6 col-10 card-text lead text-dark mx-auto px-3">
				<div class="mx-auto w-100 text-center">
					<p class="pt-2">
						Requirements:
					</p>
						${currentCourse.requirements}
				</div>
			</div>

			<div class="my-3 col-12">
				<p class="col-12 h2 text-center">
					Technologies
				</p>
				
			</div>
			
			<div class="col-12 row">

			<ul class="col-lg-5 offset-lg-1 col-10 card-text lead text-dark mx-auto list-group list-group-flush px-0 mb-2" id="frontEndTechList" style="display: none">	
			
				<div class="row text-center mb-2">
					<div class="my-1 h4 text-muted mx-auto" style="display: none;" id="frontEndHeading">Front-End</div>
				</div>
			</ul>

			<ul class="col-lg-5 offset-lg-1 col-10 card-text lead text-dark mx-auto list-group list-group-flush px-0 mb-3" id="backEndTechList" style="display: none">	
			
				<div class="row text-center mb-2">
					<div class="my-1 h4 text-muted mx-auto" style="display: none" id="backEndHeading">Back-End</div>
				</div>
			</ul>

			</div>

			<div class="col-12 row">
				<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
					<a class="btn btn-lg btn-dark active mx-auto p-2 px-4 w-100" href="" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="Advanced">Advanced</a>
				</div>
			</div>
		 </div>
		</div>
	  </div>
	</div>`

}
// ${(this.dataset.courseDifficulty).toUpperCase()}
function renderUsedCourseTech(){
	
	if(currentCourse.frontEndTech.length > 0){
		
			for(j=0; j < currentCourse.frontEndTech.length; j++){
			document.getElementById("frontEndTechList").innerHTML += `
				<li class="lead list-group-item text-center">
					${currentCourse.frontEndTech[j]}
				</li>`
		}
		document.getElementById("frontEndTechList").style.display = "block";
		document.getElementById("frontEndHeading").style.display = "block";

	}
	

	if(currentCourse.backEndTech.length > 0){

			for(j=0; j < currentCourse.backEndTech.length; j++){
			document.getElementById("backEndTechList").innerHTML += `
			<li class="lead list-group-item text-center">
					${currentCourse.backEndTech[j]}
				</li>`
		}	
		document.getElementById("backEndTechList").style.display = "block";
		document.getElementById("backEndHeading").style.display = "block";
	}
	// <div class="row text-center">
	//  				<div class="col-6 my-1 h4 text-muted mx-auto" style="display: none;" id="frontEndHeading">Front-End</div>
	// 			<div class="col-6 my-1 h4 text-muted mx-auto" style="display: none" id="backEndHeading">Back-End</div>
	// 			</div>
	
}

function addCourseBtnClick(){
	let eventBtns = document.querySelectorAll(".extendBtn");
	eventBtns.forEach(function(elem){
		elem.addEventListener("click", function(e){
			document.getElementById("courseDetails").style.display = "block";
			setTimeout(function(){
				document.getElementById("courseDetails").style.opacity = "1";
				setTimeout(function(){
					document.getElementById("collapseOne").className = "collapse show";
				}, 50)
			}, 50)
			$('html, body').animate({
                scrollTop: $(`#courseDetails`).offset().top
			}, 600);
			let courseVersion = e.target.dataset.coursedifficulty
			$('#detailsHeading').html(`${courseVersion} course`);
			if(courseVersion == "Advanced"){
				let priceInfo = document.getElementById("coursePriceInfo")
				priceInfo.innerHTML = parseFloat(currentCourse.price)*2+"€"
				let durationInfo = document.getElementById("courseDurationInfo")
				durationInfo.innerHTML = parseFloat(currentCourse.duration)*2
			}
			if(courseVersion == "Basic"){
				let priceInfo = document.getElementById("coursePriceInfo")
				priceInfo.innerHTML = parseFloat(currentCourse.price)+"€"
				let durationInfo = document.getElementById("courseDurationInfo")
				durationInfo.innerHTML = parseFloat(currentCourse.duration)
			}
			

		})
	})
}

function renderWeeks(duration){
	if (duration > 1){
		return "Weeks"
	}
	else{
		return "Week"
	}
}



