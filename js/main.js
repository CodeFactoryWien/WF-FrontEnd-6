//-------------------------------------------Site Builder---------------------------------------------------
	$("title").text("The New Codefactory");
	$("body").append(`
		<header>
			<nav class="navbar navbar-expand-lg navbar-light fixed-top">
			  <a class="navbar-brand" href="#">Navbar</a>

			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
			        <a class="nav-link" href="#">Home</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		</header>
		<main>
			hier liegt der hauptinhalt der seite, der von der navbar aus gelöscht und neubefüllt wird indem für die jeweilige unterseite eine function aufgerufen wird, die im jeweiligen seitenname.js liegt. Dafür müssen wir noch eine Namenskonvention festlegen.
		</main>
		<footer>&copy; J₂SR</footer>
	`);

//---------------------------------------End Site Builder---------------------------------------------------
