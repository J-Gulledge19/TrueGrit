import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, item, notes } = await req.json();

  try {
    const data = await resend.emails.send({
    // "from" needs to be updated with a valid domain after you purchase one
      from: 'True Grit Welding <orders@truegritwelding.com>',
      to: ['orders.truegritwelding@gmail.com'],
    
    // test delivery successful
    //   to: ['delivered@resend.com'],
    
    //   test bounced emails
    // to: ['bounced@resend.dev'],
    
    // test "marked as spam"
    // to: ['complain@resend.dev'],
      subject: `New Custom Order Request from ${name}`,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Phone:</strong> ${phone}<br/>
        <strong>Item:</strong> ${item}<br/>
        <strong>Notes:</strong><br/> ${notes.replace(/\n/g, "<br/>")}
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
