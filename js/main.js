//-------------------------------------------Daten bereitstellen--------------------------------------------
    var menuArr = [["Home", "Course", "Contact", "Team","News"],["index.js","course.js","contact.js","team.js","news.js"]];



//-------------------------------------------Daten bereitstellen--------------------------------------------
//-------------------------------------------Site Builder---------------------------------------------------
	$("title").text("The New Codefactory");
	$("body").append(`
		<header>
			<nav class="navbar navbar-expand-lg navbar-light fixed-top">
			  <a class="navbar-brand" href="#">J₂SR</a>

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			    </ul>
			  </div>
			</nav>
		</header>
		<main class="container">
			hier liegt der hauptinhalt der seite, der von der navbar aus gelöscht und neubefüllt wird indem für die jeweilige unterseite eine function aufgerufen wird, die im jeweiligen seitenname.js liegt. Dafür müssen wir noch eine Namenskonvention festlegen.
		</main>
		<footer>&copy; J₂SR</footer>
	`);

//---------------------------------------End Site Builder---------------------------------------------------
//-------------------------------------------Nav Builder---------------------------------------------------_
for (i = 0; i < menuArr[0].length; i++) {
   	$("nav ul").append(`
   		<li class="nav-item" id="nav${i}">
			<a class="nav-link" >${menuArr[0][i]}</a>
   		</li>
   		`)

	   	if(i>0){
			var script = document.createElement('script');
			script.onload = function () {
			};
			script.src = "js/"+menuArr[1][i];
			script.type = "text/javascript";
			console.log(script)
			document.head.appendChild(script);
		}

   		$("#nav"+i).on("click",function(e){
			tempId=($(this).attr("id")).slice(3);

			//$("body").append(`<script src="js/${menuArr[1][tempId]}" type="text/javascript" charset="utf-8" async defer></script>`);


   			$("main").empty();

   			window['init'+menuArr[0][tempId]]();
			
   		});
}


//---------------------------------------End-Nav Builder---------------------------------------------------_