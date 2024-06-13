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

    //verify connection configuration
    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: "New Form Submissio from Website!",
        html: emailHtml,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(options, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
    return new Response("OK");
}

