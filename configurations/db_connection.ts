import mongoose, { ConnectOptions } from 'mongoose';
import { exit } from 'process';
type newconnection = {
    useNewUrlParser: Boolean,
    useUnifiedTopology: Boolean
}
const options: ConnectOptions & newconnection = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect('mongodb://localhost/fb_be', options);
const db = mongoose.connection;

db.on("error", (err) => {
    console.log(err)
    console.log("*** Sorry Try Again *** ")
    process.exit()
})

db.once("open", () => {
    console.log("Congratulations ! You are allowed to perform your actions")
})