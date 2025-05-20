import BlogPostList from "@/components/blog-post-list";
import Container from "@/components/container";
import prisma from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: { author: true },
  });

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Latest Posts</h1>
        <p className="text-muted-foreground mt-2">
          Explore the latest articles and insights
        </p>
      </div>
      <BlogPostList  />
    </Container>
  );
}