import { ArrowRight, Blocks, ToyBrick } from "lucide-react";
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
const componentItems = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Button", path: "/components/button" },
  { name: "Card", path: "/components/card" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdown-menu" },
];
const blockItems = [
  { name: "Hero", path: "/blocks/hero" },
  { name: "Login", path: "/blocks/login" },
  { name: "Promo", path: "/blocks/promo" },
  { name: "Product Grid", path: "/blocks/product-grid" },
];
export default function Home() {
  return (
    <main className="container mt-4 p-5 md:mt-8 md:p-10">
      <Hero
        title="Build a Registry"
        description="This starter helps you create a registry so you can distribute your custom components, hooks, pages, and other files to any React project"
        buttonText="Learn more"
        buttonLink="#sale"
        backgroundImage="/assets/hero.png"
      />
      <div className="mb-8">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
            EHR Coder
          </h1>
          <p className="text-muted-foreground">
            Distribute your design system tokens, custom components, hooks,
            pages, and other files to any React project.
          </p>
        </div>
      </div>
      <div className="mb-4 grid gap-6 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Components</CardTitle>
              <div className="rounded-md bg-primary p-1">
                <ToyBrick className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Reusable UI components for your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {componentItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link href={item.path} className="text-sm hover:underline">
                    {item.name}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Blocks</CardTitle>
              <div className="rounded-md bg-foreground p-1">
                <Blocks className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Pre-built UI blocks for common patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {blockItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link href={item.path} className="text-sm hover:underline">
                    {item.name}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <AboutGettingStarted></AboutGettingStarted>
      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">MCP</h2>
          <p className="mb-4 text-muted-foreground">
            Integrate this registry with AI IDEs using Model Context Protocol
            (MCP) using the following configuration. This utilizes this
            Registry's style tokens and the Shadcn CLI. To ensure this works,
            double check that the{" "}
            <Link href="/r/registry.json">
              <code className="inline text-sm tabular-nums underline">
                style:registry
              </code>
            </Link>{" "}
            contains the same colors as your{" "}
            <code className="inline text-sm tabular-nums">tokens.css</code>
          </p>
          <MCPTabs rootUrl={process.env.VERCEL_BRANCH_URL ?? ""} />
        </div>
      </div>
    </main>
  );
}
