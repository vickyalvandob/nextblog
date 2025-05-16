import BlogPostList from "@/components/blog-post-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <main className="container mx-auto py-10 px-4 md:px-6">
    <div className="mb-8">
      <h1 className="text-3xl font-bold">
        Latest Posts
      </h1>
      <p className="text-muted-foreground mt-2">
        Explore the latest articles and insights
      </p>
      <BlogPostList />
    </div>
   </main>
  );
}
