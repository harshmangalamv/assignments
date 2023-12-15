/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  output = [];

  map1 = {}

  for(let object of transactions){ // dont use for...in way
    if(map1[object["category"]]){
      map1[object["category"]] += object["price"];
    }
    else{
      map1[object["category"]] = object["price"];
    }
  }

  for(let key in map1){
    output.push({
      "category" : key, // "category" and category are both okay to use
      "totalSpent" : map1[key]
    });
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
