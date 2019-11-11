//-------------------------------------------Site Builder---------------------------------------------------
	$("title").text("The New Codefactory");
	$("body").append(`
		<header>header
			<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			</nav>
		</header>
		<main>
			hier liegt der hauptinhalt der seite, der von der navbar aus gelöscht und neubefüllt wird indem für die jeweilige unterseite eine function aufgerufen wird, die im jeweiligen seitenname.js liegt. Dafür müssen wir noch eine Namenskonvention festlegen.
		</main>
		<footer>&copy; J₂SR</footer>
	`);

//---------------------------------------End Site Builder---------------------------------------------------
