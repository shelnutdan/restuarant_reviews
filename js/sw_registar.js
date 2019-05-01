if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration is working');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}
