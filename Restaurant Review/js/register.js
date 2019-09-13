if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Service Worker registration worked!');
	})
	.catch(function() {
		console.log('Service Worke registration failed!');
	});
}