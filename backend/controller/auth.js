import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
	if (!req.body.username || !req.body.email || !req.body.password) {
		return res.status(400).json("Please fill all fields"); // Uygun hata mesajı
	}

	const q = "SELECT * FROM users WHERE email=? OR username=?";
	db.query(q, [req.body.email, req.body.username], (err, data) => {
		if (err) return res.json(err);
		if (data.length) return res.status(409).json("User already exist");

		//Hash to password
		const saltRounds = 10;
		const myPlaintextPassword = req.body.password;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(myPlaintextPassword, salt);
      //
		const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
		const values = [req.body.username, req.body.email, hash];
		db.query(q, [values], (err, data) => {
			if (err) return res.json(err);
			return res.status(200).json("User has been created");
		});
	});
};
export const login = (req, res) => {
	const q = "SELECT * FROM users WHERE username = ?";
	db.query(q, [req.body.username], (err, data) => {
		if (err) return res.json(err);
		if (data.length === 0) return res.status(404).json("User not found");
		const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
		if (!isPasswordCorrect) return res.status(400).json("Wrong username or password");

		const token = jwt.sign({ id: data[0].id }, "jwtkey");
		const { password, ...other } = data[0];
		res.cookie("acces_token", token, {
			httpOnly: true,
		})
			.status(200)
			.json(other);
	});
};

export const logout = (req, res) => {
	res.clearCookie("acces_token", {
		sameSite: "none",
		secure: true,
	})
		.status(200)
		.json("User has been logged out");
};
