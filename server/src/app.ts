import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import { getPort } from "./config";
import { sequelizeConnection } from "./db/dbConnection";
import { ProductRouter } from "./routers/product";
import { UserRouter } from "./routers/user";
const app = express();

// sequelizeConnection.sync();

app.use(bodyParser.json());

app.use(express.json());
app.use(cors())
app.use(ProductRouter)
app.use(UserRouter)

app.listen(getPort(), () => {
  return console.log(`Express is listening at http://localhost:${getPort()}`);
});
