var l14307e = [
"Cleaning string variables using SQL12m.",
"It's so great to have you back.",
"Now that we know some basic SQL queries and spent some time working in a database, let's apply that knowledge to something else we've been talking about: preparing and cleaning data.",
"You already know that cleaning and completing your data before you analyze it is an important step.",
"So in this video, I'll show you some ways SQL can help you do just that, including how to remove duplicates, as well as four functions to help you clean string variables.",
"Earlier, we covered how to remove duplicates in spreadsheets using the Remove duplicates tool.",
"In SQL, we can do the same thing by including DISTINCT in our SELECT statement.",
"For example, let's say the company we work for has a special promotion for customers in Ohio.",
"We want to get the customer IDs of customers who live in Ohio.",
"But some customer information has been entered multiple times.",
"We can get these customer IDs by writing SELECT customer_id FROM customer_data.",
"customer_address.",
"This query will give us duplicates if they exist in the table.",
"If customer ID 9080 shows up three times in our table, our results will have three of that customer ID.",
"But we don't want that.",
"We want a list of all unique customer IDs.",
"To do that, we add DISTINCT to our SELECT statement by writing, SELECT DISTINCT customer_id FROM customer_data.",
"customer_address.",
"Now, the customer ID 9080 will show up only once in our results.",
"You might remember we've talked before about text strings as a group of characters within a cell, commonly composed of letters, numbers, or both.",
"These text strings need to be cleaned sometimes.",
"Maybe they've been entered differently in different places across your database, and now they don't match.",
"In those cases, you'll need to clean them before you can analyze them.",
"So here are some functions you can use in SQL to handle string variables.",
"You might recognize some of these functions from when we talked about spreadsheets.",
"Now it's time to see them work in a new way.",
"Pull up the data set we shared right before this video.",
"And you can follow along step-by-step with me during the rest of this video.",
"The first function I want to show you is LENGTH, which we've encountered before.",
"If we already know the length our string variables are supposed to be, we can use LENGTH to double-check that our string variables are consistent.",
"For some databases, this query is written as LEN, but it does the same thing.",
"Let's say we're working with the customer_address table from our earlier example.",
"We can make sure that all country codes have the same length by using LENGTH on each of these strings.",
"So to write our SQL query, let's first start with SELECT and FROM.",
"We know our data comes from the customer_address table within the customer_data data set.",
"So we add customer_data.",
"customer_address after the FROM clause.",
"Then under SELECT, we'll write LENGTH, and then the column we want to check, country.",
"To remind ourselves what this is, we can label this column in our results as letters_in_country.",
"So we add AS letters_in_country, after LENGTH(country).",
"The result we get is a list of the number of letters in each country listed for each of our customers.",
"It seems like almost all of them are 2s, which means the country field contains only two letters.",
"But we notice one that has 3.",
"That's not good.",
"We want our data to be consistent.",
"So let's check out which countries were incorrectly listed in our table.",
"We can do that by putting the LENGTH(country) function that we created into the WHERE clause.",
"Because we're telling SQL to filter the data to show only customers whose country contains more than two letters.",
"So now we'll write SELECT country FROM customer_data.",
"customer_address WHERE LENGTH(country) greater than 2.",
"When we run this query, we now get the two countries where the number of letters is greater than the 2 we expect to find.",
"The incorrectly listed countries show up as USA instead of US.",
"If we created this table, then we could update our table so that this entry shows up as US instead of USA.",
"But in this case, we didn't create this table, so we shouldn't update it.",
"We still need to fix this problem so we can pull a list of all the customers in the US, including the two that have USA instead of US.",
"The good news is that we can account for this error in our results by using the substring function in our SQL query.",
"To write our SQL query, let's start by writing the basic structure, SELECT, FROM, WHERE.",
"We know our data is coming from the customer_address table from the customer_data data set.",
"So we type in customer_data.",
"customer_address, after FROM.",
"Next, we tell SQL what data we want it to give us.",
"We want all the customers in the US by their IDs.",
"So we type in customer_id after SELECT.",
"Finally, we want SQL to filter out only American customers.",
"So we use the substring function after the WHERE clause.",
"We're going to use the substring function to pull the first two letters of each country so that all of them are consistent and only contain two letters.",
"To use the substring function, we first need to tell SQL the column where we found this error, country.",
"Then we specify which letter to start with.",
"We want SQL to pull the first two letters, so we're starting with the first letter, so we type in 1.",
"Then we need to tell SQL how many letters, including this first letter, to pull.",
"Since we want the first two letters, we need SQL to pull two total letters, so we type in 2.",
"This will give us the first two letters of each country.",
"We want US only, so we'll set this function to equals US.",
"When we run this query, we get a list of all customer IDs of customers whose country is the US, including the customers that had USA instead of US.",
"Going through our results, it seems like we have a couple duplicates where the customer ID is shown multiple times.",
"Remember how we get rid of duplicates?",
"We add DISTINCT before customer_id.",
"So now when we run this query, we have our final list of customer IDs of the customers who live in the US.",
"Finally, let's check out the TRIM function, which you've come across before.",
"This is really useful if you find entries with extra spaces and need to eliminate those extra spaces for consistency.",
"For example, let's check out the state column in our customer_address table.",
"Just like we did for the country column, we want to make sure the state column has the consistent number of letters.",
"So let's use the LENGTH function again to learn if we have any state that has more than two letters, which is what we would expect to find in our data table.",
"We start writing our SQL query by typing the basic SQL structure of SELECT, FROM, WHERE.",
"We're working with the customer_address table in the customer_data data set.",
"So we type in customer_data.",
"customer_address after FROM.",
"Next, we tell SQL what we want it to pull.",
"We want it to give us any state that has more than two letters, so we type in state, after SELECT.",
"Finally, we want SQL to filter for states that have more than two letters.",
"This condition is written in the WHERE clause.",
"So we type in LENGTH(state), and that it must be greater than 2 because we want the states that have more than two letters.",
"We want to figure out what the incorrectly listed states look like, if we have any.",
"When we run this query, we get one result.",
"We have one state that has more than two letters.",
"But hold on, how can this state that seems like it has two letters, O and H for Ohio, have more than two letters?",
"We know that there are more than two characters because we used the LENGTH(state) &gt; 2 statement in the WHERE clause when filtering out results.",
"So that means the extra characters that SQL is counting must then be a space.",
"There must be a space after the H.",
"This is where we would use the TRIM function.",
"The TRIM function removes any spaces.",
"So let's write a SQL query that accounts for this error.",
"Let's say we want a list of all customer IDs of the customers who live in\"O\" for Ohio.",
"We start with the basic SQL structure: FROM, SELECT, WHERE.",
"We know the data comes from the customer_address table in the customer_data data set, so we type in customer_data.",
"customer_address after FROM.",
"Next, we tell SQL what data we want.",
"We want SQL to give us the customer IDs of customers who live in Ohio, so we type in customer_id after SELECT.",
"Since we know we have some duplicate customer entries, we'll go ahead and type in DISTINCT before customer_id to remove any duplicate customer IDs from appearing in our results.",
"Finally, we want SQL to give us the customer IDs of the customers who live in Ohio.",
"We're asking SQL to filter the data, so this belongs in the WHERE clause.",
"Here's where we'll use the TRIM function.",
"To use the TRIM function, we tell SQL the column we want to remove spaces from, which is state in our case.",
"And we want only Ohio customers, so we type in = 'OH'.",
"That's it.",
"We have all customer IDs of the customers who live in Ohio, including that customer with the extra space after the H.",
"Making sure that your string variables are complete and consistent will save you a lot of time later by avoiding errors or miscalculations.",
"That's why we clean data in the first place.",
"Hopefully functions like length, substring, and trim will give you the tools you need to start working with string variables in your own data sets.",
"Next up, we'll check out some other ways you can work with strings and more advanced cleaning functions.",
"Then you'll be ready to start working in SQL on your own.",
"See you soon.",
]