
function initContact() {
	renderContact();
}

function renderContact() {
	
	document.querySelector("main").innerHTML = `
		<div class="container p-5">
			<table>
				<tr>
					<td><strong>LOGO</strong></td>
				</tr>
				
				<tr>
					<td><i class="fas fa-map-marker-alt"></i></td>
					<td>1150 Wien, Kettenbrückengasse 23/2/12</td>
				</tr>

				<tr>
					<td><i class="fas fa-phone"></i></td>
					<td>+43 699 12255185</td>
				</tr>

				<tr>
					<td><i class="fas fa-envelope"></i></td>
					<td><a href="office@j2rs.at" style="color: blue">office@j2rs.at</a></td>
				</tr>
				
				<tr>
					<td><i class="fas fa-home"></i></td>
					<td><a href="https://codefactory.wien/" style="color: blue">https://codefactory.wien/</a></td>
				</tr>
				</table>
			
				<div class="accordion" id="accordionExample">
					<button class="btn collapsed p-0" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
					  <i class="fas fa-clock"></i> <strong class=" ml-4">Open hours</strong><br>
					</button>
				</div>
				
				<div id="collapse" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
					<table class="table ml-5" width="30%">
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
			</div>
		</div>
			
			`
}

