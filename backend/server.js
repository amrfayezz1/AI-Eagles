const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

dotenv.config(); // Load .env variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(cors({
    origin: "http://localhost:5173", // React app URL
    credentials: true, // Allow cookies
}));

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));

let etherealTransporter;

(async () => {
    const testAccount = await nodemailer.createTestAccount();
    etherealTransporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // Generated test user
            pass: testAccount.pass, // Generated test password
        },
    });
})();

// Email Sending Endpoint
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "test@ethereal.email", // You can set any recipient for testing
        subject: `Message from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`,
    };

    try {
        const info = await etherealTransporter.sendMail(mailOptions);
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // Log preview URL
        return res.status(200).json({
            message: "Email sent successfully",
            previewUrl: nodemailer.getTestMessageUrl(info), // Send preview URL in response
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).send("Error sending email");
    }
});

// Start the Server (change port to avoid conflict with frontend)
const PORT = process.env.PORT || 5000;  // Default port 5000 for backend
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
