import { useState } from "react";
import type { Route } from "./+types/home";
import AppLayout from "~/components/app-layout";
import type { Post } from "~/lib/types";
import { Card, CardContent } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import PostCard from "~/components/post-card";
import AddPost from "~/components/add-post";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CodeNG | Homepage" },
    { name: "description", content: "Your online class platform" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  // const response = await api.get<Post[]>("/posts");
  return { posts: [] };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [posts, setPosts] = useState<Post[]>(loaderData.posts);

  return (
    <AppLayout>
      <div className="grid grid-cols-4 gap-5">
        <Card></Card>
        <div className="col-span-2">
          <Card>
            <CardContent className="flex gap-5 items-center">
              <Avatar className="size-12">
                <AvatarImage src="" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <AddPost />
            </CardContent>
          </Card>
          <h1 className="font-bold mb-2 mt-5">Top Feeds</h1>
          <div className="space-y-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
