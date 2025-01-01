import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog"; // Replace this component if there's a different component for displaying products
import blogData from "./blogData"; // Rename or replace the data source with product data if available

const Produse = () => {
  return (
    <section
      id="produse"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Produsele Noastre"
          paragraph="Explorează o varietate de produse disponibile pentru închiriere sau achiziție. Găsește ceea ce ai nevoie la cele mai bune oferte."
          center
        />

    <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-10 xl:grid-cols-3">
      {blogData.map((blog) => (
        <div key={blog.id} className="w-full">
          <SingleBlog blog={blog} />
        </div>
      ))}
    </div>

      </div>
    </section>
  );
};

export default Produse;
