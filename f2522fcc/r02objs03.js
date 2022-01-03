let objs03 = [
 {
  "name": "01 Using the Test Method",
  "code": [
   "let myString = \"Hello, World!\";",
   "let myRegex = /Hello/;",
   "let result = myRegex.test(myString); // Change this line",
   "",
   "console.log(result)"
  ]
 },
 {
  "name": "02 Match Literal Strings",
  "code": [
   "let waldoIsHiding = \"Somewhere Waldo is hiding in this text.\";",
   "let waldoRegex = /Waldo/; // Change this line",
   "let result = waldoRegex.test(waldoIsHiding);",
   "console.log(result)"
  ]
 },
 {
  "name": "03 Match a Literal String with Different Possibilities",
  "code": [
   "let petString = \"James has a pet cat.\";",
   "let petRegex = /dog|cat|bird|fish/; // Change this line",
   "let result = petRegex.test(petString);"
  ]
 },
 {
  "name": "04 Ignore Case While Matching",
  "code": [
   "let myString = \"freeCodeCamp\";",
   "let fccRegex = /freecodecamp/i; // Change this line",
   "let result = fccRegex.test(myString);",
   "console.log(result)"
  ]
 },
 {
  "name": "05 Extract Matches",
  "code": [
   "let extractStr = \"Extract the word 'coding' from this string.\";",
   "let codingRegex = /coding/; // Change this line",
   "let result = extractStr.match(codingRegex); // Change this line",
   "console.log(result)"
  ]
 },
 {
  "name": "06 Find More Than the First Match",
  "code": [
   "let twinkleStar = \"Twinkle, twinkle, little star\";",
   "let starRegex = /twinkle/gi; // Change this line",
   "let result = twinkleStar.match(starRegex); // Change this line",
   "console.log(result)"
  ]
 },
 {
  "name": "07 Match Anything with Wildcard Period",
  "code": [
   "let exampleStr = \"Let's have fun with regular expressions!\";",
   "let unRegex = /.un/; // Change this line",
   "let result = unRegex.test(exampleStr);",
   "console.log(result)"
  ]
 },
 {
  "name": "08 Match Single Character with Multiple Possibilities",
  "code": [
   "let quoteSample = \"Beware of bugs in the above code; I have only proved it correct, not tried it.\";",
   "let vowelRegex = /[aeiou]/gi; // Change this line",
   "let result = quoteSample.match(vowelRegex); // Change this line",
   "console.log(result)"
  ]
 },
 {
  "name": "09 Match Letters of the Alphabet",
  "code": [
   "let quoteSample = \"The quick brown fox jumps over the lazy dog.\";",
   "let alphabetRegex = /[a-z]/ig; // Change this line",
   "let result = quoteSample.match(alphabetRegex); // Change this line",
   "console.log(...new Set(result))"
  ]
 },
 {
  "name": "10 Match Numbers and Letters of the Alphabet",
  "code": [
   "let quoteSample = \"Blueberry 3.141592653s are delicious.\";",
   "let myRegex = /[h-s2-6]/gi; // Change this line",
   "let result = quoteSample.match(myRegex); // Change this line",
   "console.log(result)"
  ]
 },
 {
  "name": "11 Match Single Characters Not Specified",
  "code": [
   "let quoteSample = \"3 blind mice.\";",
   "let myRegex = /[^aeiou0-9]/gi; // Change this line",
   "let result = quoteSample.match(myRegex); // Change this line",
   "console.log(result)"
  ]
 },
 {
  "name": "12 Match Characters that Occur One or More Times",
  "code": [
   "let difficultSpelling = \"Mississippi\";",
   "let myRegex = /s+/g; // Change this line",
   "let result = difficultSpelling.match(myRegex);",
   "console.log(result)"
  ]
 },
 {
  "name": "13 Match Characters that Occur Zero or More Times",
  "code": [
   "// Only change code below this line",
   "let chewieQuote = \"Aaaaaaaaaaaaaaaarrrgh!\"",
   "let chewieRegex = /Aa*/; // Change this line",
   "// Only change code above this line",
   "",
   "let result = chewieQuote.match(chewieRegex);",
   "console.log(result)"
  ]
 },
 {
  "name": "14 Find Characters with Lazy Matching",
  "code": [
   "let text = \"<h1>Winter is coming</h1>\";",
   "let myRegex = /<.*?>/; // Change this line",
   "let result = text.match(myRegex);",
   "console.log(result)"
  ]
 },
 {
  "name": "15 Find One or More Criminals in a Hunt",
  "code": [
   "let reCriminals = /C+/; // Change this line"
  ]
 },
 {
  "name": "16 Match Beginning String Patterns",
  "code": [
   "let rickyAndCal = \"Cal and Ricky both like racing.\";",
   "let calRegex = /^Cal/; // Change this line",
   "let result = calRegex.test(rickyAndCal);",
   "console.log(result)"
  ]
 },
 {
  "name": "17 Match Ending String Patterns",
  "code": [
   "let caboose = \"The last car on a train is the caboose\";",
   "let lastRegex = /caboose$/; // Change this line",
   "let result = lastRegex.test(caboose);",
   "console.log(result)"
  ]
 },
 {
  "name": "18 Match All Letters and Numbers",
  "code": [
   "let quoteSample = \"The five boxing wizards jump quickly.\";",
   "let alphabetRegexV2 = /\\w/g; // Change this line",
   "let result = quoteSample.match(alphabetRegexV2).length;",
   "let result1 = quoteSample.match(/[^\\w]/g).length",
   "console.log(result)",
   "console.log(result1)"
  ]
 },
 {
  "name": "19 Match Everything But Letters and Numbers",
  "code": [
   "let quoteSample = \"The five boxing wizards jump quickly.\";",
   "let nonAlphabetRegex = /\\W/g; // Change this line",
   "let result = quoteSample.match(nonAlphabetRegex).length;",
   "console.log(result)"
  ]
 },
 {
  "name": "20 Match All Numbers",
  "code": [
   "let movieName = \"2001: A Space Odyssey\";",
   "let numRegex = /\\d/g; // Change this line",
   "let result = movieName.match(numRegex).length;",
   "console.log(result)"
  ]
 },
 {
  "name": "21 Match All Non-Numbers",
  "code": [
   "let movieName = \"2001: A Space Odyssey\";",
   "let noNumRegex = /\\D/g; // Change this line",
   "let result = movieName.match(noNumRegex).length;",
   "console.log(result)"
  ]
 },
 {
  "name": "22 Restrict Possible Usernames",
  "code": [
   "let username = \"JackOfAllTrades\";",
   "let userCheck = /^[a-zA-Z][a-zA-Z]+\\d*$|^[a-zA-Z]\\d\\d+$/; // Change this line",
   "let result = userCheck.test(username);",
   "console.log(result)"
  ]
 },
 {
  "name": "23 Match Whitespace",
  "code": [
   "let sample = \"Whitespace is important in separating words\";",
   "let countWhiteSpace = /\\s/g; // Change this line",
   "let result = sample.match(countWhiteSpace);",
   "console.log(result)"
  ]
 },
 {
  "name": "24 Match Non-Whitespace Characters",
  "code": [
   "let sample = \"Whitespace is important in separating words\";",
   "let countNonWhiteSpace = /\\S/g; // Change this line",
   "let result = sample.match(countNonWhiteSpace);",
   "console.log(result)"
  ]
 },
 {
  "name": "25 Specify Upper and Lower Number of Matches",
  "code": [
   "let ohStr = \"Ohhh no\";",
   "let ohRegex = /Oh{3,6} no/; // Change this line",
   "let result = ohRegex.test(ohStr);",
   "console.log(result)"
  ]
 },
 {
  "name": "26 Specify Only the Lower Number of Matches",
  "code": [
   "let haStr = \"Hazzzzah\";",
   "let haRegex = /Haz{4,}ah/; // Change this line",
   "let result = haRegex.test(haStr);",
   "console.log(result)"
  ]
 },
 {
  "name": "27 Specify Exact Number of Matches",
  "code": [
   "let timStr = \"Timmmmber\";",
   "let timRegex = /Tim{4}ber/; // Change this line",
   "let result = timRegex.test(timStr);",
   "console.log(result)",
   ""
  ]
 },
 {
  "name": "28 Check for All or None",
  "code": [
   "let favWord = \"favorite\";",
   "let favRegex = /favou?rite/; // Change this line",
   "let result = favRegex.test(favWord);",
   "console.log(result)"
  ]
 },
 {
  "name": "29 Positive and Negative Lookahead",
  "code": [
   "let sampleWord = \"bana12\";",
   "// astronaut",
   "let pwRegex = /(?=\\w{3,})(?=\\D\\d{2,})/; // Change this line",
   "let result = pwRegex.test(sampleWord);",
   "console.log(result)"
  ]
 },
 {
  "name": "30 Check For Mixed Grouping of Characters",
  "code": [
   "let myString = \"Eleanor Roosevelt\";",
   "let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line",
   "let result = myRegex.test(myString); // Change this line",
   "// After passing the challenge experiment with myString and see how the grouping works",
   "console.log(result)",
   ""
  ]
 },
 {
  "name": "31 Reuse Patterns Using Capture Groups",
  "code": [
   "let repeatNum = \"42 42 42\";",
   "let repeatNum2 = \"42 42 42 42\";",
   "let reRegex = /^(\\d+) \\1 \\1$/; // Change this line",
   "let result = reRegex.test(repeatNum);",
   "let result2 = reRegex.test(repeatNum2);",
   "console.log(result, result2)"
  ]
 },
 {
  "name": "32 Use Capture Groups to Search and Replace",
  "code": [
   "let str = \"one two three\";",
   "let fixRegex = /(\\w+)\\s(\\w+)\\s(\\w+)/; // Change this line",
   "let replaceText = \"$3 $2 $1\"; // Change this line",
   "let result = str.replace(fixRegex, replaceText);",
   "console.log(result)"
  ]
 },
 {
  "name": "33 Remove Whitespace from Start and End",
  "code": [
   "let hello = \"   Hello, World!  \";",
   "let wsRegex = /(^ +)|( +$)/g; // Change this line",
   "let result = hello.replace(wsRegex, ''); // Change this line",
   "console.log(result)",
   ""
  ]
 }
]