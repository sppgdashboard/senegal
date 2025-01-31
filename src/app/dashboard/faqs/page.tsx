import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "next";
import { getFaqData } from "../data";

export default async function faq() {
  const [faqs] = await getFaqData();
  
  return (
    <section className="grid gap-4 w-full">
      <h5 className="text-3xl border-b-2 border-gray-400">FAQ&apos;s</h5>
      <Accordion type="single" collapsible className="w-full">
        {faqs?.map((list: faq, index: number) => (
          <AccordionItem value={`item${index}`} key={index}>
            <AccordionTrigger>
              <span className="text-left">{list?.question}</span>
            </AccordionTrigger>
            <AccordionContent>{list?.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

  );
}
