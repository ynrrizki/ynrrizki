import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const data = [
            {
                name: "Tracer Study (volunteer)",
                image_url: "https://ucarecdn.com/8794857e-280d-4bca-bbfc-e44009f4984a/tracer-study.png",
                category: "Web Application"
            },
            {
                name: "Presmaflix (volunteer)",
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
                category: "Mobile Application"
            },
        ];

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json('Internal Server Error', { status: 500 })
    }
}