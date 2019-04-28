// JavaScript and jQuery code for Contact Form

/* Contact form Items that are active */
let items = {
  fname: "First Name",
  lname: "Last Name",
  email: "Email",
  comments: "Comments"
};

$(".iconA a").click(function() {
  $(this)
    .parent()
    .parent()
    .hide();
  var cField = $(this).data("ntag");
  delete items.cField;
});

console.log(items);
