import { useState } from "react";
import { toast } from "sonner";

const TO_EMAIL = "devgopal0001@gmail.com";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    const email_regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const newErrors = {
      name: form.name.trim().length < 3,
      email: !email_regex.exec(form.email.trim().toLowerCase()),
      message: form.message.trim().length < 5,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Gopal,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}&from=${encodeURIComponent(form.email)}`;

    toast.success("Opening your email app...");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="absolute inset-0 h-full min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>

          <p className="mt-3 text-lg text-white-600">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="John Doe"
                autoCapitalize="on"
              />

              {errors.name && (
                <span className="text-red-400">Invalid Name!</span>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="john.doe@email.com"
                autoCapitalize="off"
              />

              {errors.email && (
                <span className="text-red-400">Invalid Email!</span>
              )}
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
                autoCapitalize="on"
              />

              {errors.message && (
                <span className="text-red-400">Invalid Message!</span>
              )}
            </label>

            <button type="submit" className="field-btn">
              Send Message
              <img
                src="/assets/arrow-up.png"
                alt="Arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
