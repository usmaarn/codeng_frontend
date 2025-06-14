import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Textarea } from "./ui/textarea";

export default function AddPost() {
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="grow h-12 rounded-full justify-start bg-transparent text-zinc-500"
          variant="outline"
        >
          Start a post...
        </Button>
      </DialogTrigger>
      <DialogContent className="top-12 translate-y-0 p-0">
        <DialogHeader className="p-5">
          <DialogTitle>Create post</DialogTitle>
          <DialogDescription>create post</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="px-5">
            <FormField
              name="content"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="focus:ring-0 focus-visible:ring-0 border-none p-0 shadow-none resize-none min-h-32 rounded-none"
                      placeholder="What's in your mind?"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className="p-5 border-t">
          <Button
            type="submit"
            disabled={form.watch().content.length < 1}
            size="sm"
          >
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
