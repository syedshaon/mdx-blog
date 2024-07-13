import { Categories } from "@/components/categories";

export const metadata = {
  title: "Tags",
  description: "Tags of my blog.",
};

export default function Page() {
  return (
    <section className="container  my-10  ">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Categories</h1>
      <Categories />
    </section>
  );
}
