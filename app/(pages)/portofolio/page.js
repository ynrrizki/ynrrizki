'use client'
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState, use, Suspense } from "react";
import { getPortofolio } from "./getPortofolio";

export default function Portofolio() {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const [selectedCategory, setSelectedCategory] = useState("all");
  // const portofolios = use(getPortofolio(origin));
  const portofolios = {
    data: [
      {
        name: "Tracer Study",
        image_url: "https://ucarecdn.com/8794857e-280d-4bca-bbfc-e44009f4984a/tracer-study.png",
        category: "Web Application"
      },
      {
        name: "Presmaflix",
        image_url: "https://harithya.vercel.app/_next/image?url=https%3A%2F%2Fportfolio.haruthya.my.id%2Fstorage%2Fuploads%2F%2F2023%2F01%2F27%2Fkasadaya_axia1l_uid_63d38920e0d8a.jpg&w=1920&q=75",
        category: "Mobile Application"
      },
      {
        name: "Edupay (BSN)",
        image_url: "https://ucarecdn.com/4e2925c4-8265-447f-8b45-f499db30316d/porto-edupay.jpeg",
        category: "Web Application"
      },
      {
        name: "Biz (BSN)",
        image_url: "https://ucarecdn.com/ded8666b-0db8-43d0-8069-ac4d536c1f4f/porto-biz.jpeg",
        category: "Web Application"
      },
      {
        name: "YukMinum",
        image_url: "https://harithya.vercel.app/_next/image?url=https%3A%2F%2Fportfolio.haruthya.my.id%2Fstorage%2Fuploads%2F%2F2023%2F01%2F27%2Fkasadaya_axia1l_uid_63d38920e0d8a.jpg&w=1920&q=75",
        category: "Mobile Application"
      },
      // Tambahkan elemen lain jika diperlukan...
    ]
  }
  const handleDescriptionChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const portoElements = [];
  for (const portoElement of portofolios.data) {
    if (selectedCategory === "all" || portoElement.category === selectedCategory) {
      const element = (
        <div className="border-2 rounded-md cursor-pointer border-gray-400 border-dotted">
          <a className="relative h-10">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: "75% 0px 0px",
                }}
              ></span>
              <img
                alt={portoElement.name}
                src={portoElement.image_url}
                decoding="async"
                data-nimg="responsive"
                className="rounded-md"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                sizes="100vw"
                srcSet={portoElement.image_url}
              />
            </span>
            <div className="p-3">
              <h5 className="font-semibold xl:text-base xl:mb-2 text-sm ">
                {portoElement.name}
              </h5>
              <span className="text-gray-400 font-medium xl:text-sm text-xs">
                {portoElement.category}
              </span>
            </div>
          </a>
        </div>
      );

      portoElements.push(element);
    }
  }

  // for (let index = 0; index < 7; index++) {
  //   portoElements.push(element);
  // }
  return (
    <main className="container mx-auto">
      <div className="p-5 md:p-24">
        <div className="flex flex-col md:flex-row items-center justify-between py-5 md:py-24">
          <div className="pb-12 md:pb-20">
            <h1 className="text-3xl md:text-7xl font-black text-[#050505]">
              Portofolio ⚒️. <br className="block" />{" "}
            </h1>
            <div className="leading-8 mt-5">
              <div
                className={`content-desc font-poppins font-normal text-dimWhite text-[17px] leading-relaxed`}
              >
                <p>
                  Beberapa pekerjaan yang sudah saya kerjakan dalam setahun
                  terakhir.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex-1 flex w-full justify-stretch md:justify-center">
              <div className="border pr-5 rounded-md w-full">
                <select
                  name="project"
                  className="text-gray-500 ring-0 outline-none cursor-pointer w-full lg:w-52 py-3 px-5 rounded-md bg-white"
                  onChange={handleDescriptionChange}
                  value={selectedCategory}
                >
                  <option value="all">Semuanya</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Web Design">Web Design</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
            data-aos="fade-up"
          >
            <Suspense fallback={<p>Loading feed...</p>}>
              {portoElements.map((porto, index) => {
                return <div key={index}>{porto}</div>;
              })}
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}