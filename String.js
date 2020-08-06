
// [String]

const strDouble = "Hello world";

const strSingle = 'Hello world';

// String can also be treated like zero index based character array.
const str3 = 'Hello World';

str3.length //  11

// String is character index, it can be accessed using for loop
const str4 = 'Hello World';

for (let i = 0; i < str4.length; i++) {
//    console.log(str4[i])
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

// Properties

// length of string value 

const hello = 'Hello';
hello.length // 5

// get value of position in string value
hello.charAt(0); // H


// get unicode of value in string value
hello.charCodeAt(0) // 72

// Joins specified string literal values
const world = ' world!'; 
hello.concat(world) // Hello world!

// Returns the index of first occurrence of specified String starting return -1 if not found
hello.indexOf('l') // 2
hello.indexOf('l',3) // 3
hello.indexOf('l',4) // -1 Not found

// Returns the last occurrence index of specified SearchString, starting from specified position. Returns -1 if not found.
hello.lastIndexOf('l') // 3
hello.lastIndexOf('l',2) // 2
hello.lastIndexOf('l',1) // -1 Not found

// 	Compares two strings in the current locale.
const string1 = 'ก'
const string2 = 'ข'
string1.localeCompare(string2, 'th') // -1
string2.localeCompare(string1, 'th') // 1

// -1 คือ ลำดับ string ตัวที่เรียก function อยู่ก่อนลำดับของ string ที่นำมาเปรียบเทียบ
//  0 คือ ลำดับ string ตัวที่เรียก function อยู่ลำดับเดียวกับ string ที่นำมาเปรียบเทียบ
//  1 คือ ลำดับ string ตัวที่เรียก function อยู่หลังลำดับของ string ที่นำมาเปรียบเทียบ

// Example localeCompare

const sortThaiDictionary = list => {
    list.sort((a, b) => a.localeCompare(b, 'th'))
    return list
}

const list = ['ข', 'ค', 'ก']
const sortedList = sortThaiDictionary(list)

// expected output: ['ก', 'ข', 'ค']

// Match Search a string for a match using specified regular expression. Returns a matching array.
hello.match('\H') //[ 'H', index: 0, input: 'Hello', groups: undefined ]

// ---------------------------------------------------------------
