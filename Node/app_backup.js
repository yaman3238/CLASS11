import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });
const app = express();
app.get('/', (req, res) =>
{
    res.send('Test from Express');
})

app.get("/employee", (req, res) => {
    fs.readFile(
      path.join(__dirname, "employee", "data", "employee.json"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        res.status(200).json(JSON.parse(data));
      }
    );
  });

app.listen(process.env.PORT, (err) =>
{
    if (err) throw err;
    console.log(`Server is running on : ${process.env.PORT}`);
})