import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="containet mx-auto py-10 px-4 md:px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Posts</h1>
        <Link href={"/create"}>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>
    </div>
  )
}
