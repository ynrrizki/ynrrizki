'use client'
import { CardPorto } from "@/app/components/CardPorto";
import React, { useState, Suspense, useEffect } from "react";
import { axiosInstance } from "@/app/lib/axios";

export const Header = (props) => {
  return <div className="flex flex-col md:flex-row items-center justify-between py-5 md:py-24">
    <div className="pb-12 md:pb-0">
      <h1 className="text-3xl md:text-7xl font-black text-[#050505]">
        {props.title} ⚒️. <br className="block" />{" "}
      </h1>
      <div className="leading-8 mt-5">
        <div
          className={`content-desc font-poppins font-normal text-dimWhite text-[17px] leading-relaxed`}
        >
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-auto">
      <div className="flex-1 flex w-full justify-stretch md:justify-center">
        <div className="border pr-5 rounded-md w-full">
          {props.filter}
        </div>
      </div>
    </div>
  </div>
}

export default function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchPortfolios = async () => {
    try {
      const response = await axiosInstance.get("/portofolio");
      setPortfolios(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const renderPortfolio = () => {
    return portfolios.map(portofolio => {
      if (selectedCategory == 'all' || portofolio.category === selectedCategory)
        return CardPorto({
          name: portofolio.name,
          image_url: portofolio.image_url,
          category: portofolio.category,
        });
    });
  }

  const handleDescriptionChange = (e) => {
    setSelectedCategory(e.target.value);
  };


  return (
    <main className="container mx-auto">
      <div className="p-5 md:p-24">
        <Header title="Portfolio"
          description="Beberapa pekerjaan yang sudah saya kerjakan dalam setahun terakhir."
          filter={
            (<select
              name="project"
              className="text-gray-500 ring-0 outline-none cursor-pointer w-full lg:w-52 py-3 px-5 rounded-md bg-white"
              onChange={handleDescriptionChange}
              value={selectedCategory}
            >
              <option value="all">Semuanya</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="Web Application">Web Application</option>
              <option value="Web Design">Web Design</option>
            </select>)
          }
        />
        <div className="">
          <div
            className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
            data-aos="fade-up"
          >
            <Suspense fallback={<p>Loading feed...</p>}>
              {renderPortfolio()}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}