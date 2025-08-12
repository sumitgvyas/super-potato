export default function handler(req, res) {
  const now = new Date();
  const formattedDateTime = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Welcome API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: white;
          text-align: center;
          padding: 50px;
        }
        .container {
          background: rgba(0,0,0,0.4);
          padding: 30px;
          border-radius: 15px;
          display: inline-block;
        }
        h1 {
          margin-bottom: 20px;
          font-size: 2.5em;
        }
        p {
          font-size: 1.2em;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello Sumit!</h1>
        <p>Your API is live on Vercel.</p>
        <p><strong>Current Date & Time:</strong><br>${formattedDateTime}</p>
        <p style="margin-top:20px;">This page is generated dynamically by your backend code.</p>
      </div>
    </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(htmlContent);
}
