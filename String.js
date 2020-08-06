
// [String]

const strDouble = "Hello world";

const strSingle = 'Hello world';

// String can also be treated like zero index based character array.
const str3 = 'Hello World';

str3.length //  11

// String is character index, it can be accessed using for loop
const str4 = 'Hello World';

for (let i = 0; i < str4.length; i++) {
   console.log(str4[i])
}

// Concatenation
const str5 = 'Hello ' + "World " + 'from ' + 'TutorialsTeacher ';

// Template literals (Template strings)

const str6 = `string text`;

const str7 = `string text line 1
 string text line 2`;

const str8 = `string text ${str6} string text`;

// Include quotation marks inside string

const lorem1 = "This is 'simple' string";

var lorem2 = 'This is "simple" string';

// ---------------------------------------------------------------
