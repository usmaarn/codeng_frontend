import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog";
import toast from "react-hot-toast";

export default function AskQuestion({
  onSubmit,
}: {
  onSubmit: (values: any) => void;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      question: "",
    },
  });

  const watch = form.watch();

  function submit(values: any) {
    form.reset();
    onSubmit(values);
    setOpen(false);
    toast.success("Hello world");
  }

  return (
    <Card>
      <CardContent className="flex gap-5">
        <Avatar className="size-12">
          <AvatarImage src="" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>

        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
          <DialogTrigger asChild>
            <Button
              className="grow rounded-full h-12 justify-start px-8 text-muted-foreground"
              variant="outline"
              onClick={() => setOpen(true)}
            >
              Ask a question
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ask Question</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submit)} className="space-y-5">
                <FormField
                  name="question"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="resize-none h-36"
                          placeholder="what would you like to know?"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex">
                  <Button
                    size="sm"
                    className="ml-auto"
                    type="submit"
                    disabled={watch.question.length < 1}
                  >
                    Publish
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
