//Refactored code
// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

// const csv = `
// // 1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232
// // `

// // const lines = csv.split('\n').filter(line => line.length > 0);

// // for (const line of lines) {
// //   const [id, x, y, z] = line.split(',');
// //   console.log(id, x, y, z);
// // }


///Part 2
// const test = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// const twoDArray = test.split("\n").map((el) => el.split(","));
// console.log(twoDArray);

// //Part 3
// const attrs = test_input.shift()

// const result = test_input.map((el) => {
//   const obj = {}
//   attrs.forEach((attr, i) => {
//     obj[attr.toLowerCase()] = el[i]
//   })
//   return obj
// })

// console.log(result)

//part 4
// const test_input = [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]
// const test_output = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

// const attrs = test_input.shift()

// const result = test_input.map((el) => {
//   const obj = {}
//   attrs.forEach((attr, i) => {
//     obj[attr.toLowerCase()] = el[i]
//   })
//   return obj
// })

// console.log(result)

// Part 5
function backToCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr);
    return array.map(it => {
        return Object.values(it).toString();
    }).join('\n');
}

const test_input = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

const result = backToCSV(test_input);
console.log(result);