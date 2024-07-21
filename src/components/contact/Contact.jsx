import React, { useState } from "react";

// ** Send email function
import emailjs from "emailjs-com";

// ** Toast
import { toast } from "react-hot-toast";

// ** Icon imports
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
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
        .send(
          "service_6lvhdvo",
          "template_yf6swu6",
          templateParams,
          "uzIDlGWA-xe5tWfg7"
        )
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
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}

      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                a professional developer? Contact us now!
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            onSubmit={handleSubmit}
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-4 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
          >
            {/* Name */}
            <div className="w-full">
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
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
            {/* Number */}
            <div className="w-full">
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
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
            {/* Email */}
            <div className="w-full">
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <p className="text-red-500 ml-2 mt-1">{errors.email}</p>
              )}
            </div>
            {/* Subject */}
            <div className="w-full">
              <input
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
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
            {/* Message */}
            <div className="w-full">
              <textarea
                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
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
