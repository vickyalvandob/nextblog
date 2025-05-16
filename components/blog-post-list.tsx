import Link from "next/link";
import {posts} from "@/lib/mock-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { formatDate } from "@/lib/utils";
import { Dot } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";

export default function BlogPostList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`} >
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground">
                {DOMPurify.sanitize(post.content, {
                  ALLOWED_TAGS: [],
                })}
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              <div className="flex gap-1 items-center">
                <span>{`${post.author.firstName} ${post.author.lastName}`}</span>
                <span>
                  <Dot/>
                </span>
                <time dateTime={post.createdAt.toISOString()}>
                  {formatDate(post.createdAt)}
                </time>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
