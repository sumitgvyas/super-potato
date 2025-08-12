export default function handler(req, res) {
  const currentTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
  });
  
  res.status(200).json({
    message: "Hello Sumit! Your API is live on Vercel.",
    time: currentTime,
    tip: "You can change this file to make your API do anything you want."
  });
}
