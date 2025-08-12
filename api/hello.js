export default function handler(req, res) {
  const now = new Date();

  // Format date and time in a nice way for Jaipur
  const formattedDateTime = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",      // Monday, Tuesday, etc.
    year: "numeric",
    month: "long",        // January, February, etc.
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  res.status(200).json({
    message: "Hello Sumit! Your API is live on Vercel.",
    currentDateTime: formattedDateTime,
    note: "This is your custom backend — you can make it return anything you want."
  });
}
