$(document).ready(function () {
  console.log("test");
  document.getElementById("preview").innerHTML = marked(
    "# Marked in the browser\n\nRendered by **marked**."
  );
});
