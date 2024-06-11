import {NextRequest, NextResponse} from "next/server";

import {render} from "@react-email/components";

import {transporter, smtpEmail} from "@/utils/nodemailer";

import Email from "@/app/components/Email";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { name, email, message } = body;

    {/* html that will be sent to my email */}
    const emailHtml = render(
        <Email name={name} email={email} message={message}/>
    );

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: "New Form Submissio from Website!",
        html: emailHtml,
    };

    try{
        //send email using transporter
        transporter.sendMail(options);
    }catch (error) {
            console.log("Failed to send email", error);
        }
    return new Response("OK");
}

