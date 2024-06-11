"use client";
import React, { useState, useEffect } from 'react';

import { validationSchema } from "../../utils/validation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Popup from './Popup';

import { ToastContainer, toast } from "react-toastify";


type FormValues = {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setPopup] = useState(false);

    const showPopupHandler = () => setPopup(true);

    useEffect(()=> {
        const timer = setTimeout(() => {
            setPopup(false);
        }, 5000);
        
        return () => clearTimeout(timer);
    }, [showPopup]);

    let popup = null;
    if(showPopup) {
      popup = <Popup />;
     }

    const handleSubmit = async (
        values: FormValues,
        {
            setSubmitting,
            resetForm,
        }: {
            setSubmitting: (isSubmitting: boolean) => void;
            resetForm: () => void;
        }
    ) => {
        try {
            // send mail using Nodemailer
            await fetch("api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            console.log("message sent!")

            //Reset the form 
            resetForm();
        } catch (error) {
            console.error("Failed to send email:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact">
            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={toFormikValidationSchema(validationSchema)}
                onSubmit={handleSubmit}>
                <Form>
                    <div className="lg:w-1/2 md:w-1/2 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <div>
                                        <label>Name</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-outs"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">

                                    <div>
                                        <label>Email</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-outs"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label> Message</label>
                                    <Field
                                        type="text"
                                        id="message"
                                        as="textarea"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-outs"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="div"
                                        className="text-red-500" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                {popup}
                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                                    onClick={showPopupHandler}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </section>
    )
}

export default ContactForm;
