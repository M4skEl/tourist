import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log('1')
  try {
    const data = await request.json();
    console.log('2')
    console.log('request', data)
    console.log('env', process.env.YANDEX_USER)
    console.log('env_2', process.env.YANDEX_PASS)
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.YANDEX_USER,
        pass: process.env.YANDEX_PASS,
      },
    });
    console.log('3')
    await transporter.sendMail({
      from: `"Партнёрская заявка" <${process.env.YANDEX_USER}>`,
      to: "siverelieseu7@gmail.com",
      subject: "Новая партнёрская заявка с сайта",
      html: `
        <h3>Поступила новая заявка на партнёрство</h3>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Организация:</strong> ${data.company}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Комментарий:</strong> ${data.comment}</p>
      `,
    });
    console.log('4')

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.log('5')
    console.error(error);
    return NextResponse.json(
      { status: "error", message: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
