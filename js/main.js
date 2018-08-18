
const one = {
	template: `<div class="text center">
		<h2> You are BMO!! </h2>
		<img class="img-fluid" src="img/bemo.jpg" alt="BMO!!!">
		<p> BMO likes a number of games and even a few sports. BMO loves playing video games. BMO also skateboardes.
		BMO also gets picked up from soccer. BMO loves to listen to music and dance. BMO reveals enjoyment in taking nice pictures. </p>
		</div>
	`

}

const two = {
	template: `<div class="text center">
		<h2> You are Finn the Human!! </h2>
		<img class="img-fluid" src="img/babyfinn.jpg" alt="Baby Finn the Human">
		<p> Although at times impulsive and aggressive, Finn is a kind, brave, selfless, and righteous boy. His aspirations to become
		a great hero makes him somewhat of a moral sheriff in the Land of Ooo. Finn has a very strong sense of responsibility and 
		becomes upset when he is unable to help others. Due to this and being somewhat simple-minded, Finn often feels conflicted 
		when it is unclear whether something is good or evil. Finn believes that "imagination is for turbonerds who can't handle how
		kick butt reality is" and that he finds real life to be better than anything imaginary.</p>
		</div>
	`
}

const three = {
	template: `<div class="text center">
		<h2> You are Jake the Dog!! </h2>
		<img class="img-fluid" src="img/jakethedog.jpg" alt="Jake the Dog">
		<p> Jake is generally laid-back and tends not to worry about things. He relies heavily on his powers (or Finn) to get him 
		out of any dangerous predicament. While he often cracks jokes at serious times, Jake always has a lecture or a song to cheer
		Finn up if he is feeling disheartened. Acting as Finn's world-wise mentor, Jake is always willing to give input and advice
		about a situation, but his suggestions are usually inconsistent, ranging from encouraging and helpful suggestions to 
		ridiculous nonsense. He can be somewhat irresponsible at times, frequently leaving Finn to fight most of a battle on his
		own, but he always pulls through when he is needed most. </p>
		</div>
	`
}

const four = {
	template: `<div class="text center">
		<h2> You are Fionna the Human!! </h2>
		<img class="img-fluid" src="img/fionna.jpg" alt="Fionna the Human">
		<p> Although Fionna is known to mostly keep her calm, she can be provoked to anger. She will often try to act like one of 
		the guys, so she fits in easily with friends like Marshall Lee or Prince Gumball. Fionna is a fearless, thrill-seeking,
		adventure-loving hero who will rescue any prince from the Ice Queen or do any task to better herself or help citizens.
		She, much like Finn, is also very hard-headed as shown when Cake wanted her to date Prince Gumball and she was stubborn 
		about it. </p>
		</div>
	`
}

const five = {
	template: `<div class="text center">
		<h2> You are Cake the Cat!! </h2>
		<img class="img-fluid" src="img/cake.jpg" alt="Cake the Cat">
		<p> Cake travels with Fionna, and Lord Monochromicorn is her boyfriend. She has Stretchy Powers and can morph her body
		just like Jake. As a cat, she also possesses the ability to see in the dark. The fur on her tail stands on the end
		(or "frizzes out") when there is danger around or when she gets excited (e.g., when Lord Monochromicorn speaks to her). 
		Fionna the human is Cake's best friend and adopted sister. She gives advice in dealing with Prince Gumball. 
		She is very protective of Fionna. 
		</p>
		</div>
	`
}


const myRouter = new VueRouter({
	routes: [
		{
			path: '/one',
			component: one,
		},
		{
			path: '/two',
			component: two,
		},
		{
			path: '/three',
			component: three,
		},
		{
			path: '/four',
			component: four,
		},
		{
			path: '/five',
			component: five,
		},
	]
})

var routeTest = new Vue({
	router: myRouter,
	el: '#app',
	data: {

	},
	methods:{

	}
}).$mount('#app')
