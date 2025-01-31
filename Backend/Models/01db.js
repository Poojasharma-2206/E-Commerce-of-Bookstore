const mongoose = require('mongoose')
const mongo_conn = "mongodb+srv://bookstore:book@clusterbook.46g5y.mongodb.net/bookstore_DB?retryWrites=true&w=majority&appName=ClusterBook"
const mongo_url = mongo_conn

mongoose.connect(mongo_url)
.then(() => {
    console.log("MONGO_DB Connected");
}).catch((err) =>{
    console.log(" MONGO_DB Connection Error", err);
})