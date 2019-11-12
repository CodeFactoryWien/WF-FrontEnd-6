//---------------------------------------Contact------Builder--------------------------------------------------
function initCourse(){
	renderCourse()
}	

//---------------------------------------End contact Builder---------------------------------------------------
function renderCourse(){

	document.querySelector("main").innerHTML = `
	<div class="card my-4 shadow-lg rounded pt-3 border">
		<img class="card-img-top mx-auto img-fluid shadow rounded" src="./img/course/frontend.jpg" data-holder-rendered="true" style="width: 18.5rem; display: block;">
		<div class="card-body pt-0 row">
			<div class="col-12 display-4 text-dark px-0 pt-0 pb-1 my-4">
				<p class="col text-center p-1 my-0 mx-auto">Full Stack Web Developer</p>
			</div>
			<p class="col-12 col-md-9 card-text lead text-dark px-4 mx-auto" style="line-height: 1.5">Der CodeFactory Full Stack Web Developer Lehrgang bereitet dich auf deinen vielfältigen Einsatz als Junior Web Developer vor. Du lernst von Back-End über Front-End Anwendungen die gängigsten Programmiersprachen und Frameworks kennen und einsetzen, wie z.B. Angular, PHP, WordPress, HTML, CSS, jQuery und JavaScript. Als Full Stack Web Developer verfügst du über umfassende Kenntnisse im Bereich Softwareentwicklung und beherrschst aktuell relevante Programmiersprachen. Dadurch kannst du in der Web- aber auch in der Softwareentwicklung tätig sein. Als Generalist kannst du mit deinen Coding-Fähigkeiten fast jede Aufgabe lösen und arbeitest oft eng mit Projektleitungen zusammen, indem du dich um Anforderungsmanagement, Software- und Test-Planung sowie um Programmiertätigkeiten kümmerst.</p>
			<p class="col-12 text-center h3 lead text-dark card-text">Choose your level</p>
			<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
				<a class="btn btn-dark text-success btn-lg active mx-auto p-2 px-4 w-100 placeBtn" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em">Basic</a>
			</div>
			<div class="col-10 col-md-7 col-lg-4 mx-auto my-2 mt-lg-5 row">
				<a class="btn btn-secondar
				text-danger btn-lg btn-dark active mx-auto p-2 px-4 w-100 eventBtn" role="button" aria-pressed="true" style="letter-spacing: 2px; font-size: 1.5em">Advanced</a>
			</div>
		</div>
	</div>
	
	<div class="accordion" id="courseDetails">
  		<div class="card">
    		<div class="card-body" id="headingOne">
      			<h2 class="mb-0">
        			<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          			Basic
					</button>
				</h2>
			</div>

    		<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#courseDetails">
      			<div class="card-body">
        			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      			</div>
    		</div>
  		</div>
	</div>`
	
	
	
	
	
	
	
	
}