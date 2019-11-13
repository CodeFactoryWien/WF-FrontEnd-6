//-------------------------------------------Daten bereitstellen--------------------------------------------
    var menuArr = [["Home", "Course", "Team", "Contact", "News","Quiz"],[false,true, false, false, false, false],["⌂", "Courses", "Team", "get in contact", "News","Test your knowledge"]];
   	for (i = 0; i < menuArr[0].length; i++) {
				var script = document.createElement('script');
				script.onload = function () {};
				let path = menuArr[0][i].toLowerCase();
				script.src = "data/"+path+".json";
				script.type = "text/javascript";
				document.head.appendChild(script);
	};


initHome();
    window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('myNav');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('nav-colored');
                nav.classList.remove('nav-transparent');
                $("#navbarSupportedContent").attr("aria-expanded","false");
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            }
    })


//-------------------------------------------Daten bereitstellen--------------------------------------------
//-------------------------------------------Site Builder---------------------------------------------------
function initHome(){
	$("title").text("The New Codefactory");
	$("body").empty();
	$("body").append(`
		<header>
			<nav class="navbar navbar-expand-sm navbar-dark fixed-top nav-colored nav-transparent" id="myNav">
			  <img class="logoj2sr navbar-brand" src="./img/j2sr_white_small.png">

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			    </ul>
			  </div>
			</nav>
		</header>
		<main class="container" id="mainDiv"></main>  
		<footer class="p-4  border-top" >
			<div class="row">
			    <div class="col col-6-md">
					<p>J₂S</p>
					&copy; 2019
			    </div>
			    <div class="col col-6-md">
			      	<iframe width="320" height="180" src="https://www.youtube.com/embed/eHS0TGC_Izg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			    </div>
			    <div class="col col-6-md">
			      	<ul>
						<li> irgendwas</li>
						<li> irgendwas</li>
			      	</ul>
			    </div>
			</div>
		</footer>
	`);
	home();
	navBuilder();
}
//---------------------------------------End Site Builder---------------------------------------------------
//-------------------------------------------Nav Builder----------------------------------------------------
function navBuilder(){
	for (i = 0; i < menuArr[0].length; i++) {
	   	$("nav ul").append(`
	   		<li class="nav-item" id="nav${i}">
				<a class="nav-link" id="m-${menuArr[0][i]}">${menuArr[2][i]}</a>
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

	  			if(tempId<=1){
	  				$("header").css({height: "45vh", transition:"2s"});
	  			}else{
	  				$("header").css({height: "108px", transition:"2s"});
	  			}	
	  			$("main").empty();
				window['init'+menuArr[0][tempId]]();

	   		}).scrollTop();
	}
	$("#nav1").empty().off('click').addClass("dropdown").append(`
		 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${menuArr[0][1]}
        </a>
        <div id="dd-course" class="dropdown-menu" aria-labelledby="navbarDropdown">
        </div>
		`)
	for (let item of courses){
		$("#dd-course").append(`
			<a class="dropdown-item" id="course${item.id}" >${item.name}</a>
		`)
	}
	$("#dd-course .dropdown-item").on("click", function(e){
 			$("main").empty();
			tempId=($(this).attr("id"));
			tempId=parseInt(tempId.slice(6));
			initCourse(tempId)
			console.log(tempId)
			//alert(tempId);
		})


	$("header").css({height: "45vh", transition:"2s"});
}
//---------------------------------------End-Nav Builder---------------------------------------------------
