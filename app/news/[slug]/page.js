import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function NewsDetailsPage({ params }) {
    const { slug } = use(params);
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={300} height={300} />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}