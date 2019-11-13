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
			<div class="container-marketing mt-2">
				<div class="row">
					<div class="col-md-4">
						<h4>In 15 weeks to junior developer level</h4>
						<p>Learn everything you need about Frontend and Backend development in just 15 weeks to get your new career started. Work hands-on and with practical examples from the first day!</p>
					</div>
					<div class="col-md-4">
						<h4>Hands-on learning</h4>
						<p>The relatively short duration of just 15 weeks is made possible by a maximum of practical work. We believe that programming can only be learned through the act, which is why we program from day one in teams of two or larger group, solving practical problems.</p>
					</div>
					<div class="col-md-4">
						<h4>Gain experience in real world projects</h4>
						<p>Many of our graduate projects are issued by real clients, ranging from NGOs to medium-sized companies. The start of your new career gets a huge boost with those references in your portfolio!</p>
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
		<h1 class=" text-light mt-2 rounded text-center"> NEWS </h1>
		<div class="card-deck" id="newsDeck">
		</div>
		`)
	for(let article of news){
		newsCardBuilder(article);
	};
	$(".card-news-item").on("click",function(e){
		// tempId=($(this).attr("id"));
		// tempId=parseInt(tempId.slice(6));
		// initNews(tempId)
		alert("link zu "+ $(this).attr("id"))
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
		<h1 class=" text-light mt-2 rounded text-center"> COURSES </h1>
		<div class="card-deck" id="courseDeck">
		</div>
		`)
	for(let course of courses){
		courseCardBuilder(course);
	};
	$(".card-course-item").on("click",function(e){
			tempId=($(this).attr("id"));
			tempId=parseInt(tempId.slice(6));
			initCourse(tempId);
		//alert("link zu "+ $(this).attr("id"))
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