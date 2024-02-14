// Inserimento tag HTML per file manifest.json
function pwa_tag_html() {
?>
<link rel="manifest" href="manifest.json" />
<meta name="theme-color" content="#f06420" />
<?php
}
add_action( 'wp_head', 'pwa_tag_html' );
// Inserimento script di registrazione del service worker
function pwa_service_worker() {
?>
<script>
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js')
.then(function(registration) {
console.log('Registration successful, scope is:', registration.scope);
})
.catch(function(error) {
console.log('Service worker registration failed, error:', error);
});
}
</script>
<?php
}
add_action( 'wp_footer', 'pwa_service_worker' );
