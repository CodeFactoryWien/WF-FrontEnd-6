//---------------------------------------Contact------Builder--------------------------------------------------

function initCourse(id){
	 if(id == 0){
		renderCourses();
	 }
	 else{
		renderCourse(id);
	 }	
}	

//---------------------------------------End contact Builder---------------------------------------------------
function renderCourse(id){
	let currentCourse;
	for(i=0; i<courseJson.length; i++){

		if(id === parseInt(courseJson[i].id) && isNaN(id) == false){
			currentCourse = courseJson[i];
			break;
		}

	}

	document.querySelector("main").innerHTML = `
	<div class="card my-4 shadow-lg rounded pt-3 border">
	<img class="card-img-top mx-auto img-fluid shadow rounded" src="${currentCourse.image}" data-holder-rendered="true" style="width: 18.5rem; display: block;">
	<div class="card-body pt-0 row">
		<div class="col-12   px-0 pt-0 pb-1 my-4">
			<h1 class="col text-light text-center rounded">${currentCourse.title}</h1>
		</div>
		<p class="col-12 col-md-9 card-text lead text-dark px-4 mx-auto" style="line-height: 1.5">${currentCourse.description}</p>
		<p class="col-12 h-3 text-center lead font-weight-bold text-dark">Choose your level</p>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 row">
			<a class="btn btn-dark text-success btn-lg mx-auto p-2 px-4 w-100 extendBtn" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="BASIC">Basic</a>
		</div>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 row">
			<a class="btn text-danger btn-lg btn-dark mx-auto p-2 px-4 w-100 extendBtn" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseDifficulty="ADVANCED">Advanced</a>
		</div>
		<p class="col-12 h-3 text-center lead font-weight-bold text-dark mt-3">Not sure about your level of expertise? Try our quiz!</p>
		<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 row">
			<a class="btn text-light btn-lg btn-dark mx-auto p-2 px-4 w-100" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em" data-courseID="${currentCourse.id}">Try it!</a>
		</div>
	</div>
</div>

<div class="accordion" id="courseDetails">
	  <div class="card shadow-lg p-2">
		<div class="card-body" id="headingOne">
			  <h1 class=" text-center rounded">
				<button style="font-size: 100%" id="detailsHeading" class="btn btn-lg text-light py-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
				 course details
				</button>
			</h1>
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
				<h1 class="col-12 text-light rounded text-center">
					TECHNOLOGIES
				</h1>
				
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
					<a class="btn btn-lg btn-dark mx-auto p-2 px-4 w-100" href="${currentCourse.registrationLink}" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em">Book Now</a>
				</div>
			</div>
		 </div>
		</div>
	  </div>
	</div>`
	renderUsedCourseTech(currentCourse);
	addCourseBtnClick(currentCourse);

}

function renderUsedCourseTech(currentCourse){
	
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
}

function addCourseBtnClick(currentCourse){
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
                scrollTop: $(`#courseDetails`).offset().top-120
			}, 600);
			let courseVersion = e.target.dataset.coursedifficulty
			$('#detailsHeading').html(`${courseVersion} COURSE`);
			if(courseVersion == "ADVANCED"){
				let priceInfo = document.getElementById("coursePriceInfo")
				priceInfo.innerHTML = parseFloat(currentCourse.price)*2+"€"
				let durationInfo = document.getElementById("courseDurationInfo")
				durationInfo.innerHTML = parseFloat(currentCourse.duration)*2
			}
			if(courseVersion == "BASIC"){
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

function renderCourses(){
	
		$("main").append(`
		
			<div class="row">
				<div class="col-11 mx-auto my-2 card shadow-lg" id="courses">
					<h1 class=" text-light mt-2 rounded text-center"> COURSES </h1>
					<div class="card-deck justify-content-center" id="courseDeck">
					</div>
				</div>
			</div>
		
			`)
		for(let cours of course){
			courseBuilder(cours);
		};

		let courseBtns = document.querySelectorAll("u[id^=article]")
		courseBtns.forEach(function(elem){
			elem.addEventListener("click", function(e){
				console.log("hhhh")
				let nextCourseId = e.target.id.substring(7,8)
				console.log(nextCourseId)
				renderCourse(parseInt(nextCourseId));
			})
		})
	}
	function courseBuilder(course){
	
		$("#courseDeck").append(`
			<div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch text-center">
				<div class="card shadow mb-4 shadow">
					<img class="card-img-top shadow" src="${course.image}" alt="${course.title}">
					<div class="card-body shadow">
						<h4 class="card-title card-link"><u id="article${course.id}">${course.title}</u></h4>
					</div>
				 </div>
			</div>
			`)	
	}




