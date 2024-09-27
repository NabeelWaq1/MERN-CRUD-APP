import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './Config/db.js';
import productRouter from './Routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

app.use('/api/products',productRouter)


const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"/FrontEnd/dist")));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'FrontEnd','dist','index.html'));
    })
}


app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at localhost:${PORT}`);
})

// xIbVqNCo2u2zdmU2