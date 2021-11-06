let objs03 = [
 {
  "name": "1 Install and Set Up Mongoose",
  "code": [
   "",
   "https://boilerplate-mongomongoose.mikhaillapin.repl.co",
   "",
   "https://replit.com/@MikhailLapin/boilerplate-mongomongoose#myApp.js",
   "",
   "https://cloud.mongodb.com/v2/5ea44c39177e42591b408863#metrics/replicaSet/617f2c412f52391422ea30ac/explorer/b02fcc/people/find",
   "",
   "",
   "",
   "b02fcc",
   "MONGO_URI",
   "\"mongodb+srv://mmlapinm:psw@cluster0.6dfwg.mongodb.net/b02fcc?retryWrites=true&w=majority\""
  ]
 },
 {
  "name": "2 Create a Model",
  "code": [
   "const Schema = mongoose.Schema",
   "",
   "const personSchema =  new Schema({",
   "  name: {type: String, required: true},",
   "  age: Number,",
   "  favoriteFoods: [String]",
   "});",
   "let Person = mongoose.model(\"Person\", personSchema);",
   ""
  ]
 },
 {
  "name": "3 Create and Save a Record of a Model",
  "code": [
   "var createAndSavePerson = function(done) {",
   "",
   "  var person = new Person({name: \"John Doe\", age: 87, favoriteFoods: [\"something\", \"something\"]});",
   "",
   "  person.save(function(err, data) {",
   "    if (err) {",
   "     console.log(err)",
   "    }",
   "    console.log(data)",
   "    done(null, data)",
   "  });",
   "};",
   ""
  ]
 },
 {
  "name": "4 Create Many Records with model.create()",
  "code": [
   ""
  ]
 },
 {
  "name": "5 Use model.find() to Search Your Database",
  "code": [
   ""
  ]
 },
 {
  "name": "6 Use model.findOne() to Return a Single Matching Document from Your Database",
  "code": [
   ""
  ]
 },
 {
  "name": "7 Use model.findById() to Search Your Database By _id",
  "code": [
   ""
  ]
 },
 {
  "name": "8 Perform Classic Updates by Running Find, Edit, then Save",
  "code": [
   ""
  ]
 },
 {
  "name": "9 Perform New Updates on a Document Using model.findOneAndUpdate()",
  "code": [
   ""
  ]
 },
 {
  "name": "10 Delete One Document Using model.findByIdAndRemove",
  "code": [
   ""
  ]
 },
 {
  "name": "11 Delete Many Documents with model.remove()",
  "code": [
   ""
  ]
 },
 {
  "name": "12 Chain Search Query Helpers to Narrow Search Results",
  "code": [
   "",
   "",
   "",
   "",
   "https://glitch.com/dashboard?group=owned&sortColumn=boost&sortDirection=DESC&page=1&showAll=false&filterDomain="
  ]
 }
]

