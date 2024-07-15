import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import YouTube from "@/components/Youtube";

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
    <section className="container my-10 max-w-7xl">
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
      <h1 className="title font-semibold text-2xl text-center tracking-tighter mb-5">{post.metadata.title}</h1>

      {post.metadata.coverImage && (
        <div className="w-full h-[400px] relative">
          <Image className="object-cover coverImage" src={`/images/${post.metadata.coverImage}`} fill alt={post.metadata.title} />
        </div>
      )}
      <p className="text-neutral-600 dark:text-neutral-400  tabular-nums  text-sm text-center mb-2 mt-3">
        Posted by {post.metadata.author} on {formatDate(post.metadata.date, false)} <span className="w-[40px]"></span>
      </p>
      <p className="text-neutral-600 dark:text-neutral-400  tabular-nums text-xs text-center mb-5 ">
        {post.metadata.tags.split(", ").map((tag, key) => (
          <Link key={key} className="px-2 border-b border-transparent hover:border-black" href={`/tags/${tag}`}>
            #{tag} &nbsp;
          </Link>
        ))}
      </p>

      <article className="mdxblog">
        <CustomMDX source={post.content} components={{ YouTube }} />
      </article>
    </section>
  );
}
