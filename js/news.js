
function initNews() {
	renderNews();
}

function renderNews() {


document.querySelector("main").innerHTML += `
<h3>NEWS</h3>
<div class="card-columns"></div>`;

	newsJson.forEach(function(news) {
		document.querySelector(".card-columns").innerHTML += `
		
		  <div class="card shadow">
			<img src="${news.picUrl}" class="card-img-top" width="100%" height="auto" style="object-fit: cover">
			<div class="card-body">
			  <h5 class="card-title">${news.title}</h5>
			  <p class="card-text">${news.text}</p>
			</div>
		  </div>
		`;
	});
}
