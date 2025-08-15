const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://zhout7449:qa80sQUvY3XdFIOM@cluster0.belei5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
module.exports = connectDB;


