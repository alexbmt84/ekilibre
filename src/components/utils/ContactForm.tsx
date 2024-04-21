"use client"
import React, {FormEvent, useRef, useState} from "react";
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button";
import emailjs from '@emailjs/browser';

export function ContactForm() {

    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
    };
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const sendEmail = (e: FormEvent) => {

        e.preventDefault();

        if (form.current) {

            emailjs.sendForm(
                'service_ibcha4a',
                'email_ekilibre',
                form.current,
                '2hM49oHwWjixWTOGu')

                .then(
                    (result) => {
                        console.log(result.text);
                        setSuccess(true);
                        setError(false);
                    },
                    (error) => {
                        console.log(error.text);
                        setSuccess(false);
                        setError(true);
                    },
                )

                .finally(() => {
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                });

        }

    };

    const closeAlert = () => {
        setSuccess(false);
        setError(false);
    }

    return (
        <div className={"w-full pb-32 py-12 md:py-24 bg-black"}>

            <form ref={form}
                  onSubmit={sendEmail}
                  className={"container grid max-w-2xl px-4 md:px-6 gap-10 mx-auto"}>

                <div className={"space-y-2"}>

                    <h2 className={"uppercase text-3xl font-bold text-white tracking-tighter md:text-5xl/tight text-center mt-5"}>
                        Contact
                    </h2>

                    <h3 className={"text-gray-500 dark:text-gray-400 text-center pt-5 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                        Laissez moi votre message et je reviendrai vers vous dès que possible.
                    </h3>

                </div>

                <div className={"space-y-4 mx"}>

                    <div className={"grid grid-cols-2 gap-4"}>

                        <div className={"space-y-2"}>

                            <Label htmlFor={"first-name"}
                                   className={"text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                                Prénom *
                            </Label>

                            <Input id={"first-name"}
                                   name={"first_name"}
                                   className={"text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}
                                   placeholder={"Votre prénom"}
                                   value={firstName}
                                   onChange={handleFirstNameChange}
                                   required={true}
                            />

                        </div>

                        <div className={"space-y-2"}>

                            <Label htmlFor={"last-name"}
                                   className={"text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                                Nom *
                            </Label>

                            <Input id={"last-name"}
                                   name={"last_name"}
                                   className={"text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}
                                   placeholder={"Votre nom"}
                                   value={lastName}
                                   onChange={handleLastNameChange}
                                   required={true}
                            />

                        </div>

                    </div>

                    <div className={"space-y-2"}>

                        <Label htmlFor={"email"}
                               className={"text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                            Email *
                        </Label>

                        <Input id={"email"}
                               name={"email"}
                               className={"text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}
                               placeholder={"Votre email"}
                               type={"email"}
                               value={email}
                               onChange={handleEmailChange}
                               required={true}
                        />

                    </div>

                    <div className={"space-y-2"}>

                        <Label htmlFor={"subject"}
                               className={"text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                            Objet *
                        </Label>

                        <Input id={"subject"}
                               name={"subject"}
                               className={"text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}
                               placeholder={"Objet du message"}
                               value={subject}
                               onChange={handleSubjectChange}
                               required={true}
                        />

                    </div>

                    <div className={"space-y-2"}>

                        <Label htmlFor={"message"}
                               className={"text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}>
                            Message *
                        </Label>

                        <Textarea className={"min-h-[100px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"}
                                  name={"message"}
                                  id={"message"}
                                  placeholder={"Votre message"}
                                  value={message}
                                  onChange={handleMessageChange}
                                  required={true}
                        />

                    </div>

                    <div className={"text-center mb-3"}>

                        {success && !error && (
                            <div
                                className={"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"}
                                role={"alert"}>

                                <strong className={"font-bold"}>Merci ! </strong>

                                <span className={"block sm:inline"}>
                                    Votre demande a été envoyée avec succès.
                                </span>

                                <span className={"absolute top-0 bottom-0 right-0 px-4 py-3"}>

                                    <svg onClick={closeAlert}
                                         className={"fill-current h-6 w-6 text-green-500"}
                                         role={"button"}
                                         xmlns={"http://www.w3.org/2000/svg"}
                                         viewBox={"0 0 20 20"}>

                                        <title>Close</title>

                                        <path
                                            d={"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}
                                        />

                                    </svg>

                              </span>

                            </div>
                        )}

                        {!success && error && (
                            <div className={"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"}
                                 role={"alert"}>

                                <strong className={"font-bold"}>Oups. </strong>

                                <span className={"block sm:inline"}>
                                    Une erreur s&apos;est produite lors de l&apos;envoi de votre demande.
                                </span>

                                <span className={"absolute top-0 bottom-0 right-0 px-4 py-3"}>

                                    <svg onClick={closeAlert}
                                         className={"fill-current h-6 w-6 text-red-500"}
                                         role={"button"}
                                         xmlns={"http://www.w3.org/2000/svg"}
                                         viewBox={"0 0 20 20"}>

                                        <title>Close</title>

                                          <path
                                              d={"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"}
                                          />

                                    </svg>

                              </span>

                            </div>
                        )}

                    </div>

                    <Button type={"submit"}
                            className={"w-full"}>
                        Envoyer
                    </Button>

                </div>

            </form>

        </div>
    )
}
