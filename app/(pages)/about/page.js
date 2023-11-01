'use client'
import Image from "next/image";
import { useState } from 'react';
import { Tab } from '@headlessui/react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function About() {
    let [categories] = useState({
        Mobile: [
            {
                id: 1,
                title: 'Flutter',
                description: 'Aku sudah lama menggunakan framework ini sejak aku SMK kelas 10.',
                image: 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'
            },
            {
                id: 2,
                title: "Kotlin",
                description: 'Aku mulai berlatih menggunakan Kotlin setelah aku bisa menggunakan Flutter.',
                image: '/kotlin.svg'
            },
        ],
        Web: [
            {
                id: 1,
                title: 'Laravel',
                description: 'Laravel adalah framework yang sering aku gunakan untuk menghandle freelance atau tugas.',
                image: 'https://laravel.com/img/logomark.min.svg'
            },
            {
                id: 2,
                title: "Next JS",
                description: 'Selain Laravel aku juga dapat menguasai Next JS.',
                image: '/next.svg'
            },
            {
                id: 3,
                title: "Tailwind CSS",
                description: 'Untuk membuat tampilan front-end aku lebih sering menggunakan tailwind css, karena lebih fleksibel dalam penggunaannya.',
                image: '/tailwind.svg'
            },
        ],
    });

    return (
        <main className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row min-h-[92vh] items-center p-5 md:p-24">
                <div className="max-w-6xl pb-12 md:pb-20">
                    <h1 className='text-3xl md:text-7xl text-start font-black text-[#050505]'>
                        About Me😎. <br className="block" />{" "}
                    </h1>
                    <div className="leading-8 mt-8">
                        <div
                            className={`content-desc font-normal text-sm md:text-2xl leading-relaxed`}
                        >
                            <p>
                                Perkenalkan namaku Yanuar Rizki Sanjaya, saat ini aku menjadi freelancer aplikasi web / mobile. Aku juga sedang menjalankan pendidikan Sarjana Teknologi Informasi di
                                Universitas Bina Sarana Informatika. Untuk pengalaman saat ini, aku hanya freelance dari sebelum lulus sekolah tingkat SMK sampai saat
                                ini. Aku juga suka mengeksplorasi hal-hal yang baru khusunya di
                                bidang pengembangan aplikasi karena aku memiliki ketertarikan bagaimana cara sistem aplikasi dibuat, pengelolaan data, dan juga ditampilkannya aplikasi.
                            </p>
                            <br />
                            <h2 className="text-xl md:text-2xl mb-2 font-semibold">Hobi yang aku gemari</h2>
                            <ol className="list-decimal list-inside marker:text-dimWhite md:p-2">
                                <li>
                                    <span className="font-medium">Pengembangan Game</span>
                                    <p>Selain aku memiliki kemampuan dalam pembuatan aplikasi sebagai kompetensi dasar dan untuk bekerja, aku memiliki hobi yang masih berkaitan dengan programming tetapi tidak berkaitan dengan pekerjaan, yaitu dalam membuat sebuah game yang menurutku seru untuk dibuat.</p>
                                </li>
                                <li>
                                    <span className="font-medium">Mendengarkan Musik</span>
                                    <p>Aku lebih suka phonk, karena beatnya itu dapat membakar semangatku ketika sedang membuat kode program.</p>
                                </li>
                                <li>
                                    <span className="font-medium">Menonton Film</span>
                                    <p>Film bagiku itu adalah sebuah pintu agar aku dapat keluar dari burnout setelah sekian lama menatap komputer untuk melakukan debugging kode, revisi klien, dan segala urusan yang berbau mengenai tugas dan pekerjaan.</p>
                                </li>
                            </ol>
                            <br />
                            <h2 className="text-xl md:text-2xl mb-2 font-semibold">Skill yang aku miliki</h2>
                            <Tab.Group>
                                <Tab.List className="flex space-x-1 rounded-xl bg-slate-400/20 p-1 mt-5">
                                    {Object.keys(categories).map((category) => (
                                        <Tab
                                            key={category}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-400',
                                                    'ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                                                    selected
                                                        ? 'bg-white shadow'
                                                        : 'text-blue-100 hover:bg-black/[0.12] hover:text-black'
                                                )
                                            }
                                        >
                                            {category}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <Tab.Panels className="mt-2">
                                    {Object.values(categories).map((posts, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                'rounded-xl bg-white p-3',
                                                'ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2'
                                            )}
                                        >
                                            <ul>
                                                {posts.map((post) => (
                                                    <li
                                                        key={post.id}
                                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                                    >
                                                        <div className="flex justify-start items-start gap-5">
                                                            <Image src={post.image}
                                                                height={0}
                                                                width={0}
                                                                decoding="async"
                                                                data-nimg="responsive"
                                                                className="h-10 w-10 md:h-28 md:w-28 bg-white border-solid border-2 rounded-lg p-1" alt={post.title} />
                                                            <div className="flex flex-col">
                                                                <h3 className="text-sm md:text-3xl font-medium leading-5 md:leading-10">
                                                                    {post.title}
                                                                </h3>

                                                                <ul className="mt-1 flex space-x-1 text-xs md:text-lg font-normal leading-4 text-gray-500">
                                                                    <li>{post.date}</li>
                                                                    <li>{post.description}</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                'absolute inset-0 rounded-md',
                                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                            )}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                            {/* <p>Beberapa skill yang saya miliki diantaranya :</p>
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
                            </ol> */}
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