
function initNews() {
	renderNews();
}

function renderNews() {

	newsJson.forEach(function(news) {
		document.querySelector("main").innerHTML += `
		
		<div class="card-columns">

		  <div class="card">
			<img src="{news.picUrl}" class="card-img-top">
			<div class="card-body">
			  <h5 class="card-title">{news.title}</h5>
			  <p class="card-text">{news.text}</p>
			</div>
		  </div>
		  
		</div>
		
		`;
	});
}
