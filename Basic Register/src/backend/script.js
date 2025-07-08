import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import userRoute from './userRoute.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);

mongoose.connect("Your database address")
.then(() => {console.log("The database has been connected")})
.then(() => {app.listen(8080, () => console.log(`Server running on http://localhost:${8080}`));
});
