import { Categories } from "@/components/categories";

export const metadata = {
  title: "Categories",
  description: "Categories of my site.",
};

export default function Page() {
  return (
    <section className="container  my-10  ">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">Categories</h1>
      <Categories />
    </section>
  );
}
