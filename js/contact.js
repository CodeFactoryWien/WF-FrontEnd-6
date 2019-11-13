
function initContact() {
	renderContact();
}

function renderContact() {
	
document.querySelector("main").innerHTML = `
<h1 class="text-light mt-2 rounded text-center">CONTACT</h1>

<div class="container box">
	<table class="mx-auto" width="auto"
		<tr>
			<td>img src="img/ alt="theo"></td>
		</tr>

		<tr>
			<td><i class="fas fa-map-marker-alt"></i></td>
			<td class="lead"><strong>HEADQUATER</strong> 1050 Wien, Kettenbrückengasse 23/2/12</td>
		</tr>

		<tr>
			<td></td>
			<td class="lead pb-3"><strong>DEPARTMENT</strong> 1150 Wien, Stutterheimstrasse 16-18, Stiege 3,Top 17b</td>
		</tr>

		
		<tr>
			<td><i class="fas fa-phone"></i></td>
			<td class="lead">+43 699 12255185</td>
		</tr>

		<tr>
			<td><i class="fas fa-envelope"></i></td>
			<td class="lead"><a href="office@j2rs.at" style="color: blue">office@j2rs.at</a></td>
		</tr>

		<tr>
			<td><i class="fas fa-home"></i></td>
			<td class="lead"><a href="https://codefactory.wien/" style="color: blue">https://codefactory.wien/</a></td>
		</tr>
		
		<!-- OPEN HOURS -->
		<tr>
			<td><i class="fas fa-clock"></i></td>
			<td>
				<div class="accordion" id="accordionExample">
					<button class="btn collapsed p-0" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
						<strong class="lead"><strong>OPEN HOURS</strong><br>
					</button>
				</div>
			</td>
		</tr>
				
		<tr>
			<td></td>
			<td>
				<div id="collapse" class="collapse" aria-labelledby="heading" data-parent="#accordionExample">
					<table class="table table-small table-sm">
						<tr>
							<th scope="col float-right m-2" style="text-align: right">Monday</th>
							<td scope="col float-center m-2" style="text-align: center">09:00 - 17:00</td>
						</tr>

						<tr>
							<th scope="col" style="text-align: right">Tuesday</th>
							<td scope="col" style="text-align: center">09:00 - 17:00</td>
						</tr>

						<tr>
							<th scope="col" style="text-align: right">Wednesday</th>
							<td scope="col" style="text-align: center">09:00 - 17:00</td>
						</tr>

						<tr>
							<th scope="col" style="text-align: right">Thursday</th>
							<td scope="col" style="text-align: center">09:00 - 17:00</td>
						</tr>

						<tr>
							<th scope="col" style="text-align: right">Friday</th>
							<td scope="col" style="text-align: center">09:00 - 15:30</td>
						</tr>

						<tr>
							<th scope="col" style="text-align: right">Saturday</th>
							<td scope="col" style="text-align: center">closed</td>
						</tr>

						<tr>
							<th scope="col" style="text-align: right">Sunday</th>
							<td scope="col" style="text-align: center">closed</td>
						</tr>
					</table>			
				</div>
			</td>
		</tr>

	</table>
	
	<center>
		<iframe class="shadow bg-white rounded" width="100%" height="400px" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10638.112420921236!2d16.359416!3d48.196443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe543f0731e2b5529!2sCodeFactory!5e0!3m2!1sde!2sat!4v1573477257105!5m2!1sde!2sat" allowfullscreen=""></iframe>
	</center>

	<!-- MESSAGE -->
	<hr>
	<div>
		<form>
			<h4>LEAVE A MESSAGE</h4>
			<div class="form-group">
				<label for="exampleInputName">Name*</label>
				<div class="form-row">
					<div class="col">
						<input type="text" class="form-control" placeholder="First name" required>
					</div>
					
					<div class="col">
						<input type="text" class="form-control" placeholder="Last name" required>
					</div>
				</div>
			</div>

			<div class="form-group">
				<label for="exampleInputEmail1">Email address*</label>
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
				<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>

			<div class="form-group">
				<label for="exampleInputPhone">Phone*</label>
				<input type="text" class="form-control" id="exampleInputPhone" required>
			</div>
			
			<div class="custom-control custom-checkbox">
			  <input type="checkbox" class="custom-control-input" id="customCheck1" required>
			  <small class="form-text text-muted custom-control-label mb-3" for="customCheck1">Please call back</small>
			</div>
			
			<div class="form-group">
				<label for="exampleFormControlTextarea1">Message*</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
			</div>
			<small class="form-text text-muted">* Required Fields</small>
			<button type="submit" class="btn btn-dark btn-block mt-2 opacity" style="border: none">SEND MESSAGE</button>
		</form>
	</div>
	<hr>
	
	<!-- SOCIAL MEDIA ICONS -->
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

