import express from 'express';
import mongoose from  "mongoose";
import animalRouter from './routes/animal-routes';
import donationRouter from './routes/donation-routes';

const app = express();

app.use("/api/animals",animalRouter);
app.use("/api/donations",donationRouter);

mongoose.connect( 
    'mongodb+srv://jaksa:jaksa@cluster0.yxce6mp.mongodb.net/?retryWrites=true&w=majority'
)
.then(()=>app.listen(5000))
.then(()=>
console.log("Spojeno na bazu podataka, server slusa port 5000."))
.catch((err)=>
console.log(err));