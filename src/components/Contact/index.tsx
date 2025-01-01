"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Resetează erorile pentru câmpul modificat
  };

  const validate = () => {
    const newErrors: typeof errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name) newErrors.name = "Numele este obligatoriu.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Introduceți un email valid.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Introduceți un număr de telefon valid (10 cifre).";
    if (!formData.message) newErrors.message = "Mesajul nu poate fi gol.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Formular trimis cu succes!");
      // Logica de trimis datele mai departe
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen bg-gray-light dark:bg-bg-color-dark">
      <div className="w-full max-w-3xl px-4">
        <div
          className="rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px]"
          data-wow-delay=".15s"
        >
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Ai nevoie de ajutor? Contactează-ne
          </h2>
          <p className="mb-12 text-base font-medium text-body-color">
            Echipa noastră de suport îți va răspunde în cel mai scurt timp prin email.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Nume
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Introduceți numele"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Introduceți email-ul"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Telefon
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Introduceți numărul de telefon"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Mesaj
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Introduceți mesajul"
                    className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
              </div>
              <div className="w-full px-4">
              <button
                type="submit"
                className="rounded-sm bg-[#1F736D] px-9 py-4 text-base font-medium text-white shadow-md duration-300 hover:bg-[#174F4C] dark:shadow-lg"
              >
                Trimite
              </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
