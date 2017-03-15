// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if (err) {
		return console.log('Unable to log connect to MongoDB server');
	} 

	console.log('Connect to MongoDB server');

	// findOneAndUpdate
	// Update Operators:
	// https://docs.mongodb.com/manual/reference/operator/update/

	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID("58c8de17389ea21a4bc184d4")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		name : "Mike"
	}, {
		$set: {
			name: "Misha Malyarov",
			team: "Alliance"
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});

