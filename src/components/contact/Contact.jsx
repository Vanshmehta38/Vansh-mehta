import React, { useState } from "react";

// ** Send email function
import emailjs from "emailjs-com";

// ** Toast
import { toast } from "react-hot-toast";

// ** Icon imports
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiShare2, FiMail, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  // ** Var
  const serviceId = import.meta.env.VITE_SERVICE_KRY;
  const templateId = import.meta.env.VITE_TEMPLATE_KEY;
  const userId = import.meta.env.VITE_USER_KEY;

  // ** State
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    let newErrors = {};

    if (name.trim() === "") {
      formIsValid = false;
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      formIsValid = false;
      newErrors.name = "Name can only contain letters.";
    }

    if (email.trim() === "") {
      formIsValid = false;
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      formIsValid = false;
      newErrors.email = "Invalid email address.";
    }

    if (subject.trim() === "") {
      formIsValid = false;
      newErrors.subject = "Subject is required.";
    }

    if (message.trim() === "") {
      formIsValid = false;
      newErrors.message = "Message cannot be empty.";
    }

    if (number.trim() === "") {
      formIsValid = false;
      newErrors.number = "Number is required.";
    } else if (isNaN(number) || number.length !== 10) {
      formIsValid = false;
      newErrors.number = "Number must be 10 digits.";
    }

    setErrors(newErrors);

    if (formIsValid) {
      setLoading(true);
      const templateParams = {
        name,
        number,
        email,
        subject,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          setName("");
          setNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
          console.log("Email sent successfully:", response);
          toast.success("Your message has been sent successfully!", {
            style: {
              border: "1px solid #61d345",
              padding: "16px",
              color: "#61d345",
            },
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send your message. Please try again later.", {
            style: {
              border: "1px solid #ff4b4b",
              padding: "16px",
              color: "#ff4b4b",
            },
          });
          setLoading(false);
        });
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required." }));
    } else if (!/^[a-zA-Z\s]*$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name can only contain letters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: undefined }));
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    } else if (!validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
    }
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject(value);
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Subject is required.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, subject: undefined }));
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message cannot be empty.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: undefined }));
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        number: "Number is required.",
      }));
    } else if (isNaN(value) || value.length !== 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        number: "Number must be 10 digits.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, number: undefined }));
    }
  };

  return (
    <div id="contact" className="container contact m-auto mt-16">
      {/* heading */}

      {/* heading */}
      <div data-aos="fade-up" className="section-title">
        <span>Contact Me</span>
        <h2>Contact Me</h2>
        <p>You Need a professional developer? Contact us now!</p>
      </div>

      {/* card */}
      <div className="card-wrapper w-[90%] md:w-[100%] mx-auto mt-5 flex justify-center sm:flex-col">
        {/* Insert the new section here */}
        <div className="w-[50%] sm:w-[100%] mr-5">
          <div className="w-[100%]">
            <div data-aos="zoom-in" className="info-box info-box-div">
              <div className="info-box-social">
                <FiShare2 />
              </div>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/vansh-mehta-06988021b/"
                  target="_blank"
                >
                  <FaLinkedinIn className="hover:scale-125" />
                </a>
                <a href="https://www.instagram.com/1sh_mehta_/" target="_blank">
                  <RiInstagramFill className="hover:scale-125" />
                </a>
                <a
                  href="https://www.facebook.com/mehta.vansh.3"
                  target="_blank"
                >
                  <FaFacebook className="hover:scale-125" />
                </a>
                <a href="https://x.com/vansh_38" target="_blank">
                  <RiTwitterXLine className="hover:scale-125" />
                </a>
                <a
                  href={
                    "https://wa.me/+919725920461?text=Hello i want to connect with you."
                  }
                  target="_blank"
                >
                  <IoLogoWhatsapp className="hover:scale-125" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col gap-4">
            <div className="w-[50%] sm:w-[100%] mt-5">
              <div data-aos="zoom-in" className="info-box">
                <div className="info-box-social">
                  <FiMail />
                </div>
                <h3>Email Me</h3>
                <p>vanshmehta7548@gmail.com</p>
              </div>
            </div>
            <div className="w-[50%] sm:w-[100%] sm:mt-1 mt-5">
              <div data-aos="zoom-in" className="info-box">
                <div className="info-box-social">
                  <FiPhoneCall />
                </div>
                <h3>Call Me</h3>
                <p>+91 9725 9204 61</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="right flex-1 sm:mt-5">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center flex-col gap-4 w-[70%] md:w-[100%] sm:w-[100%] mx-auto"
          >
            {/* Form fields */}
            <div className="w-full">
              <input
                className="shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="text"
                placeholder="Name"
                value={name}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 55))}
                onChange={handleNameChange}
              />
              {errors.name && (
                <p className="text-red-500 ml-2 mt-1">{errors.name}</p>
              )}
            </div>
            <div className="w-full">
              <input
                className="shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="text"
                placeholder="Phone Number"
                value={number}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
                onChange={handleNumberChange}
              />
              {errors.number && (
                <p className="text-red-500 ml-2 mt-1">{errors.number}</p>
              )}
            </div>
            <div className="w-full">
              <input
                className="shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <p className="text-red-500 ml-2 mt-1">{errors.email}</p>
              )}
            </div>
            <div className="w-full">
              <input
                className="shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="text"
                placeholder="Subject"
                value={subject}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 55))}
                onChange={handleSubjectChange}
              />
              {errors.subject && (
                <p className="text-red-500 ml-2 mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="w-full">
              <textarea
                className="shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                rows="3"
                cols="50"
                placeholder="Write your message"
                value={message}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 255))}
                onChange={handleMessageChange}
              />
              {errors.message && (
                <p className="text-red-500 ml-2">{errors.message}</p>
              )}
            </div>
            <button
              className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                  <span>Please Wait...</span>
                </>
              ) : (
                <>
                  <span>Send</span>
                  <RiSendPlaneFill />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
