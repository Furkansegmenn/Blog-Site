import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:5173", // Frontend'in çalıştığı URL
		methods: ["GET", "POST", "PUT", "DELETE"], // İzin verilen HTTP metodları
		allowedHeaders: "*", // İzin verilen başlıklar
	})
);
app.options("*", cors());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8080, () => {
	console.log("Connected!!");
});
