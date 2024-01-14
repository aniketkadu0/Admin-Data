window.id;
function search() {
  var email = $("#email").val();
  $.post({
    url: "https://red-violet-sockeye-fez.cyclic.app/user/login",
    data: { email: "aniketkadu765@gmail.com", password: "Aniket1996@" },
    success: (data) => {
      var AuthToken = data.authtoken;
      $.post({
        url: `https://red-violet-sockeye-fez.cyclic.app/user/getuserstatus/${email}`,
        headers: { Authorization: AuthToken },
        success: (data) => {
          $("#payment").text(data.paymentStatus);
          $("#expiry").text(data.expired);
          window.id = data._id;
        },
        error: (data) => {
          $("#result").text(data.responseJSON.error);
        },
      });
    },
  });
}

function update() {
  $.post({
    url: `https://red-violet-sockeye-fez.cyclic.app/user/paymentstatusupdate/${window.id}`,
    success: (data) => {
      $("#result").text(data.message);
    },
    error: (data) => {
      console.log(data);
    },
  });
}
