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

  var followerURL = "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/?client_id=qzsmdq24e2j4upt48jj6jm68u00n2r4";
  $.getJSON(followerURL, function(data2) {
    for (var i = 0; i < data2.follows.length; i++) {
      var displayName = data2.follows[i].channel.display_name;
      console.log(displayName);
    }
  });
});
