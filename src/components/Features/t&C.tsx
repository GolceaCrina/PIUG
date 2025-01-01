import Breadcrumb from "@/components/Common/Breadcrumb";

const TermsAndConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Conditions"
        description="Please read our terms and conditions carefully before using our platform."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1>Terms and Conditions</h1>
            <p>
              Welcome to our platform! These terms and conditions outline the rules
              and regulations for the use of our website. By accessing or using
              this platform, you agree to comply with these terms.
            </p>

            <h2>Usage Rules</h2>
            <ul>
              <li>You must not use the platform for any unlawful purpose.</li>
              <li>Respect intellectual property rights.</li>
              <li>Do not attempt to disrupt the functionality of the platform.</li>
            </ul>

            <h2>Privacy</h2>
            <p>
              Your privacy is important to us. Please refer to our Privacy Policy
              for detailed information about how we collect, use, and protect
              your personal information.
            </p>

            <h2>Changes to the Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will
              be effective immediately upon posting on this page.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              We are not liable for any damages resulting from the use or
              inability to use our platform.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these terms, please contact us via
              our contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
