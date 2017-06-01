// Run our jQuery
$(document).ready(function() {
  // Free Code Camp stream info and status API call
  var url = "https://api.twitch.tv/kraken/channels/freecodecamp/?client_id=qzsmdq24e2j4upt48jj6jm68u00n2r4";
  $.getJSON(url, function(data1) {
    if (data1.stream === null) {
      $('#fccStatus').html('Free Code Camp is currently OFFLINE!');
    } else {
      $('#fccStatus').html('Free Code Camp is currently ONLINE!');
    }
  });
});
