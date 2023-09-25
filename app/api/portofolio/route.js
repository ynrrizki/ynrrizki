import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const data = {
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

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json('Internal Server Error', { status: 500 })
    }
}