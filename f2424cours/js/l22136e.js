var l22136e = [
"Matrix Vector Multiplication.",
"In this video, I'd like to start talking about how to multiply together two matrices.",
"We'll start with a special case of that, of matrix vector multiplication - multiplying a matrix together with a vector.",
"Let's start with an example.",
"Here is a matrix, and here is a vector, and let's say we want to multiply together this matrix with this vector, what's the result?",
"Let me just work through this example and then we can step back and look at just what the steps were.",
"It turns out the result of this multiplication process is going to be, itself, a vector.",
"And I'm just going work with this first and later we'll come back and see just what I did here.",
"To get the first element of this vector I am going to take these two numbers and multiply them with the first row of the matrix and add up the corresponding numbers.",
"Take one multiplied by one, and take three and multiply it by five, and that's what, that's one plus fifteen so that gives me sixteen.",
"I'm going to write sixteen here.",
"then for the second row, second element, I am going to take the second row and multiply it by this vector, so I have four times one, plus zero times five, which is equal to four, so you'll have four there.",
"And finally for the last one I have two one times one five, so two by one, plus one by 5, which is equal to a 7, and so I get a 7 over there.",
"It turns out that the results of multiplying that's a 3x2 matrix by a 2x1 matrix is also just a two-dimensional vector.",
"The result of this is going to be a 3x1 matrix, so that's why three by one 3x1 matrix, in other words a 3x1 matrix is just a three dimensional vector.",
"So I realize that I did that pretty quickly, and you're probably not sure that you can repeat this process yourself, but let's look in more detail at what just happened and what this process of multiplying a matrix by a vector looks like.",
"Here's the details of how to multiply a matrix by a vector.",
"Let's say I have a matrix A and want to multiply it by a vector x.",
"The result is going to be some vector y.",
"So the matrix A is a m by n dimensional matrix, so m rows and n columns",
"and we are going to multiply that by a n by 1 matrix, in other words an n dimensional vector.",
"It turns out this \"n\" here has to match this \"n\" here.",
"In other words, the number of columns in this matrix, so it's the number of n columns.",
"The number of columns here has to match the number of rows here.",
"It has to match the dimension of this vector.",
"And the result of this product is going to be an n-dimensional vector y. Rows here.",
"\"M\" is going to be equal to the number of rows in this matrix \"A\".",
"So how do you actually compute this vector \"Y\"?",
"Well it turns out to compute this vector \"Y\", the process is to get \"Y\"\"I\", multiply \"A's\" \"I'th\" row with the elements of the vector \"X\" and add them up.",
"So here's what I mean.",
"In order to get the first element of \"Y\", that first number--whatever that turns out to be--we're gonna take the first row of the matrix \"A\" and multiply them one at a time with the elements of this vector \"X\".",
"So I take this first number multiply it by this first number.",
"Then take the second number multiply it by this second number.",
"Take this third number whatever that is, multiply it the third number and so on until you get to the end.",
"And I'm gonna add up the results of these products and the result of paying that out is going to give us this first element of \"Y\".",
"Then when we want to get the second element of \"Y\", let's say this element.",
"The way we do that is we take the second row of A and we repeat the whole thing.",
"So we take the second row of A, and multiply it elements-wise, so the elements of X and add up the results of the products and that would give me the second element of Y.",
"And you keep going to get and we going to take the third row of A, multiply element Ys with the vector x, sum up the results and then I get the third element and so on, until I get down to the last row like so, okay?",
"So that's the procedure.",
"Let's do one more example.",
"Here's the example: So let's look at the dimensions.",
"Here, this is a three by four dimensional matrix.",
"This is a four-dimensional vector, or a 4 x 1 matrix, and so the result of this, the result of this product is going to be a three-dimensional vector.",
"Write, you know, the vector, with room for three elements.",
"Let's do the, let's carry out the products.",
"So for the first element, I'm going to take these four numbers and multiply them with the vector X.",
"So I have 1x1, plus 2x3, plus 1x2, plus 5x1, which is equal to - that's 1+6, plus 2+6, which gives me 14.",
"And then for the second element, I'm going to take this row now and multiply it with this vector (0x1)+3.",
"All right, so 0x1+ 3x3 plus 0x2 plus 4x1, which is equal to, let's see that's 9+4, which is 13.",
"And finally, for the last element, I'm going to take this last row, so I have minus one times one.",
"You have minus two, or really there's a plus next to a two I guess.",
"Times three plus zero times two plus zero times one, and so that's going to be minus one minus six, which is going to make this seven, and so that's vector seven.",
"Okay?",
"So my final answer is this vector fourteen, just to write to that without the colors, fourteen, thirteen, negative seven.",
"And as promised, the result here is a three by one matrix.",
"So that's how you multiply a matrix and a vector.",
"I know that a lot just happened on this slide, so if you're not quite sure where all these numbers went, you know, feel free to pause the video you know, and so take a slow careful look at this big calculation that we just did and try to make sure that you understand the steps of what just happened to get us these numbers,fourteen, thirteen and eleven.",
"Finally, let me show you a neat trick.",
"Let's say we have a set of four houses so 4 houses with 4 sizes like these.",
"And let's say I have a hypotheses for predicting what is the price of a house, and let's say I want to compute, you know, H of X for each of my 4 houses here.",
"It turns out there's neat way of posing this, applying this hypothesis to all of my houses at the same time. It turns out there's a neat way to pose this as a Matrix Vector multiplication.",
"So, here's how I'm going to do it.",
"I am going to construct a matrix as follows.",
"My matrix is going to be 1111 times, and I'm going to write down the sizes of my four houses here",
"and I'm going to construct a vector as well, And my vector is going to this vector of two elements, that's minus 40 and 0.25.",
"That's these two co-efficients; data 0 and data 1.",
"And what I am going to do is to take matrix and that vector and multiply them together, that times is that multiplication symbol.",
"So what do I get?",
"Well this is a four by two matrix. This is a two by one matrix. So the outcome is going to be a four by one vector, all right.",
"So, let me, so this is going to be a 4 by 1 matrix is the outcome or really a four diminsonal vector, so let me write it as one of my four elements in my four real numbers here.",
"Now it turns out and so this first element of this result, the way I am going to get that is, I am going to take this and multiply it by the vector.",
"And so this is going to be -40 x 1 + 4.25 x 2104.",
"By the way, on the earlier slides I was writing 1 x -40 and 2104 x 0.25, but the order doesn't matter, right?",
"-40 x 1 is the same as 1 x -40.",
"And this first element, of course, is \"H\" applied to 2104.",
"So it's really the predicted price of my first house.",
"Well, how about the second element?",
"Hope you can see where I am going to get the second element.",
"Right?",
"I'm gonna take this and multiply it by my vector.",
"And so that's gonna be -40 x 1 + 0.25 x 1416.",
"And so this is going be \"H\" of 1416.",
"Right?",
"And so on for the third and the fourth elements of this 4 x 1 vector.",
"And just there, right?",
"This thing here that I just drew the green box around, that's a real number, OK?",
"That's a single real number, and this thing here that I drew the magenta box around--the purple, magenta color box around--that's a real number, right?",
"And so this thing on the right--this thing on the right overall, this is a 4 by 1 dimensional matrix, was a 4 dimensional vector.",
"And, the neat thing about this is that when you're actually implementing this in software--so when you have four houses and when you want to use your hypothesis to predict the prices, predict the price \"Y\" of all of these four houses.",
"What this means is that, you know, you can write this in one line of code.",
"When we talk about octave and program languages later, you can actually, you'll actually write this in one line of code.",
"You write prediction equals my, you know, data matrix times parameters, right?",
"Where data matrix is this thing here, and parameters is this thing here, and this times is a matrix vector multiplication.",
"And if you just do this then this variable prediction - sorry for my bad handwriting - then just implement this one line of code assuming you have an appropriate library to do matrix vector multiplication.",
"If you just do this, then prediction becomes this 4 by 1 dimensional vector, on the right, that just gives you all the predicted prices.",
"And your alternative to doing this as a matrix vector multiplication would be to write eomething like , you know, for I equals 1 to 4, right?",
"And you have say a thousand houses it would be for I equals 1 to a thousand or whatever.",
"And then you have to write a prediction, you know, if I equals.",
"and then do a bunch more work over there and it turns out that When you have a large number of houses, if you're trying to predict the prices of not just four but maybe of a thousand houses then it turns out that when you implement this in the computer, implementing it like this, in any of the various languages.",
"This is not only true for Octave, but for Supra Server Java or Python, other high-level, other languages as well.",
"It turns out, that, by writing code in this style on the left, it allows you to not only simplify the code, because, now, you're just writing one line of code rather than the form of a bunch of things inside.",
"But, for subtle reasons, that we will see later, it turns out to be much more computationally efficient to make predictions on all of the prices of all of your houses doing it the way on the left than the way on the right than if you were to write your own formula.",
"I'll say more about this later when we talk about vectorization, but, so, by posing a prediction this way, you get not only a simpler piece of code, but a more efficient one.",
"So, that's it for matrix vector multiplication and we'll make good use of these sorts of operations as we develop the living regression in other models further.",
"But, in the next video we're going to take this and generalize this to the case of matrix matrix multiplication.",
]