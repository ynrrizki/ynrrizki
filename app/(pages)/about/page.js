import Image from "next/image";

export default function About() {
    return (
        <main className="container mx-auto">
            <div className="flex flex-col-reverse md:flex-row min-h-[92vh] items-center p-5 md:p-24">
                <div className="max-w-6xl pb-12 md:pb-20">
                    <h1 className='text-3xl md:text-7xl text-start font-black text-[#050505]'>
                        About Me😎. <br className="block" />{" "}
                    </h1>
                    <div className="leading-8 mt-8">
                        <div
                            className={`content-desc font-normal text-sm md:text-3xl leading-relaxed`}
                        >
                            <p>
                                Saya Yanuar Rizki Sanjaya, saat ini saya menjadi freelancer aplikasi web / mobile.
                            </p>
                            <p>Beberapa skill yang saya miliki diantaranya :</p>
                            <ol className="list-decimal list-inside marker:text-dimWhite md:p-2">
                                <li>Mobile Development</li>
                                <ul className="list-disc pl-7 md:pl-16 text-gray-700">
                                    <li>Flutter</li>
                                    <li>Kotlin</li>
                                </ul>
                                <li>Web Development</li>
                                <ul className="list-disc pl-7 md:pl-16 text-gray-700">
                                    <li>Laravel</li>
                                    <li>React JS</li>
                                    <li>Tailwind CSS</li>
                                    <li>Mysql</li>
                                </ul>
                            </ol>
                            <p>
                                Saya juga sedang menjalankan pendidikan Sarjana Teknologi Informasi di
                                Universitas Bina Sarana Informatika. Untuk pengalaman saat ini, saya hanya freelance dari sebelum lulus sekolah tingkat SMK sampai saat
                                ini. Saya juga suka mengeksplorasi hal-hal yang baru khusunya di
                                bidang frontend developer karena saya memiliki ketertarikan di
                                bidang App Design.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/Notioly-Free-Pack/PNG/1.Newspaper.png"
                            className="rounded-full mb-16"
                            width={600}
                            height={600}
                            alt='hero'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}