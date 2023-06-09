import React from "react";
import "./contact.scss"

const Contact = () => {


    return (
        <div className="mccc">
            <h1>Get In Touch</h1>
            <p>Chat With Our Specialists For Product Information </p>
        <div className="mncc">
            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xqkojllo"
                        method="POST"
                        className="contact-inputs1">
                        <input
                            className="inputs"
                            type="text"
                            name="username"
                            placeholder="Name"
                            autoComplete="off"
                            required
                        />

                        <input
                            className="inputs"
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />
                        <input
                            className="inputs"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            autoComplete="off"
                            required
                        />
                        <input
                            className="inputs"
                            type="number"
                            name="number"
                            placeholder="Phone Number"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            className="inputz"
                            name="message"
                            placeholder="Message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
