// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to log connect to MongoDB server');
	} 

	console.log('Connect to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: "Something to do",
	// 	completed: "False"
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo');
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });


	// ****

	// var names = ['Mike', 'Sonia', 'Anna', 'Jenia', 'Boris'];
	// var ages = [28, 31, 30, 22, 27];
	// var location = "Saint-Petersburg";

	// var users = [];

	// for (var i = 0; i <= 0; i++) {
	// 	var person = {};
	// 	person.name = names[i];
	// 	person.age = ages[i];
	// 	person.location = location;

	// 	db.collection('Users').insertOne(person, (err, result) => {
	// 		if (err) {
	// 			return console.log('Unable to insert Todo');
	// 		}

	// 		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// 	});
	// }

	db.close();
});

