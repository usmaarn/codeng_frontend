import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import AppLayout from "~/components/app-layout";
import { Card, CardContent } from "~/components/ui/card";
import type { Route } from "./+types/forum";
import AskQuestion from "~/components/ask-question";
import { useState } from "react";
import type { Question } from "~/lib/types";
import LeftSidebar from "~/components/ui/forum/left-sidebar";

export function loader({}: Route.LoaderArgs) {
  return { questions: [] };
}

export default function Forum({
  loaderData: { questions: defaultQuestions },
}: Route.ComponentProps) {
  const [questions, setQuestions] = useState<Question[]>(defaultQuestions);

  return (
    <AppLayout>
      <div className="grid grid-cols-4 gap-5">
        <LeftSidebar />
        <div className="col-span-2">
          <AskQuestion
            onSubmit={(values) =>
              setQuestions((prev) => [
                { id: Math.random(), question: values.question },
                ...prev,
              ])
            }
          />

          <h1 className="font-bold mb-2 mt-5">Questions</h1>
          <div className="space-y-2">
            {questions.map((question) => (
              <Card key={question.id}>
                <CardContent>
                  <div>
                    <Avatar className="size-10">
                      <AvatarImage src="" />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                  </div>
                  <h1 className="text-lg">{question.question}</h1>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
