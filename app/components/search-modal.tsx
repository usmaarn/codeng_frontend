import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

export default function SearchModal() {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Dialog open={openSearch}>
      <DialogTrigger asChild>
        <Button
          className="rounded-full h-12 text-base flex-grow justify-start px-5! text-muted-foreground"
          variant="secondary"
          onClick={() => setOpenSearch(true)}
        >
          <SearchIcon className="size-5" />
          <span className="">What are you looking for? </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="md:max-w-3xl"
        onClose={() => setOpenSearch(false)}
      >
        <Input
          type="search"
          className="h-14 rounded-full bg-gray-200 px-6 text-lg!"
          placeholder="Enter search terms..."
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />

        <div className="mt-5" hidden={searchTerm.length < 1}>
          <DialogHeader>
            <DialogTitle>Search Result.</DialogTitle>
            <DialogDescription>
              here are matched results for your search...
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}
