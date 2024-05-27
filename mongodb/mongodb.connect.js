const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://rasmusklaaser:Fc1mTeE1LJflzpGp@veebirakendus.zztpzb6.mongodb.net/?retryWrites=true&w=majority&appName=Veebirakendus",
            { useNewUrlParser: true } 
        );
        
    } catch (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
    } 
} 

module.exports = { connect } 