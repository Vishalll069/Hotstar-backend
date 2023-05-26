const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb+srv://vishaldurge567:masai@cluster0.x0skflh.mongodb.net/hotstar?retryWrites=true&w=majority';
const db = async () => {
    await mongoose.connect(mongoDB);
    console.log('Connected to MongoDB')
}
module.exports = { db, mongoDB };