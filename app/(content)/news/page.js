import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import { Suspense } from "react";

export default async function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <NewsList news={await getAllNews()} />
        </>
    );
}