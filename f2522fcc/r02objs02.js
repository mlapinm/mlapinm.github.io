let objs02 = [
 {
  "name": "1 Compare Scopes of the var and let Keywords",
  "code": [
   "function checkScope() {",
   "  let i = 'function scope';",
   "  if (true) {",
   "    let i = 'block scope';",
   "    console.log('Block scope i is: ', i);",
   "  }",
   "  console.log('Function scope i is: ', i);",
   "  return i;",
   "}",
   "",
   "checkScope()"
  ]
 },
 {
  "name": "2 Mutate an Array Declared with const",
  "code": [
   "const s = [5, 7, 2];",
   "function editInPlace() {",
   "  // Only change code below this line",
   "",
   "  // Using s = [2, 5, 7] would be invalid",
   "  s[0] = 2",
   "  s[1] = 5",
   "  s[2] = 7",
   "",
   "  // Only change code above this line",
   "}",
   "editInPlace();"
  ]
 },
 {
  "name": "3 Prevent Object Mutation",
  "code": [
   "function freezeObj() {",
   "  const MATH_CONSTANTS = {",
   "    PI: 3.14",
   "  };",
   "  // Only change code below this line",
   "",
   "  Object.freeze(MATH_CONSTANTS)",
   "",
   "  // Only change code above this line",
   "  try {",
   "    MATH_CONSTANTS.PI = 99;",
   "  } catch(ex) {",
   "    console.log(ex);",
   "  }",
   "  return MATH_CONSTANTS.PI;",
   "}",
   "const PI = freezeObj();"
  ]
 },
 {
  "name": "4 Use Arrow Functions to Write Concise Anonymous Functions",
  "code": [
   "const magic = () => new Date()",
   "",
   "let a = magic()",
   "console.log(a)",
   ""
  ]
 },
 {
  "name": "5 Write Arrow Functions with Parameters",
  "code": [
   "const myConcat = (arr1, arr2) => arr1.concat(arr2)",
   "",
   "console.log(myConcat([1, 2], [3, 4, 5]));"
  ]
 },
 {
  "name": "6 Set Default Parameters for Your Functions",
  "code": [
   ""
  ]
 },
 {
  "name": "7 Use the Rest Parameter with Function Parameters",
  "code": [
   ""
  ]
 },
 {
  "name": "8 Use the Spread Operator to Evaluate Arrays In-Place",
  "code": [
   ""
  ]
 },
 {
  "name": "9 Use Destructuring Assignment to Extract Values from Objects",
  "code": [
   ""
  ]
 },
 {
  "name": "10 Use Destructuring Assignment to Assign Variables from Objects",
  "code": [
   ""
  ]
 },
 {
  "name": "11 Use Destructuring Assignment to Assign Variables from Nested Objects",
  "code": [
   ""
  ]
 },
 {
  "name": "12 Use Destructuring Assignment to Assign Variables from Arrays",
  "code": [
   ""
  ]
 },
 {
  "name": "13 Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements",
  "code": [
   ""
  ]
 },
 {
  "name": "14 Use Destructuring Assignment to Pass an Object as a Function's Parameters",
  "code": [
   ""
  ]
 },
 {
  "name": "15 Create Strings using Template Literals",
  "code": [
   ""
  ]
 },
 {
  "name": "16 Write Concise Object Literal Declarations Using Object Property Shorthand",
  "code": [
   ""
  ]
 },
 {
  "name": "17 Write Concise Declarative Functions with ES6",
  "code": [
   ""
  ]
 },
 {
  "name": "18 Use class Syntax to Define a Constructor Function",
  "code": [
   ""
  ]
 },
 {
  "name": "19 Use getters and setters to Control Access to an Object",
  "code": [
   ""
  ]
 },
 {
  "name": "20 Create a Module Script",
  "code": [
   ""
  ]
 },
 {
  "name": "21 Use export to Share a Code Block",
  "code": [
   ""
  ]
 },
 {
  "name": "22 Reuse JavaScript Code Using import",
  "code": [
   ""
  ]
 },
 {
  "name": "23 Use * to Import Everything from a File",
  "code": [
   ""
  ]
 },
 {
  "name": "24 Create an Export Fallback with export default",
  "code": [
   ""
  ]
 },
 {
  "name": "25 Import a Default Export",
  "code": [
   ""
  ]
 },
 {
  "name": "26 Create a JavaScript Promise",
  "code": [
   ""
  ]
 },
 {
  "name": "27 Complete a Promise with resolve and reject",
  "code": [
   ""
  ]
 },
 {
  "name": "28 Handle a Fulfilled Promise with then",
  "code": [
   ""
  ]
 },
 {
  "name": "29 Handle a Rejected Promise with catch",
  "code": [
   "",
   "",
   ""
  ]
 }
]
