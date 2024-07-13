import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

import { baseUrl } from "@/app/sitemap";
import Image from "next/image";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, date: publishedTime, excerpt: description, coverImage: image } = post.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.excerpt,
            image: post.metadata.coverImage ? `${baseUrl}${post.metadata.coverImage}` : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.metadata.author,
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">{post.metadata.title}</h1>

      {post.metadata.coverImage && (
        <div className="w-[800px] h-[400px] relative">
          <Image className="object-cover coverImage" src={`/images/${post.metadata.coverImage}`} fill alt={post.metadata.title} />
        </div>
      )}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post.metadata.date)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
