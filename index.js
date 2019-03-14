
const mongodb = require('mongodb');
const Mongoclient = mongodb.MongoClient;
const uri = "mongodb+srv://mongouser1:mongouserpass1@cluster0-b1t5a.mongodb.net/test?retryWrites=true";
const mongoclient = new Mongoclient(uri, { useNewUrlParser: true });

mongoclient.connect(err => {
	if(err) {
		console.log(err);
		return;
	}
	const collection = mongoclient.db("FirstMongoDB").collection("Misc");
	let data = collection.find("{status:true}").toArray((err, result)=>{
		if(err) throw err;
		console.log(result);		
		mongoclient.close();
	});
	//console.log(collection);
});