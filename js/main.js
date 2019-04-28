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
        "<a href='#' data-ntag='" +
        key +
        "'>X</a></div>"
    );
  });
};

$(".iconA a").click(function() {
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

$(".deleted a").click(function() {});

console.log(disItems);
