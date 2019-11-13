
function initNews(card_id) { renderNews(card_id); }

function renderNews(card_id) {
	
	document.querySelector("main").innerHTML = `
	<h1 class=" text-light mt-2 rounded text-center">NEWS</h1>
	<div class="card-columns"></div>`;

	newsJson.forEach(function(news) {
		document.querySelector(".card-columns").innerHTML += `
		  <div class="card shadow" id="${news.newsId}">
			<img src="${news.picUrl}" class="card-img-top" width="100%" height="auto" style="object-fit: cover">
			<div class="card-body">
			  <a href="${news.link}" target="_blank"><h5 class="card-title">${news.title}</h5></a>
			  <p class="card-text">${news.text}</p>
			</div>
		  </div>
		`;
	});

	for(i=0; i<newsJson.length; i++){
		if(card_id == news.newsId) {
			document.getElementById(news.newsId).classList.add("active");
			
				$("html, body").animate({
					scrollTop: $(".active").offset().top
				}, 600);
		}
	}
}

