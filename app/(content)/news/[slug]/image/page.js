import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
    const { slug } = await params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={400} height={400} />
        </div>
    );
}