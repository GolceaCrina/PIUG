import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pagina de Contact"
        description="Suntem aici pentru a vă ajuta. Contactați-ne pentru orice întrebări sau asistență necesară."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
