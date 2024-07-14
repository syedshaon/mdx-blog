import { Tags } from "@/components/tags";

export const metadata = {
  title: "Tags",
  description: "Tags of my blog.",
};

export default function Page() {
  return (
    <section className="container  my-10">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">Tags</h1>
      <Tags />
    </section>
  );
}
