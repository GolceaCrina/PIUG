"use client"
import { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the blog data based on the search term
  const filteredBlogs = blogData.filter((blog) => {
    return (
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.paragraph.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <>
      <Breadcrumb
        pageName="Produsele Noastre"
        description="Explorează o varietate de produse disponibile pentru închiriere sau achiziție. Găsește ceea ce ai nevoie la cele mai bune oferte."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Caută produse..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md rounded-md border border-gray-300 p-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary dark:bg-dark dark:text-white dark:focus:border-primary"
            />
          </div>

          {/* Products Grid */}
          <div className="-mx-6 flex flex-wrap justify-center gap-y-12">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-6 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;