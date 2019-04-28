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

  Object.keys(disItems).forEach(function(key, index) {
    console.log(key);
    $("#deletedItems").empty();
    $("#deletedItems").append(key);
    $("#deletedItems").appendTo("Hello");
    console.log(index);
  });
};

$(".iconA a").click(function() {
  $(this)
    .parent()
    .parent()
    .hide();
  var cField = $(this).data("ntag");
  console.log(
    $(this)
      .closest("div")
      .find("label")
      .html()
  );
  var cFieldName = $(this)
    .closest("div")
    .find("label")
    .html();
  //console.log(cFieldName);
  disItems[cField] = cFieldName;
  delete items.cField;
  displayAction();
});

console.log(disItems);
