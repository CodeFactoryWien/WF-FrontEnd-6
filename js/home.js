//-------------------------------------------Daten bereitstellen--------------------------------------------
	var news = JSON.stringify(newsJson);
	news = JSON.parse(news);
	news.splice(0,1);

	var courses = JSON.stringify(coursesJSON);
	courses = JSON.parse(courses);
	courses.splice(0,1);


//---------------------------------------Main Content Builder-----------------------------------------------
function home(){
	$("main").append(`
			<div class="container-marketing">
				<div class="row">
					<div class="col-md-4">
						<h4>In 15 Wochen zum Juniordeveloper</h4>
						<p>Lerne in nur 15 Wochen alles über Web-Entwicklung und IT was Du zum Berufseinstieg brauchst. Vom ersten Tag „hands-on“ an Praxisbeispielen arbeiten!</p>
					</div>
					<div class="col-md-4">
						<h4>Hands-on learning vom ersten Tag</h4>
						<p>All unsere Kurse zeichnen sich durch ein Maximum an praktischem Arbeiten aus. Wir glauben, dass man Programmieren nur durch Programmieren lernen kann. Deshalb wird bei uns von Tag eins an in Zweierteams und Gruppen an projektbezogenen Aufgaben gearbeitet.</p>
					</div>
					<div class="col-md-4">
						<h4>Sammle Erfahrungen in realen Kundenprojekten</h4>
						<p>Die Abschlussprojekte unserer Schüler stammen von realen Kunden, von der NGO bis zum mittelgroßen Unternehmen. Mit diesen Referenzen und Arbeitszeugnissen im Portfolio fällt der Berufseinstieg leicht.</p>
					</div>
				</div>
			</div>
			<div class="container-marketing">
				<div class="row">
					<div class="col-sm-9 col-md-9" id="courses"></div>
					<div class="col-sm-3 col-md-3" id="news"></div>
				</div>
			</div>

		`)

newsFeed();
courseFeed();

};

//--------------------------------------- insert News -----------------------------------------------
function newsFeed(){
	$("#news").append(`
		<h3 class=" text-light mt-2 rounded text-center"> codingnews </h3>
		<div class="card-deck" id="newsDeck">
		</div>
		`)
	for(let article of news){
		newsCardBuilder(article);
	};
	$(".card-news-item").on("click",function(e){
		alert("link zu "+ $(this).attr("id"))
		//function($(this).attr("name"));
	})

}

function newsCardBuilder(article){
	redText = article.text.slice(0,70);
	$("#newsDeck").append(`
		<div id="article${article.newsId} class="col-12 ">
			<div class="card shadow mb-4">
				<div class="card-body">
				    <h4 class="card-title">${article.title}</h4>
				    <p class="card-text">${redText}</p>
				    <p class="btn btn-light  card-news-item" id="news${article.newsId}">read more</p>
				</div>
			 </div>
		</div>
		`)

}
//--------------------------------------- insert Courses -----------------------------------------------
function courseFeed(){
	$("#courses").append(`
		<h3 class=" text-light mt-2 rounded text-center"> Courses </h3>
		<div class="card-deck" id="courseDeck">
		</div>
		`)
	for(let course of courses){
		courseCardBuilder(course);
	};
	$(".card-course-item").on("click",function(e){
		alert("link zu "+ $(this).attr("id"))
		//function($(this).attr("name"));
	})

}
function courseCardBuilder(course){

	$("#courseDeck").append(`
		<div id="article${course.id}" class="col-12 col-sm-6 ">
			<div class="card shadow mb-4">
				<img class="card-img-top" src="${course.image}" alt="${course.name}">
				<div class="card-body">
				    <h4 class="card-title">${course.name}</h4>
				    <p class="card-text">${course.price}</p>
				    <p class="btn btn-secondary  card-course-item" id="course${course.id}">read more</p>
				</div>
			 </div>
		</div>
		`)


}