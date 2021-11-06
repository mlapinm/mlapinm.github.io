let objs01 = [
 {
  "name": "1 Use Responsive Design with Bootstrap Fluid Containers",
  "code": [
   "<link href=\"https://fonts.googleapis.com/css?family=Lobster\" rel=\"stylesheet\" type=\"text/css\">",
   "<style>",
   "  .red-text {",
   "    color: red;",
   "  }",
   "",
   "  h2 {",
   "    font-family: Lobster, Monospace;",
   "  }",
   "",
   "  p {",
   "    font-size: 16px;",
   "    font-family: Monospace;",
   "  }",
   "",
   "  .thick-green-border {",
   "    border-color: green;",
   "    border-width: 10px;",
   "    border-style: solid;",
   "    border-radius: 50%;",
   "  }",
   "",
   "  .smaller-image {",
   "    width: 100px;",
   "  }",
   "</style>",
   "",
   "<div class=\"container-fluid\">",
   "",
   "<h2 class=\"red-text\">CatPhotoApp</h2>",
   "",
   "<p>Click here for <a href=\"#\">cat photos</a>.</p>",
   "",
   "<a href=\"#\"><img class=\"smaller-image thick-green-border\" src=\"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg\" alt=\"A cute orange cat lying on its back.\"></a>",
   "",
   "<p>Things cats love:</p>",
   "<ul>",
   "  <li>cat nip</li>",
   "  <li>laser pointers</li>",
   "  <li>lasagna</li>",
   "</ul>",
   "<p>Top 3 things cats hate:</p>",
   "<ol>",
   "  <li>flea treatment</li>",
   "  <li>thunder</li>",
   "  <li>other cats</li>",
   "</ol>",
   "<form action=\"https://freecatphotoapp.com/submit-cat-photo\">",
   "  <label><input type=\"radio\" name=\"indoor-outdoor\"> Indoor</label>",
   "  <label><input type=\"radio\" name=\"indoor-outdoor\"> Outdoor</label>",
   "  <label><input type=\"checkbox\" name=\"personality\"> Loving</label>",
   "  <label><input type=\"checkbox\" name=\"personality\"> Lazy</label>",
   "  <label><input type=\"checkbox\" name=\"personality\"> Crazy</label>",
   "  <input type=\"text\" placeholder=\"cat photo URL\" required>",
   "  <button type=\"submit\">Submit</button>",
   "</form>",
   "</div>",
   ""
  ]
 },
 {
  "name": "2 Make Images Mobile Responsive",
  "code": [
   "<img class=\"img-responsive\" src=\"https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg\" />"
  ]
 },
 {
  "name": "3 Center Text with Bootstrap",
  "code": [
   "<h2 class=\"red-text text-center\">CatPhotoApp</h2>"
  ]
 },
 {
  "name": "4 Create a Bootstrap Button",
  "code": [
   "  <button class=\"btn btn-default\">Like</button>"
  ]
 },
 {
  "name": "5 Create a Block Element Bootstrap Button",
  "code": [
   "  <button class=\"btn btn-default btn-block\">Like</button>",
   ""
  ]
 },
 {
  "name": "6 Taste the Bootstrap Button Color Rainbow",
  "code": [
   "  <button class=\"btn btn-primary btn-block\">Like</button>"
  ]
 },
 {
  "name": "7 Call out Optional Actions with btn-info",
  "code": [
   "  <button class=\"btn btn-info btn-block\">Info</button>"
  ]
 },
 {
  "name": "8 Warn Your Users of a Dangerous Action with btn-danger",
  "code": [
   "  <button class=\"btn btn-block btn-primary\">Like</button>",
   ""
  ]
 },
 {
  "name": "9 Use the Bootstrap Grid to Put Elements Side By Side",
  "code": [
   "  <div class=\"row\">",
   "    <div class=\"col-xs-4\">",
   "  <button class=\"btn btn-block btn-primary\">Like</button>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "  <button class=\"btn btn-block btn-info\">Info</button>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "  <button class=\"btn btn-block btn-danger\">Delete</button>",
   "  </div>",
   "    </div>",
   ""
  ]
 },
 {
  "name": "10 Ditch Custom CSS for Bootstrap",
  "code": [
   "  <h2 class=\"text-primary text-center\">CatPhotoApp</h2>",
   "  <a href=\"#\"><img class=\"img-responsive thick-green-border\" src=\"\" /></a>"
  ]
 },
 {
  "name": "11 Use a span to Target Inline Elements",
  "code": [
   "  <p>Things cats <span class=\"text-danger\">love:</span></p>",
   ""
  ]
 },
 {
  "name": "12 Create a Custom Heading",
  "code": [
   "  <div class=\"row\">",
   "    <div class=\"col-xs-8\">",
   "        <h2 class=\"text-primary text-center\">CatPhotoApp</h2>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "        <a href=\"#\"><img class=\"img-responsive thick-green-border\" src=\"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg\" alt=\"A cute orange cat lying on its back.\"></a>",
   "    </div>",
   "  </div>",
   ""
  ]
 },
 {
  "name": "13 Add Font Awesome Icons to our Buttons",
  "code": [
   "<link href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">",
   "      <button class=\"btn btn-block btn-primary\"><i class=\"fas fa-thumbs-up\"></i>Like</button>"
  ]
 },
 {
  "name": "14 Add Font Awesome Icons to all of our Buttons",
  "code": [
   "  <div class=\"row\">",
   "    <div class=\"col-xs-4\">",
   "      <button class=\"btn btn-block btn-primary\"><i class=\"fas fa-thumbs-up\"></i> Like</button>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "      <button class=\"btn btn-block btn-info\"><i class=\"fas fa-info-circle\"></i>Info</button>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "      <button class=\"btn btn-block btn-danger\"><i class=\"fas fa-trash\"></i>Delete</button>",
   "    </div>",
   "  </div>",
   ""
  ]
 },
 {
  "name": "15 Responsively Style Radio Buttons",
  "code": [
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "    <label><input type=\"radio\" name=\"indoor-outdoor\"> Indoor</label>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "    <label><input type=\"radio\" name=\"indoor-outdoor\"> Outdoor</label>",
   "    </div>",
   "  </div>",
   ""
  ]
 },
 {
  "name": "16 Responsively Style Checkboxes",
  "code": [
   "    <div class=\"row\">",
   "      <div class=\"col-xs-4\">",
   "    <label><input type=\"checkbox\" name=\"personality\"> Loving</label>",
   "      </div>",
   "      <div class=\"col-xs-4\">",
   "    <label><input type=\"checkbox\" name=\"personality\"> Lazy</label>",
   "      </div>",
   "      <div class=\"col-xs-4\">",
   "    <label><input type=\"checkbox\" name=\"personality\"> Crazy</label>",
   "      </div>",
   "    </div>",
   ""
  ]
 },
 {
  "name": "17 Style Text Inputs as Form Controls",
  "code": [
   "    <input class=\"form-control\" type=\"text\" placeholder=\"cat photo URL\" required>",
   "    <button class=\"btn btn-primary\" type=\"submit\"><i class=\"fa fa-paper-plane\"></i>Submit</button>",
   "  </form>",
   ""
  ]
 },
 {
  "name": "18 Line up Form Elements Responsively with Bootstrap",
  "code": [
   "<link href=\"https://fonts.googleapis.com/css?family=Lobster\" rel=\"stylesheet\" type=\"text/css\">",
   "<style>",
   "  h2 {",
   "    font-family: Lobster, Monospace;",
   "  }",
   "",
   "  .thick-green-border {",
   "    border-color: green;",
   "    border-width: 10px;",
   "    border-style: solid;",
   "    border-radius: 50%;",
   "  }",
   "",
   "</style>",
   "",
   "<div class=\"container-fluid\">",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-8\">",
   "      <h2 class=\"text-primary text-center\">CatPhotoApp</h2>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "      <a href=\"#\"><img class=\"img-responsive thick-green-border\" src=\"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg\" alt=\"A cute orange cat lying on its back.\"></a>",
   "    </div>",
   "  </div>",
   "  <img src=\"https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg\" class=\"img-responsive\" alt=\"Three kittens running towards the camera.\">",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-4\">",
   "      <button class=\"btn btn-block btn-primary\"><i class=\"fa fa-thumbs-up\"></i> Like</button>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "      <button class=\"btn btn-block btn-info\"><i class=\"fa fa-info-circle\"></i> Info</button>",
   "    </div>",
   "    <div class=\"col-xs-4\">",
   "      <button class=\"btn btn-block btn-danger\"><i class=\"fa fa-trash\"></i> Delete</button>",
   "    </div>",
   "  </div>",
   "  <p>Things cats <span class=\"text-danger\">love:</span></p>",
   "  <ul>",
   "    <li>cat nip</li>",
   "    <li>laser pointers</li>",
   "    <li>lasagna</li>",
   "  </ul>",
   "  <p>Top 3 things cats hate:</p>",
   "  <ol>",
   "    <li>flea treatment</li>",
   "    <li>thunder</li>",
   "    <li>other cats</li>",
   "  </ol>",
   "  <form action=\"https://freecatphotoapp.com/submit-cat-photo\">",
   "    <div class=\"row\">",
   "      <div class=\"col-xs-6\">",
   "        <label><input type=\"radio\" name=\"indoor-outdoor\"> Indoor</label>",
   "      </div>",
   "      <div class=\"col-xs-6\">",
   "        <label><input type=\"radio\" name=\"indoor-outdoor\"> Outdoor</label>",
   "      </div>",
   "    </div>",
   "    <div class=\"row\">",
   "      <div class=\"col-xs-4\">",
   "        <label><input type=\"checkbox\" name=\"personality\"> Loving</label>",
   "      </div>",
   "      <div class=\"col-xs-4\">",
   "        <label><input type=\"checkbox\" name=\"personality\"> Lazy</label>",
   "      </div>",
   "      <div class=\"col-xs-4\">",
   "        <label><input type=\"checkbox\" name=\"personality\"> Crazy</label>",
   "      </div>",
   "    </div>",
   "   <div class=\"row\">",
   "      <div class=\"col-xs-7\">",
   "    <input type=\"text\" class=\"form-control\" placeholder=\"cat photo URL\" required>",
   "      </div>",
   "      <div class=\"col-xs-5\">",
   "    <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-paper-plane\"></i> Submit</button>",
   "      </div>",
   "    </div>",
   "  </form>",
   "</div> ",
   ""
  ]
 },
 {
  "name": "19 Create a Bootstrap Headline",
  "code": [
   "<h3 class=\"text-center text-primary\">jQuery Playground</h3>"
  ]
 },
 {
  "name": "20 House our page within a Bootstrap container-fluid div",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "</div>",
   ""
  ]
 },
 {
  "name": "21 Create a Bootstrap Row",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "  ",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "22 Split Your Bootstrap Row",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      ",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      ",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "23 Create Bootstrap Wells",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        ",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        ",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "24 Add Elements within Your Bootstrap Wells",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        <button>1</button>",
   "        <button>1</button>",
   "        <button>1</button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        <button>1</button>",
   "        <button>1</button>",
   "        <button>1</button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "25 Apply the Default Bootstrap Button Style",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        <button class=\"btn btn-default\">1</button>",
   "        <button class=\"btn btn-default\">1</button>",
   "        <button class=\"btn btn-default\">1</button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        <button class=\"btn btn-default\">1</button>",
   "        <button class=\"btn btn-default\">1</button>",
   "        <button class=\"btn btn-default\">1</button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "26 Create a Class to Target with jQuery Selectors",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <div class=\"well\">",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "27 Add id Attributes to Bootstrap Elements",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <div id=\"left-well\" class=\"well\">",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <div id=\"right-well\" class=\"well\">",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "28 Label Bootstrap Wells",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\"><h4>#left-well</h4>",
   "",
   "      <div class=\"well\" id=\"left-well\">",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\"><h4>#right-well</h4>",
   "",
   "      <div class=\"well\" id=\"right-well\">",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "        <button class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "29 Give Each Element a Unique id",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <h4>#left-well</h4>",
   "      <div class=\"well\" id=\"left-well\">",
   "        <button id=\"target1\" class=\"btn btn-default target\"></button>",
   "        <button id=\"target2\" class=\"btn btn-default target\"></button>",
   "        <button id=\"target3\" class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <h4>#right-well</h4>",
   "      <div class=\"well\" id=\"right-well\">",
   "        <button id=\"target4\" class=\"btn btn-default target\"></button>",
   "        <button id=\"target5\" class=\"btn btn-default target\"></button>",
   "        <button id=\"target6\" class=\"btn btn-default target\"></button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "30 Label Bootstrap Buttons",
  "code": [
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <h4>#left-well</h4>",
   "      <div class=\"well\" id=\"left-well\">",
   "        <button class=\"btn btn-default target\" id=\"target1\">#target1</button>",
   "        <button class=\"btn btn-default target\" id=\"target2\">#target2</button>",
   "        <button class=\"btn btn-default target\" id=\"target3\">#target3</button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <h4>#right-well</h4>",
   "      <div class=\"well\" id=\"right-well\">",
   "        <button class=\"btn btn-default target\" id=\"target4\">#target4</button>",
   "        <button class=\"btn btn-default target\" id=\"target5\">#target5</button>",
   "        <button class=\"btn btn-default target\" id=\"target6\">#target6</button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>"
  ]
 },
 {
  "name": "31 Use Comments to Clarify Code",
  "code": [
   "<!-- Code below this line should not be changed -->",
   "<div class=\"container-fluid\">",
   "  <h3 class=\"text-primary text-center\">jQuery Playground</h3>",
   "  <div class=\"row\">",
   "    <div class=\"col-xs-6\">",
   "      <h4>#left-well</h4>",
   "      <div class=\"well\" id=\"left-well\">",
   "        <button class=\"btn btn-default target\" id=\"target1\">#target1</button>",
   "        <button class=\"btn btn-default target\" id=\"target2\">#target2</button>",
   "        <button class=\"btn btn-default target\" id=\"target3\">#target3</button>",
   "      </div>",
   "    </div>",
   "    <div class=\"col-xs-6\">",
   "      <h4>#right-well</h4>",
   "      <div class=\"well\" id=\"right-well\">",
   "        <button class=\"btn btn-default target\" id=\"target4\">#target4</button>",
   "        <button class=\"btn btn-default target\" id=\"target5\">#target5</button>",
   "        <button class=\"btn btn-default target\" id=\"target6\">#target6</button>",
   "      </div>",
   "    </div>",
   "  </div>",
   "</div>",
   "",
   "",
   ""
  ]
 }
]
