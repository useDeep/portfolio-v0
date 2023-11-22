"use client";
import { useRef } from "react";
import styles from "./mailForm.module.scss";
import emailjs from "@emailjs/browser";

const MailForm = () => {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
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
          form.current.reset();
        },
        (error) => {
          console.log(
            `${error.text} : Message not sent! Try again. (or write to me at <hey.usedeep@gmail.com>)`
          );
          alert(
            `${error.text} : Message not sent! Try again. (or write to me at <hey.usedeep@gmail.com>)`
          );
        }
      );
  };

  return (
    <form ref={form} className={styles.form} onSubmit={handleSend}>
      <div className={styles.welcome}>
        <h2>Howdy!📣</h2>

        <input type="submit" className={styles.action} />
      </div>
      <div className={styles.formElement}>
        <label htmlFor="from">From</label>
        <input type="email" name="from" id="from" required />
      </div>
      <div className={styles.formElement}>
        <label htmlFor="to">To</label>
        <input type="email" id="to" placeholder="Deepak" disabled />
      </div>
      <div className={styles.formElement}>
        <label htmlFor="subject"></label>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
      </div>
      <textarea
        className={styles.message}
        name="message"
        placeholder={`don't say nasty things like Deez nuts. Be a good son/daughter of your parents. Say "You'r hired" instead -- Thank you`}
        required
      ></textarea>
    </form>
  );
};

export default MailForm;
