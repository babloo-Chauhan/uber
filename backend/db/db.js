
import mongoose from "mongoose";




function connectToDb() {
    mongoose.connect("mongodb+srv://b8416800849:Dx8yTsrRoMz31QP7@cluster0.abp4f.mongodb.net/"
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}


export default connectToDb;