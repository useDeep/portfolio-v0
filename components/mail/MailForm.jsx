"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import styles from "./mailForm.module.scss";
import emailjs from "@emailjs/browser";

const Prompt = ({ status, errorMessage }) => {
  const [showSendingGif, setShowSendingGif] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSendingGif(false);
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, [showSendingGif]);

  return (
    <div className={styles.prompt}>
      {showSendingGif ? (
        <Image
          src="/windowsIcons/mail.gif"
          alt="sending mail"
          className={styles.sendingGif}
          width={90}
          height={90}
        />
      ) : status ? (
        <div>
          <div className={styles.promptHead}>
            <Image
              src="/windowsIcons/msg_success.png"
              alt="mail successfully sent"
              className={styles.promptImg}
              height={40}
              width={40}
            />
            <h3>Mail sent successfully!!</h3>
          </div>
          <p className={styles.successCode}>
            Now go and subscribe to my twttr to have 1000 years of luck!!
          </p>
        </div>
      ) : (
        <div>
          <div className={styles.promptHead}>
            <Image
              src="/windowsIcons/msg_error.png"
              alt="something went wrong"
              className={styles.promptImg}
              height={40}
              width={40}
            />
            <h2>Mail not delivered</h2>
          </div>
          <p className={styles.errorCode}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

const MailForm = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [status, setStatus] = useState();
  const [errorMessage, setErrorMessage] = useState(
    "o! oh! somehting went wrong"
  );
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    setShowPrompt(true);
    emailjs
      .sendForm(
        "service_pmmzcyj",
        "template_ahlaht3",
        form.current,
        "5OrdRR34kKotA-hlE"
      )
      .then(
        (result) => {
          console.log(`${result.text} : Message sent successfully`);
          setStatus(true);
          form.current.reset();
        },
        (error) => {
          console.log(
            `${error.text} : Message not sent! Try again. (or write to me at <hey.usedeep@gmail.com>)`
          );
          setStatus(false);
          setErrorMessage(error.text);
        }
      );

    const timeoutId = setTimeout(() => {
      setShowPrompt(false);
    }, 6000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <>
      <form ref={form} className={styles.form} onSubmit={handleSend}>
        <div className={styles.welcome}>
          <h2>Howdy!📣</h2>

          <input type="submit" className={styles.action} value="send" />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="from">From</label>
          <input type="email" name="from" id="from" required />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="to">To</label>
          <input
            type="email"
            id="to"
            className={styles.to}
            placeholder="hey.usedeep@gmail.com"
            disabled
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="subject"></label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <textarea
          className={styles.message}
          name="message"
          placeholder={`don't say nasty things like Deez nuts. Be a good son/daughter of your parents. Say "You'r hired" instead -- Thank you`}
          required
        ></textarea>
      </form>

      {showPrompt && <Prompt status={status} errorMessage={errorMessage} />}
    </>
  );
};

export default MailForm;
