import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage?: string;
  tags: string;
  categories: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

// function getMDXData(dir) {
//   let mdxFiles = getMDXFiles(dir);
//   return mdxFiles.map((file) => {
//     let { metadata, content } = readMDXFile(path.join(dir, file));
//     let slug = path.basename(file, path.extname(file));

//     return {
//       metadata,
//       slug,
//       content,
//     };
//   });
// }

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

// export function getBlogPosts() {
//   return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
// }

export function getBlogPosts() {
  let posts = getMDXData(path.join(process.cwd(), "src", "app", "blog", "posts"));

  return posts;
}

export function getBlogPostsWithTag(tag) {
  let posts = getMDXData(path.join(process.cwd(), "src", "app", "blog", "posts"));

  const decodedTag = decodeURIComponent(tag); // Decode the URL-encoded tag

  return posts.filter((post) => post.metadata.tags?.split(", ").includes(decodedTag));
}

export function getBlogPostsWithCategory(category) {
  let posts = getMDXData(path.join(process.cwd(), "src", "app", "blog", "posts"));

  const decodedCategory = decodeURIComponent(category); // Decode the URL-encoded tag

  return posts.filter((post) => post.metadata.categories?.split(", ").includes(decodedCategory));
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
