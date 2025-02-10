const mongoose = require('mongoose')
const mongo_conn = "mongodb+srv://bookstore:book@clusterbook.46g5y.mongodb.net/bookstore_DB?retryWrites=true&w=majority&appName=ClusterBook"
// const mongo_conn = "mongodb://localhost:27017"
const mongo_url = mongo_conn


mongoose.connect(mongo_url)
.then(() => {
    console.log("MONGO_DB Connected");
}).catch((err) =>{
    console.log(" MONGO_DB Connection Error", err);
})

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://localhost:27017");
//     console.log("CONNECTED_MONGOD");
//   } catch (error) {
//     console.log("Error connecting to MONGODB:", error);
//   }
// };

// export default connectDB