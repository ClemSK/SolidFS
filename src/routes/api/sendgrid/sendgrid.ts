import sendgrid from "@sendgrid/mail";

// @ts-ignore
sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

async function sendEmail(req: Request, res: Response, formData: FormData) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "bluechipdevs@outlook.com", // Your email where you'll receive emails
      from: "clemskyn@gmail.com", // your website email address here
      subject: `hello world`,
      // subject: `${req.body}`,
      // subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    console.error(
      "error:res.status: ", res.status,
      // "error message: ", err.message
    );
    return res.status;
    // return res.status(500);
    // return res.status(res.status || 500).json({ error: err.message });
  }

  console.log("success:res.status: ", res.status);
  return res.status;
  // return res.status(200).json({ error: "" });
}

export default sendEmail;
