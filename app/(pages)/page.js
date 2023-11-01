'use client'
import Image from 'next/image'
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Mobile Developer"],
      typeSpeed: 40,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="container mx-auto">
        <div className="flex flex-col-reverse justify-end lg:flex-row min-h-[92vh] items-center p-5 md:p-24">
          {/* Content */}
          <div className="max-w-6xl pb-12 md:pb-20">
            <h1 className='text-3xl md:text-7xl text-start md:text-start font-black text-[#050505]'>
              Hello, Aku Yanuar 👋 <br className="block" />{" "}<span className="underline" ref={el}>{" "}</span>
            </h1>
            <p className='text-sm md:text-4xl mt-10 text-gray-600'>
              Memiliki keterampilan teknis yang kompeten dan mengesankan dalam pengembangan web dan mobile, mengubah potensi pribadi menjadi solusi digital yang dapat bermanfaat.
            </p>
          </div>
          {/* Image */}
          <div className="max-w-6xl mx-auto">
            <div className="flex-1 flex items-center">
              <Image
                src="/Notioly-Free-Pack/PNG/2.Searching.png"
                className="rounded-full mb-16 object-contain"
                width={600}
                height={600}
                layout='fixed'
                alt='hero'
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
