
function initContact() {
	renderContact();
}

function renderContact() {
	
	document.querySelector("main").innerHTML = `
			<address>
				<strong>Logo</strong><br>
				Kettenbrückengasse 23/2/12<br>
				1150 Wien<br>
				+43 699 12255185<br>
				<a href="office@j2rs.at" style="color: blue">office@j2rs.at</a><br>
				<a href="https://codefactory.wien/">https://codefactory.wien/</a><br>
			</address>
		
			<div class="bd-example">
			  <details>
				<summary><strong>OPEN HOURS</strong></summary>
				<table class="table" width="60%">
					<tr>
						<th scope="col">Monday</th>
						<td scope="col">09:00 - 17:00</td>
					</tr>

					<tr>
						<th scope="col">Tuesday</th>
						<td scope="col">09:00 - 17:00</td>
					</tr>
					
					<tr>
						<th scope="col">Wednesday</th>
						<td scope="col">09:00 - 17:00</td>
					</tr>
					
					<tr>
						<th scope="col">Thursday</th>
						<td scope="col">09:00 - 17:00</td>
					</tr>
					
					<tr>
						<th scope="col">Friday</th>
						<td scope="col">09:00 - 15:30</td>
					</tr>
					
					<tr>
						<th scope="col">Saturday</th>
						<td scope="col">closed</td>
					</tr>
					
					<tr>
						<th scope="col">Sunday</th>
						<td scope="col">closed</td>
					</tr>
				</table>			
			  </details>
			</div>

			<center>
				<iframe class="shadow mb-5 bg-white rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10638.112420921236!2d16.359416!3d48.196443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe543f0731e2b5529!2sCodeFactory!5e0!3m2!1sde!2sat!4v1573477257105!5m2!1sde!2sat" width="500" height="400" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
			</center>
			
			<div class="center">
				<a href="https://www.facebook.com" class="fa fa-facebook opacity"></a>
				<a href="https://twitter.com/" class="fa fa-twitter opacity"></a>
				<a href="https://myaccount.google.com" class="fa fa-google opacity"></a>
				<a href="https://at.linkedin.com/" class="fa fa-linkedin opacity"></a>
				<a href="https://www.instagram.com/" class="fa fa-instagram opacity"></a>
			</div>`
}

