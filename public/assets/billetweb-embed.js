// Injects the Billetweb booking widget anchor into #billetweb-embed.
// Billetweb's export.js (defer, loaded after this file) scans for .shop_frame
// anchors and replaces them with an auto-resizing iframe.
(function () {
  var mount = document.getElementById('billetweb-embed');
  if (!mount) return;
  mount.innerHTML =
    '<a title="Réservation en ligne" href="https://www.billetweb.fr/multi_event.php?multi=43090"' +
    ' class="shop_frame" target="_blank"' +
    ' data-src="https://www.billetweb.fr/multi_event.php?multi=43090"' +
    ' data-max-width="100%" data-initial-height="600" data-scrolling="no"' +
    ' data-id="43090" data-resize="1">Réservation en ligne</a>';
})();
