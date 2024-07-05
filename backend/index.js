import 'dotenv/config'
import express from 'express';
import morgan from 'morgan';
import Router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

// [Route API]
Router(app)

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
