$(document).ready(function() {

});

function fetchAll(status) {
  $("#twitch-list").empty();

  var fccURI = "https://api.twitch.tv/kraken/channels/freecodecamp/?client_id=qzsmdq24e2j4upt48jj6jm68u00n2r4";
  fetch(fccURI, true, status);
}
