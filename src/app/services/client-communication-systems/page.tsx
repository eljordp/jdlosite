import type { Metadata } from "next";
import RevenueServicePage from "@/components/RevenueServicePage";

export const metadata: Metadata = { title: "Client Communication Systems | JDLO", description: "Client communication systems for lead intake, FAQs, follow-up, reminders, scheduling, estimates, and customer status updates.", alternates: { canonical: "/services/client-communication-systems" } };

export default function ClientCommunicationSystemsPage() {
  return <RevenueServicePage
    eyebrow="Service / Client communication"
    title={<>Every lead gets an answer. <span className="text-text-secondary">The owner gets time back.</span></>}
    intro="I map the conversations that create or protect revenue, then build a communication system around them—from first question through follow-up and repeat business."
    problems={["Calls, texts, DMs, and forms arrive in separate places.", "The same service, pricing, and scheduling questions get answered all day.", "Follow-up depends on someone remembering to do it.", "Customers do not know what happens next or where their job stands."]}
    deliverables={[
      { title: "Lead intake + routing", body: "Structured forms, calls, chat, and messages that collect the right information and route it to the right person or pipeline." },
      { title: "FAQ + service knowledge", body: "Clear answers and qualification logic based on real policies, service areas, availability, and common client questions." },
      { title: "Follow-up sequences", body: "Human-reviewed automations for reminders, estimates, abandoned inquiries, appointment confirmations, and post-service check-ins." },
      { title: "Client status flows", body: "Updates and handoffs that keep customers informed while reducing inbound ‘what’s happening?’ messages." },
    ]}
    outcomes={["Fewer leads disappear between channels.", "Customers get useful answers faster.", "The team repeats itself less.", "Appointments and estimates receive consistent follow-up.", "The customer experience feels organized.", "The owner is no longer the default help desk."]}
    proof={[
      { name: "Vacaville Appliance", result: "Service information, intake, and customer flow around a high-volume repair business.", href: "/work/vacaville-appliance" },
      { name: "Club Bot / Velvet", result: "Structured guest-list communication at high weekly volume.", href: "/work/club-bot" },
      { name: "Cubicship", result: "Customer-facing tools and workflows for complex shipping questions.", href: "/work/dhl-translator" },
    ]}
  />;
}
