import type { Route } from "./+types/home";
import {Button} from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ClassNG | Homepage" },
    { name: "description", content: "Your online class platform" },
  ];
}

export default function Home() {
  return <div>
    <h1>Hello world</h1>
    <Button>Hello there</Button>
  </div>;
}
