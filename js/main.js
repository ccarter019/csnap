// JavaScript and jQuery code for Contact Form

/* Contact form Items that are active */
let items = {
  fname: "First Name",
  lname: "Last Name",
  email: "Email",
  comments: "Comments"
};

let disItems = new Object();

let displayAction = () => {
  var listBox = $("#deletedItems");

  $("#deletedItems").empty();
  Object.keys(disItems).forEach(function(key, index) {
    $("#deletedItems").append(
      "<div class='deleted'>" +
        disItems[key] +
        "<button data-atag='" +
        key +
        "' disabled>Removed</button></div>"
    );
  });
};

$(".iconA button").click(function() {
  event.preventDefault();
  $(this)
    .parent()
    .parent()
    .hide();
  var cName = $(this)
    .parents("div")
    .eq(1)
    .find("label")
    .html();
  var cField = $(this).data("ntag");
  disItems[cField] = cName;
  delete items.cField;
  displayAction();
});

$("#deletedItemsB button").click(function() {
  var showId = $(this).data("atag");

  $(".fieldCont").show();
  $("#deletedItems").empty();
  disItems = {};
});

$("input#submit").click(function() {
  event.preventDefault();
  alert("Thank you for contacting us!");
});

console.log(disItems);
