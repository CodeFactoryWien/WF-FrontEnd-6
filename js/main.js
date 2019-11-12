//-------------------------------------------Daten bereitstellen--------------------------------------------
    var menuArr = [["Home", "Course", "Contact", "Team","News"],[]];
    window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('myNav');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('nav-colored');
                nav.classList.remove('nav-transparent');
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            }
    })
   	for (i = 0; i < menuArr[0].length; i++) {
				var script = document.createElement('script');
				script.onload = function () {};
				let path = menuArr[0][i].toLowerCase();
				script.src = "data/"+path+".json";
				script.type = "text/javascript";
				document.head.appendChild(script);
				console.log(script)
	};


initHome();


//-------------------------------------------Daten bereitstellen--------------------------------------------
//-------------------------------------------Site Builder---------------------------------------------------
function initHome(){
	$("title").text("The New Codefactory");
	$("body").empty();
	$("body").append(`
		<header>
			<nav class="navbar navbar-expand-lg navbar-dark fixed-top nav-colored nav-transparent" id="myNav">
			  <p class="navbar-brand" href="index.html">J₂SR</p>

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			    </ul>
			  </div>
			</nav>
		</header>
		<main class="container"></main>  
		<footer class="p-4  border-top" >
			<div class="row">
			    <div class="col col-6-md">
					<p>J₂S</p>
					&copy; 2019
			    </div>
			    <div class="col col-6-md">
			      	<ul>
						<li> irgendwas</li>
						<li> irgendwas</li>
			      	</ul>
			    </div>
			    <div class="col col-6-md">
			      	
			    </div>
			</div>
		</footer>
	`);
navBuilder();
}
//---------------------------------------End Site Builder---------------------------------------------------
//-------------------------------------------Nav Builder----------------------------------------------------
function navBuilder(){
	for (i = 0; i < menuArr[0].length; i++) {
	   	$("nav ul").append(`
	   		<li class="nav-item" id="nav${i}">
				<a class="nav-link" >${menuArr[0][i]}</a>
	   		</li>
	   		`)

				var script = document.createElement('script');
				script.onload = function () {};
				let path = menuArr[0][i].toLowerCase();
				script.src = "js/"+path+".js";
				script.type = "text/javascript";
				document.head.appendChild(script);

	   		$("#nav"+i).on("click",function(e){
				tempId=($(this).attr("id")).slice(3);
	  			$("main").empty();
				window['init'+menuArr[0][tempId]]();

	  			if(tempId==0){
	  				$("header").css({height: "45vh", transition:"2s"});
	  			}else{
	  				$("header").css({height: "15vh", transition:"2s"});
	  			}	
	   		});
	}
	home();
}
//---------------------------------------End-Nav Builder---------------------------------------------------
