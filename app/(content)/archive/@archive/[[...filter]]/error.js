'use client';

export default function ErrorPage({ error }) {
    return (
        <div id="error">
            <h1>Something isn&apos;t adding up here...</h1>
            <p>{error.message}</p>
        </div>
    );
}