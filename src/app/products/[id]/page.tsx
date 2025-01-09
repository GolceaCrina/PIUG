"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { useTheme } from "next-themes";

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = params?.id;
  const product = blogData.find((item) => item.id.toString() === productId);

  const { theme } = useTheme(); 
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  if (!product) {
    return (
      <p className="text-center text-xl font-bold">Produsul nu a fost găsit.</p>
    );
  }

  const handleDateSelect = (ranges: any) => {
    setDateRange(ranges.selection);
    setIsCalendarOpen(false); 
  };

  return (
    <section className="py-32 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Product Image Section */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px] bg-white shadow-md rounded-md dark:bg-gray-800">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
            <p className="text-lg text-body-color mb-6">{product.paragraph}</p>
            <div className="mt-8 flex flex-col gap-6 relative">
              <button
                className="bg-[#20726D] text-white text-lg font-bold py-4 rounded-md w-full hover:bg-[#174F4C] transition"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              >
                Închiriază acum
              </button>

              {isCalendarOpen && (
                <div
                  className={`absolute top-16 z-50 ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  } shadow-lg rounded-md`}
                >
                  <DateRangePicker
                    ranges={[dateRange]}
                    onChange={handleDateSelect}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    direction="horizontal"
                    showDateDisplay={false}
                    rangeColors={["#20726D"]}
                    //staticRanges={[]} // Removes "Today" and "Yesterday"
                    //inputRanges={[]} // Removes "Custom Input Ranges"
                    className={`calendar-custom ${
                      theme === "dark" ? "calendar-dark" : "calendar-light"
                    }`}
                  />
                </div>
              )}

              <button className="border-2 border-[#20726D] text-[#20726D] text-lg font-bold py-4 rounded-md w-full hover:bg-[#E8FAF1] transition">
                Adaugă la favorite
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
            Recenzii
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white shadow-md rounded-md dark:bg-gray-800">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/products/image.png"
                  alt="user"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-lg text-black dark:text-white">
                    Ion Popescu
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    5 zile în urmă
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                Produs de calitate excelentă! A ajuns rapid și sunt foarte
                mulțumit de performanța lui.
              </p>
            </div>

            <div className="p-6 bg-white shadow-md rounded-md dark:bg-gray-800">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/products/image.png"
                  alt="user"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-lg text-black dark:text-white">
                    Maria Ionescu
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    O săptămână în urmă
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 dark:text-gray-300">
                Foarte bun raport calitate-preț. Recomand cu încredere acest
                produs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
