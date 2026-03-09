import express from "express";
import userRoutes from "./src/routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server rodando http://localhost:${PORT}`);
});