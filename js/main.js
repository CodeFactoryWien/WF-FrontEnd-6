//-------------------------------------------Daten bereitstellen--------------------------------------------
var menue = grabData("menue");
var news = grabData("news");
var course = grabData("course");


var menuArr = [["Home", "Course", "Team", "Contact", "News","Quiz"],["","Overview", "", "", "", ""],["🏠", "Courses", "Team", "Contact us", "News","Test your knowledge"]];

	for (let menueItem of menue){
		var script = document.createElement('script');
		script.onload = function () {};
		let fileName = menueItem.title.toLowerCase();
		script.src = "data/"+fileName+".json";
		script.type = "text/javascript";
		document.head.appendChild(script);	
	
		var script = document.createElement('script');
		script.onload = function () {};
		let fileName2 = menueItem.title.toLowerCase();
		script.src = "js/"+fileName2+".js";
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

//-------------------------------------ende-Daten bereitstellen--------------------------------------------
//-------------------------------------------Site Builder---------------------------------------------------
function initHome(){

	$("title").text("The New Codefactory");
	$("body").empty();
	$("body").append(`

		<header>
			<nav class="navbar navbar-expand-md navbar-dark fixed-top nav-colored nav-transparent" id="myNav">
			  <img class="logoj2sr navbar-brand" src="./img/j2sr_white_small.png">

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			    </ul>
			  </div>
			<p class="fixed-top offset-5 title-colored title-transparent" id="titlemove">Home</p>
			</nav>
		</header>

		<main class="container" id="mainDiv"></main>  

		<footer class="pt-4 mb-0  border-top" >
			<div class="container">
			    
	
<ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fa fa-facebook opacity"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fa fa-twitter opacity"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fa fa-google opacity"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fa fa-linkedin opacity"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fa fa-instagram opacity"> </i>
        </a>
      </li>
    </ul>

  </div>
  </div>
			</div>

  <!-- Copyright -->
  <div class="ft footer-copyright text-center py-3">© 2019 Copyright: J<sub>2</sub>RS GmbH
  </div>
  <!-- Copyright -->

			    
		</footer>
	`);
	home();
	navBuilder();
}
//---------------------------------------End Site Builder---------------------------------------------------
//-------------------------------------------Nav Builder----------------------------------------------------
function navBuilder(){
	for (let menueItem of menue){
		if(menueItem.sub == ""){
			$("nav ul").append(`
		   		<li class="nav-item" id="nav${menueItem.menueId}">
					<a class="nav-link">${menueItem.caption}</a>
		   		</li>
		   		`);

		   		$("#nav"+menueItem.menueId).on("click",function(e){
					tempId=($(this).attr("id")).slice(3);
		  			if(tempId<=1){
		  				$("header").css({height: "45vh", transition:"2s"});
		  			}else{
		  				$("header").css({height: "108px", transition:"2s"});
		  			};	
		  			$("main").empty();
					window['init'+menueItem.title](0);

		   		});
		}else{ // wenn untermenüs angefordert werden. aus dem menuetitel generiert zugriff auf die jsondatei und die elemente mit title gefunden
			$("nav ul").append(`
		   		<li class="nav-item dropdown" id="nav${menueItem.menueId}">

					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          ${menueItem.caption}
			        </a>
			        <div id="ddm${menueItem.menueId}" class="dropdown-menu" aria-labelledby="navbarDropdown">
			        	<a class="dropdown-item" id="course0">${menueItem.sub}</a>
			        	<div class="dropdown-divider"></div>
			        </div>
		   		</li>
					`);
					for (let item of course){
						$("#ddm"+menueItem.menueId).append(`
							<a class="dropdown-item" id="course${item.id}">${item.title}</a>
						`);
					}
					$("#ddm"+menueItem.menueId+" .dropdown-item").on("click", function(e){
			 			$("main").empty();
						tempId=($(this).attr("id"));
						tempId=parseInt(tempId.slice(6));
							  			if(tempId<=1){
				  				$("header").css({height: "45vh", transition:"2s"});
				  			}else{
				  				$("header").css({height: "108px", transition:"2s"});
				  			}
						initCourse(tempId)
						console.log(tempId);
					});
		   		

	$("header").css({height: "45vh", transition:"2s"});
}
//---------------------------------------End-Nav Builder---------------------------------------------------
//---------------------------------------Needfull Things---------------------------------------------------
function grabData(name){
	var name = JSON.stringify(window[name+"Json"]);
	name = JSON.parse(name);
	name.splice(0,1);
	return name;
}
//--------------------------------end----Needfull Things---------------------------------------------------
