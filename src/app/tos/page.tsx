import Breadcrumb from "@/components/Common/Breadcrumb";

const TermsAndConditionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Termeni și Condiții"
        description="Citiți cu atenție termenii și condițiile înainte de a utiliza platforma noastră."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1>Termeni și Condiții</h1>
            <p>
              Bine ați venit pe platforma noastră! Acești termeni și condiții descriu regulile
              și reglementările pentru utilizarea website-ului nostru. Prin accesarea sau utilizarea
              acestei platforme, sunteți de acord să respectați acești termeni.
            </p>

            <h2>Reguli de Utilizare</h2>
            <ul>
              <li>Nu utilizați platforma pentru scopuri ilegale.</li>
              <li>Respectați drepturile de proprietate intelectuală.</li>
              <li>Nu încercați să perturbați funcționalitatea platformei.</li>
            </ul>

            <h2>Confidențialitate</h2>
            <p>
              Confidențialitatea dvs. este importantă pentru noi. Vă rugăm să consultați Politica noastră de Confidențialitate
              pentru informații detaliate despre cum colectăm, utilizăm și protejăm informațiile dvs. personale.
            </p>

            <h2>Modificări ale Termenilor</h2>
            <p>
              Ne rezervăm dreptul de a actualiza acești termeni în orice moment. Modificările vor
              fi efective imediat după publicarea pe această pagină.
            </p>

            <h2>Limitarea Răspunderii</h2>
            <p>
              Nu suntem responsabili pentru niciun fel de daune care rezultă din utilizarea sau
              imposibilitatea de a utiliza platforma noastră.
            </p>

            <h2>Drepturile și Obligațiile Utilizatorilor</h2>
            <p>
              Utilizatorii au obligația de a respecta toți termenii și condițiile menționate, inclusiv:
            </p>
            <ul>
              <li>Furnizarea de informații reale și actualizate în timpul înregistrării pe platformă.</li>
              <li>Respectarea celorlalți utilizatori și evitarea comportamentelor abuzive sau ofensatoare.</li>
              <li>Informarea imediată în cazul încălcării securității contului propriu.</li>
            </ul>

            <h2>Drepturile Platformei</h2>
            <p>
              Platforma are dreptul de a suspenda sau închide conturile utilizatorilor care încalcă termenii și condițiile.
              De asemenea, putem modifica funcționalitatea platformei fără notificare prealabilă, dacă este necesar.
            </p>

            <h2>Contactați-ne</h2>
            <p>
              Dacă aveți întrebări despre acești termeni, vă rugăm să ne contactați prin intermediul paginii noastre de contact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
