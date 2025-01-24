import { getNewsItem } from '@/lib/news';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NewsDetailsPage({ params }) {
    const { slug } = await params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={400} height={400} />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}