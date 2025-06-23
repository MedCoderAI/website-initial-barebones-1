import { ArrowRight, Blocks, BookHeart, ShieldCheck, ToyBrick } from "lucide-react";
import Link from "next/link";
import { MCPTabs } from "@/components/design/mcp-tabs.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Hero } from "../../components/hero.tsx";
import { AboutGettingStarted } from "@/components/getting-started/about-getting-started";
const complianceItems = [
  { name: "Improve compliance with MEAT", path: "" },
  { name: "Identifies HEDIS gaps in care.", path: "" },
  { name: "CPT, ICD-10, and Penny (non-billable) codes generation", path: "" },
  { name: "Built-in compliance bulletin for ongoing review and staff education", path: "" },
  // { name: "Button", path: "/components/button" },
  // { name: "Card", path: "/components/card" },
  // { name: "Dialog", path: "/components/dialog" },
  // { name: "Dropdown Menu", path: "/components/dropdown-menu" },
];
const specialtiesItems = [
  { name: "Cardiology", path: "" },
  { name: "Urology", path: "" },
  { name: "Hematology", path: "" },
  { name: "Hepatology", path: "" },
  { name: "Internal Medicine", path: "" },
  { name: "Neurology", path: "" },
  { name: "Obstetrics", path: "" },
  { name: "Ophthalmology", path: "" },
  { name: "Pulmonology", path: "" },
  { name: "Urgent Care", path: "" },
  { name: "Endocrinology", path: "" },
  { name: "Dermatology", path: "" },
];
export default function Home() {
  return (
    <main className="container mt-4 p-5 md:mt-8 md:p-10">
      <div className="rounded-lg border p-6 mb-6  bg-foreground/10">
        <div className="flex flex-col gap-2">
          <Hero
            title="Medical Coding Assistant"
            description="The Right Insights, Right When You Need Them. Powered by AI."
            buttonText="Learn more 🚀"
            buttonLink="#sale"
            backgroundImage="/assets/hero.png"
          />
        </div>
      </div>

      <div className="mb-4 grid gap-6 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Compliance</CardTitle>
              <div className="rounded-md bg-primary p-1">
                <ShieldCheck className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              {/* Reusable UI components for your application */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              {complianceItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  {/* <Link href={item.path} className="text-sm hover:underline"> */}
                    {item.name}
                  {/* </Link> */}
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Specialties</CardTitle>
              <div className="rounded-md bg-primary p-1">
                <BookHeart className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              {/* Pre-built UI blocks for common patterns */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              {specialtiesItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between "
                >
                  {/* <Link href={item.path} className="text-sm hover:underline"> */}
                    {item.name}
                  {/* </Link> */}
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <AboutGettingStarted></AboutGettingStarted> */}
      <div className="rounded-lg bg-card p-6 text-muted-foreground">
        {/* <div className="flex flex-col gap-2"> */}
          {/* <h2 className="font-semibold text-xl">MCP</h2> */}
          For any questions or inquiries, please reach out to <Link href={"mailto:ceo@ehrcoder.com"} className="hover:underline">ceo@ehrcoder.com</Link>
        </div>
      {/* </div> */}
    </main>
  );
}
