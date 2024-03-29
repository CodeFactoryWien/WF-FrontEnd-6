
function initNews(card_id) {
	renderNews(card_id);
}

function renderNews(card_id) {
	document.querySelector("main").innerHTML = `
	<h1 class=" text-light rounded text-center">NEWS</h1>
		<div class="card-columns"></div>`;

	newsJson.forEach(function(news) {
		document.querySelector(".card-columns").innerHTML += `
		  <div class="card shadow x" id="${news.newsId}">
			<img src="${news.picUrl}" class="card-img-top img" width="100%" height="auto" style="object-fit: cover">
			<div class="card-body">
			  <a href="${news.link}" target="_blank"><h5 class="card-title">${news.title}</h5></a>
			  <p class="card-text">${news.text}</p>
			</div>
		  </div>
		`;
	});

	for(i=1; i<newsJson.length; i++){
		if(card_id == newsJson[i].newsId) {
			document.getElementById(newsJson[i].newsId).classList.add("active");
			setTimeout(function(){
				$("html, body").animate({
				scrollTop: $(".active").offset().top-140
			}, 600);
			}, 300);
			
			setTimeout(function() { document.querySelector(".active").classList.remove("active"); }, 3000);
		}
	}
	
}

