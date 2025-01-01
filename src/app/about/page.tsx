import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Despre Noi – RentSphere"
        description="La RentSphere, credem că viitorul este despre împărțirea resurselor și construirea unei comunități bazate pe încredere. Suntem aici să transformăm modul în care închiriezi și oferi spre închiriere lucrurile de care ai nevoie sau pe care le deții."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
