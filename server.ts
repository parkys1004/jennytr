import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API routes
  app.post("/api/consultation", async (req, res) => {
    const { name, phone, age, message } = req.body;

    // Validation
    if (!name || !phone || !age) {
      return res.status(400).json({ error: "필수 정보를 모두 입력해주세요." });
    }

    try {
      // Nodemailer setup
      // Note: In production, you would use environment variables for credentials
      // For this demo, we'll try to use the variables if provided, otherwise log the attempt
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.VITE_EMAIL_USER || "jjy0278@gmail.com", // This should be the sender
          pass: process.env.VITE_EMAIL_PASS, // App password required for Gmail
        },
      });

      const mailOptions = {
        from: process.env.VITE_EMAIL_USER || "jjy0278@gmail.com",
        to: "jjy0278@gmail.com",
        subject: `[상담 신청] ${name} 학부모님`,
        text: `
상담 신청이 접수되었습니다.

- 성함: ${name}
- 연락처: ${phone}
- 아이 나이/학년: ${age}
- 문의 내용: ${message || "없음"}

---
제니 영어 교육 (Jenny Tr.)
        `,
      };

      // If credentials are not set, we'll just simulate success and log the data
      if (!process.env.VITE_EMAIL_PASS) {
        console.log("Email credentials not found. Simulating email send for:");
        console.log(mailOptions);
        return res.status(200).json({ 
          success: true, 
          message: "상담 신청이 접수되었습니다. (개발 환경: 이메일 전송은 서버 로그를 확인해주세요.)" 
        });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "상담 신청이 이메일로 전송되었습니다!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "이메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
