//-------------------------------------------Daten bereitstellen--------------------------------------------
	news = JSON.stringify(newsJson);
	news = JSON.parse(news);
	news.splice(0,1);



//---------------------------------------Main Content Builder-----------------------------------------------
function home(){
	$("main").append(`
			<div class="container-marketing">
				<div class="row">
					<div class="col-md-4">
						<h3>In 15 Wochen zum Juniordeveloper</h3>
						<p>Lerne in nur 15 Wochen alles über Web-Entwicklung und IT was Du zum Berufseinstieg brauchst. Vom ersten Tag „hands-on“ an Praxisbeispielen arbeiten!</p>
					</div>
					<div class="col-md-4">
						<h3>Hands-on learning vom ersten Tag</h3>
						<p>All unsere Kurse zeichnen sich durch ein Maximum an praktischem Arbeiten aus. Wir glauben, dass man Programmieren nur durch Programmieren lernen kann. Deshalb wird bei uns von Tag eins an in Zweierteams und Gruppen an projektbezogenen Aufgaben gearbeitet.</p>
					</div>
					<div class="col-md-4">
						<h3>Sammle Erfahrungen in realen Kundenprojekten</h3>
						<p>Die Abschlussprojekte unserer Schüler stammen von realen Kunden, von der NGO bis zum mittelgroßen Unternehmen. Mit diesen Referenzen und Arbeitszeugnissen im Portfolio fällt der Berufseinstieg leicht.</p>
					</div>
				</div>
			</div>
			<div class="container-marketing">
				<div class="row">
					<div class="col-10" id="courses">					courses					</div>
					<div class="col-2" id="news"></div>
				</div>
			</div>

		`)

newsFeed();

};

//--------------------------------------- insert News -----------------------------------------------
function newsFeed(){
	$("#news").append(`
		<h3> coding news </h3>
		<div class="card-deck" id="newsDeck">
		</div>
		`)
	for(let article of news){
		newsCardBuilder(article);
	};
}

function newsCardBuilder(article){
	redText = article.text.slice(0,70);
	$("#newsDeck").append(`
		<div id="article${article.newsId}"
			<div class="card">
				<div class="card-body">
				    <h4 class="card-title">${article.title}</h4>
				    <p class="card-text">${redText}</p>
				    <p class="btn btn-secondary  card-news-item" id="news${article.newsId}">read more</p>
				</div>
			 </div>
		</div>
		`)
	$(".card-news-item").on("click",function(e){
		alert("link zu "+ $(this).attr("id"))
		//function($(this).attr("name"));
	})

}
//--------------------------------------- insert Courses -----------------------------------------------
function courseFeed(){
	$("#news").append(`
		<h3> coding news </h3>
		<div class="card-deck" id="courseDeck">
		</div>
		`)
	for(let course of news){
		newsCardBuilder(article);
	};
}