import Accordion from "@/components/Accordion/Accordion";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export default function AccordionPage() {
  const faqItems = [
    {
      id: "shipping",
      title: "What are shipping options?",
      content: "We offer standard (5-7 days) and express (1-2 days) shipping.",
    },
    {
      id: "returns",
      title: "What is your return policy?",
      content: "Returns accepted within 30 days of purchase.",
    },
    {
      id: "payment",
      title: "What payment methods do you accept?",
      content: "We accept Visa, MasterCard, PayPal, and Apple Pay.",
    },
  ];

  return (
    <PageWrapper title="Accordion Task">
      <Accordion items={faqItems} defaultActiveIds={["returns"]} />
    </PageWrapper>
  );
}
