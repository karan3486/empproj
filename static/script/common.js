function RenderHome() {
  debugger;
  $.ajax({
    url: "/home",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      debugger;
      console.log(result);

      $(".maindiv").html(result);
    },
    error: function (xhr, status, error) {
      debugger;
      console.log(xhr.responseText);
      alert(xhr.responseText);
    },
  });
}

function RenderInbox() {
  debugger;
  $.ajax({
    url: "/inbox",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      debugger;
      console.log(result);

      $(".maindiv").html(result);
    },
    error: function (xhr, status, error) {
      debugger;
      debugger;
      console.log(xhr.responseText);
      alert(xhr.responseText);
    },
  });
}
