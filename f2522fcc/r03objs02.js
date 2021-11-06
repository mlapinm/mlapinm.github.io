let objs02 = [
 {
  "name": "1 Learn How Script Tags and Document Ready Work",
  "code": [
   "<script>",
   "  $(document).ready(function(){",
   "",
   "  });",
   "</script>",
   "",
   "<!-- Only change code above this line -->",
   "",
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
  "name": "2 Target HTML Elements with Selectors Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"button\").addClass('animated bounce')",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "3 Target Elements by Class Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"button\").addClass(\"animated bounce\");",
   "  $(\".well\").addClass(\"animated shake\");",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "4 Target Elements by id Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"button\").addClass(\"animated bounce\");",
   "    $(\".well\").addClass(\"animated shake\");",
   "    $(\"#target3\").addClass(\"animated fadeOut\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "5 Delete Your jQuery Functions",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "6 Target the Same Element with Multiple jQuery Selectors",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"button\").addClass(\"animated\")",
   "    $(\".btn\").addClass(\"shake\")",
   "    $(\"#target1\").addClass(\"btn-primary\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "7 Remove Classes from an Element with jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"button\").addClass(\"animated bounce\");",
   "    $(\".well\").addClass(\"animated shake\");",
   "    $(\"#target3\").addClass(\"animated fadeOut\");",
   "",
   "    $(\"button\").removeClass(\"btn-default\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "8 Change the CSS of an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "9 Disable an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    // $(\"#target1\").css(\"color\", \"red\");",
   "",
   "    $(\"#target1\").prop(\"disabled\", true)",
   "    $(\"#target2\").prop(\"style\", \"color:blue\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "10 Change Text Inside an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    let text = $(\"#target4\").text()",
   "    text = '<em>' ",
   "    + text + '</em>'",
   "    $(\"#target4\").html(text)",
   "",
   "  });",
   "</script>"
  ]
 },
 {
  "name": "11 Remove an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    ",
   "    $(\"#target4\").remove()",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "12 Use appendTo to Move Elements with jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "",
   "    $(\"#target2\").appendTo(\"#right-well\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "13 Clone an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "    $(\"#target2\").appendTo(\"#right-well\");",
   "",
   "    $(\"#target5\").clone().appendTo(\"#left-well\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "14 Target the Parent of an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "    $(\"#target2\").appendTo(\"#right-well\");",
   "    $(\"#target5\").clone().appendTo(\"#left-well\");",
   "",
   "    $(\"#target1\").parent().css(\"background-color\", \"red\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "15 Target the Children of an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "    $(\"#target2\").appendTo(\"#right-well\");",
   "    $(\"#target5\").clone().appendTo(\"#left-well\");",
   "    $(\"#target1\").parent().css(\"background-color\", \"red\");",
   "",
   "    $(\"#right-well\").children().css(\"color\", \"orange\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "16 Target a Specific Child of an Element Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "    $(\"#target2\").appendTo(\"#right-well\");",
   "    $(\"#target5\").clone().appendTo(\"#left-well\");",
   "    $(\"#target1\").parent().css(\"background-color\", \"red\");",
   "    $(\"#right-well\").children().css(\"color\", \"orange\");",
   "",
   "    $(\".target:nth-child(2)\").addClass(\"animated bounce\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "17 Target Even Elements Using jQuery",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "    $(\"#target2\").appendTo(\"#right-well\");",
   "    $(\"#target5\").clone().appendTo(\"#left-well\");",
   "    $(\"#target1\").parent().css(\"background-color\", \"red\");",
   "    $(\"#right-well\").children().css(\"color\", \"orange\");",
   "    $(\"#left-well\").children().css(\"color\", \"green\");",
   "    $(\".target:nth-child(2)\").addClass(\"animated bounce\");",
   "",
   "    $(\".target:even\").addClass(\"animated shake\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 },
 {
  "name": "18 Use jQuery to Modify the Entire Page",
  "code": [
   "<script>",
   "  $(document).ready(function() {",
   "    $(\"#target1\").css(\"color\", \"red\");",
   "    $(\"#target1\").prop(\"disabled\", true);",
   "    $(\"#target4\").remove();",
   "    $(\"#target2\").appendTo(\"#right-well\");",
   "    $(\"#target5\").clone().appendTo(\"#left-well\");",
   "    $(\"#target1\").parent().css(\"background-color\", \"red\");",
   "    $(\"#right-well\").children().css(\"color\", \"orange\");",
   "    $(\"#left-well\").children().css(\"color\", \"green\");",
   "    $(\".target:nth-child(2)\").addClass(\"animated bounce\");",
   "    $(\".target:even\").addClass(\"animated shake\");",
   "",
   "    $(\"body\").addClass(\"animated hinge\")",
   "",
   "  });",
   "</script>",
   ""
  ]
 }
]

