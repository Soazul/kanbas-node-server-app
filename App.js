// const express = require('express') // equivalent to import
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Courses/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Courses/Assignments/routes.js";
import cors from "cors";
const app = express(); // create new express instance
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);