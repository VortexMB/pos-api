import express, {Request, Response} from "express";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.get('/customers', async (req: Request, res: Response) => {

    const customers = [
        {
            name: "John Doe",
            email: "john@doe.com",
            phone: "+91 8487996556"
        },
        {
            name: "John Smith",
            email: "john@smith.com",
            phone: "+91 8487997557"
        }
    ];
    return res.status(200).json(customers);
});