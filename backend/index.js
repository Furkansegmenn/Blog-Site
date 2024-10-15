import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cooikeParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cooikeParser());
app.use(
	cors({
		origin: "http://localhost:5173", // Frontend'in çalıştığı URL
		methods: ["GET", "POST", "PUT", "DELETE"], // İzin verilen HTTP metodları
		allowedHeaders: "*", // İzin verilen başlıklar
	})
);
app.options("*", cors());

// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, "/tmp/my-uploads");
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, Date.now() + file.originalname);
// 	},
// });

const upload = multer({ dest: "./uploads/" });

app.post("/api/upload", upload.single("file"), function (req, res) {
	// const file = req.file;
	// res.status(200).json(file.filename);
	res.json("image has been updated");
});

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);		
app.use("/api/auth", authRoutes);

app.listen(8080, () => {
	console.log("Connected!!");
});
