import Link from "next/link";

const SigninPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Autentificare în cont
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Conectează-te pentru o experiență mai rapidă.
                </p>

                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 10.12C19.5 9.36 19.45 8.61 19.34 7.87H10.2V12.15H15.34C15.14 13.14 14.59 13.99 13.8 14.64V16.91H16.96C18.45 15.54 19.5 13.14 19.5 10.12Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.2 19.5C12.74 19.5 14.9 18.66 16.46 17.26L13.8 14.64C12.96 15.24 11.83 15.59 10.2 15.59C7.78 15.59 5.74 14.01 4.96 11.91H1.69V14.27C3.24 17.18 6.5 19.5 10.2 19.5Z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.96 11.91C4.76 11.31 4.64 10.66 4.64 10C4.64 9.34 4.76 8.69 4.96 8.09V5.73H1.69C0.97 7.21 0.5 8.94 0.5 10.73C0.5 12.52 0.97 14.24 1.69 15.73L4.96 11.91Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.2 4.41C11.98 4.41 13.36 5.08 14.35 5.93L16.54 3.74C14.89 2.26 12.74 1.5 10.2 1.5C6.5 1.5 3.24 3.82 1.69 6.73L4.96 8.91C5.74 6.91 7.78 5.34 10.2 5.34V4.41Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </span>
                  Continuă cu Google
                </button>

                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 0.325C7.354 0.164 6.636 0.07 5.895 0.07 3.057 0.07 1 2.106 1 4.928v6.144c0 2.822 2.058 4.858 4.896 4.858.732 0 1.453-.086 2.154-.246.116-.028.224-.074.314-.132v-3.647h-1.02c-.303 0-.55-.207-.595-.493l-.146-.916c-.038-.242.14-.445.381-.445h1.375v-1.63c0-1.095.769-2.011 1.865-2.011h1.171c.295 0 .554.184.64.461l.176.637c.063.227-.043.47-.234.573l-1.042.549c-.066.034-.102.097-.102.162v1.556h1.772c.244 0 .454.171.5.408l.197 1.093c.048.265-.112.537-.373.615-.067.02-.133.031-.202.031h-1.894v3.647c.104.058.213.109.324.15.874.322 1.799.496 2.746.496 2.839 0 4.896-2.035 4.896-4.858V4.928c0-2.822-2.058-4.858-4.896-4.858-.635 0-1.252.086-1.851.25a4.977 4.977 0 0 0-.89.337c-.178.09-.359.174-.543.253C8.15.682 8.099.653 8.051.325z" />
                    </svg>
                  </span>
                  Continuă cu Facebook
                </button>

                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Sau, autentifică-te cu email-ul
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                </div>

                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Introduceți email-ul"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Parolă
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Introduceți parola"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-6">
                  <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-[#1F736D] px-9 py-4 text-base font-medium text-white duration-300 hover:bg-[#174F4C]">
                    Autentificare
                  </button>
                </div>

                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Nu ai cont?{" "}
                  <Link
                    href="/signup"
                    className="text-[#1F736D] hover:text-[#174F4C] underline"
                  >
                    Creează unul
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
