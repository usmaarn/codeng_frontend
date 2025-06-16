import type { Post } from "~/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreVerticalIcon } from "lucide-react";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <CardHeader className="flex flex-row relative">
        <Avatar className="size-10">
          <AvatarImage src="" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="">
          <h3 className="text-sm font-medium">
            <Link to="#" className="hover:underline">
              Uthman Muhammad
            </Link>
          </h3>
          <p className="text-xs text-zinc-500">
            {new Date(post.createdAt).toUTCString()}
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="ml-auto rounded-full"
              size="icon"
              variant="ghost"
            >
              <MoreVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent></DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg">{post.content}</h3>
      </CardContent>
    </Card>
  );
}
