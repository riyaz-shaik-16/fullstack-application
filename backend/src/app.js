import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";

import projectRoutes from "./routes/project.route.js";
import clientRoutes from "./routes/client.route.js";
import contactRoutes from "./routes/contact.route.js";
import subscriberRoutes from "./routes/subscriber.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ status: "ok" });
});


app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);



app.use(errorMiddleware);
export default app;
