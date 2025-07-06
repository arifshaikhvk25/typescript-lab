// Basic Types
// 1.boolean, number, string
// 2. [] array, tuples
// 3. enums
var a;
a = "TypeScript";
var b = "JavaScript";
// tuples
var tuplesArr = [true, 1, "typescript"];
// enum
var coding;
(function (coding) {
  coding["language"] = "typescript";
  coding["editor"] = "vs code";
  coding[(coding["date"] = 6)] = "date";
  coding["day"] = "sunday";
  coding["month"] = "july";
  coding[(coding["year"] = 2025)] = "year";
})(coding || (coding = {}));
console.log(coding.language, "front language");
//////
// type inference //  its sets the type base on the value
var c = "ts";
var d = 1;
var e = true;
var f = [];
// union
var g;
g = "abc";
g = 1;
// g = true; //  this will not work because we have said that g will be string or number
var unionInferencer = function (val) {
  console.log(val, "front val");
  if (typeof val === "string") {
    return val.toUpperCase();
  } else if (typeof val === "number") {
    return val.toFixed(3);
  }
};
console.log(unionInferencer("typescript"), "front unionInferencer()");
console.log(unionInferencer(25.45345435345345), "front unionInferencer()");
var values1 = {
  langName: "TypeScript",
  editor: "vs code",
  yes: true,
  date: 6,
  day: "sunday",
};
console.log(values1, "front values1");
