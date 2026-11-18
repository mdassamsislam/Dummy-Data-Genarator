// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection

import express from "express";
import mongoose from "mongoose";
import path from "path";
import { employee } from "./models/employee.js";

const connection = await mongoose.connect("mongodb://localhost:27017/company");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const filePath = path.resolve("index.html"); // simplest fix
  res.sendFile(filePath);
});

app.post("/create", async (req, res) => {
  try {
    let names = [
      "Harry",
      "Sams",
      "anyone",
      "noone",
      "someone",
      "john doe",
      "Lorum ipsum",
      "harington",
      "Ibrahim",
      "khalid",
    ];

     let existing = await employee.find({
      name: { $in: names },
    });


    const employeeAdd_1 = new employee({
      name: names[0],
      salary: 45000000,
      language: "Python",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_1.save();

    const employeeAdd_2 = new employee({
      name: names[1],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_2.save();

    const employeeAdd_3 = new employee({
      name: names[2],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_3.save();

    const employeeAdd_4 = new employee({
      name: names[3],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_4.save();

    const employeeAdd_5 = new employee({
      name: names[4],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_5.save();

    const employeeAdd_6 = new employee({
      name: names[5],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_6.save();

    const employeeAdd_7 = new employee({
      name: names[6],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_7.save();


    const employeeAdd_8 = new employee({
      name: names[7],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_8.save();

    const employeeAdd_9 = new employee({
      name: names[8],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_9.save();

    const employeeAdd_10 = new employee({
      name: names[9],
      salary: 45000,
      language: "JS",
      city: "New York",
      isManager: true,
    });
    await employeeAdd_10.save();

   
    if (existing.length > 0) {
      // If exists → delete
      await employee.deleteMany({ name: { $in: names } });
      console.log("Deleted existing users");
    } else {
      // If not exists → insert
      await employee.insertMany(names.map((name) => ({ name })));
      console.log("Inserted new users");
    }

    res.send("DOne");
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
