<template>
	<div class="background-white">
			<div id="profile" class="container">
				<h2>Profile</h2>
<p class="lead">I'm a creative developer</p>

<hr>

<div class="row">
	<div class="col-md-4">
		<h3>About me</h3>
		<p>
		I am an allround developer with good knowledge of development techniques. I love structure and order and I also stand for quality.</br>I spend most of my time on fixing little details and optimizing apps. Also I like working in a team, learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
	</div>
	<div class="col-md-4 text-center">
		<img src="../assets/yigitalpunal.png" alt="Yigit Alp Unal" width="246" height="246">
	</div>
	<div class="col-md-4 vueapp">
		<h3>Details</h3>
		<p>
			<strong>Name:</strong><br>
			Yiğit Alp Ünal<br>
			<strong>Age:</strong><br></p>
			<p id="age"></p>
			<p><strong>Location:</strong><br>
			Istanbul, Turkey, Earth		</p>
		
	</div>
</div>

			</div>	
		</div>

</template>

<script>
$(document).ready(function(){
var birthdate = new Date("1993/1/1");
var cur = new Date();
var diff = cur-birthdate;
var age = Math.floor(diff/31536000000);
document.getElementById('age').innerHTML = age +" years"; 
})

</script>

<style type="text/css">
	
</style>