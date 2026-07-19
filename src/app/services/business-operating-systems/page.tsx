import type { Metadata } from "next";
import RevenueServicePage from "@/components/RevenueServicePage";

export const metadata: Metadata = { title: "Business Operating Systems | JDLO", description: "Custom business operating systems: CRM, dashboards, scheduling, workflow automation, reporting, and internal tools that save time and support growth.", alternates: { canonical: "/services/business-operating-systems" } };

export default function BusinessOperatingSystemsPage() {
  return <RevenueServicePage
    eyebrow="Service / Business operations"
    title={<>Make the business less dependent <span className="text-text-secondary">on memory and manual work.</span></>}
    intro="I connect the internal tools, data, and workflows behind delivery so the team can see what is happening, know what comes next, and grow without multiplying admin."
    problems={["Customer and job information lives across disconnected tools.", "The owner is the only person who knows the real status of everything.", "Data gets entered twice and reports are built by hand.", "Growth creates more admin faster than it creates leverage."]}
    deliverables={[
      { title: "CRM + pipeline", body: "A shared source of truth for leads, customers, work, next actions, and ownership." },
      { title: "Scheduling + workflow", body: "Practical flows for intake, assignment, delivery, approvals, and completion built around how the team already works." },
      { title: "Dashboards + reporting", body: "Useful views of revenue, lead sources, job volume, follow-up, and operational bottlenecks—not vanity charts." },
      { title: "Automation + internal tools", body: "Custom software and integrations that remove duplicate entry, reminders, document work, and fragile handoffs." },
    ]}
    outcomes={["The team can see the same operational truth.", "Fewer tasks depend on memory.", "Owners spend less time coordinating routine work.", "Leads, jobs, and payments are easier to track.", "Bottlenecks show up before they become emergencies.", "The business can add volume without equal admin growth."]}
    proof={[
      { name: "Vacaville Appliance", result: "A live service operation with visible leads, jobs, invoicing, and customer workflows.", href: "/work/vacaville-appliance" },
      { name: "Pomaika‘i Co", result: "Centralized operating tools for a consultancy with multiple delivery lanes.", href: "/work/pomaikai" },
      { name: "Cubicship / DHL", result: "Purpose-built tools supporting a multi-location shipping operation.", href: "/work/dhl-translator" },
    ]}
  />;
}
