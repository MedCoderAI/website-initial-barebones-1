import { ArrowRight, Blocks, BookHeart, ShieldCheck, ToyBrick, Sparkles, Zap, Target, Users, Award, ChevronRight } from "lucide-react";
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
  { name: "Improve compliance with MEAT", path: "", icon: Target },
  { name: "Identifies HEDIS gaps in care", path: "", icon: Sparkles },
  { name: "CPT, ICD-10, and Penny (non-billable) codes generation", path: "", icon: Blocks },
  { name: "Built-in compliance bulletin for ongoing review and staff education", path: "", icon: Award },
];

const specialtiesItems = [
  { name: "Cardiology", path: "", gradient: "from-red-500 to-pink-500" },
  { name: "Urology", path: "", gradient: "from-blue-500 to-cyan-500" },
  { name: "Hematology", path: "", gradient: "from-purple-500 to-indigo-500" },
  { name: "Hepatology", path: "", gradient: "from-green-500 to-teal-500" },
  { name: "Internal Medicine", path: "", gradient: "from-orange-500 to-red-500" },
  { name: "Neurology", path: "", gradient: "from-violet-500 to-purple-500" },
  { name: "Obstetrics", path: "", gradient: "from-pink-500 to-rose-500" },
  { name: "Ophthalmology", path: "", gradient: "from-amber-500 to-yellow-500" },
  { name: "Pulmonology", path: "", gradient: "from-sky-500 to-blue-500" },
  { name: "Urgent Care", path: "", gradient: "from-emerald-500 to-green-500" },
  { name: "Endocrinology", path: "", gradient: "from-teal-500 to-cyan-500" },
  { name: "Dermatology", path: "", gradient: "from-rose-500 to-pink-500" },
];

const stats = [
  { number: "100%", label: "Hippa Compliant", icon: Target },
  { number: "50+", label: "Medical Specialties", icon: BookHeart },
  { number: "24/7", label: "AI Assistant", icon: Zap },
  { number: "20K+", label: "Codes Generated", icon: Blocks },
];

export default function Home() {
  return (
    <main className="container mt-4 p-5 md:mt-8 md:p-10">
      {/* Hero Section with Enhanced Styling */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 mb-12 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <Sparkles className="size-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Medical Coding</span>
          </div>
          
          <Hero
            title="Medical Coding Assistant"
            description="The Right Insights, Right When You Need Them. Powered by AI."
            buttonText="Learn more 🚀"
            buttonLink="/about"
            backgroundImage="/assets/hero.png"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-6 text-center relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="size-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Cards */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {/* Compliance Card */}
        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
          
          <CardHeader className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Compliance
              </CardTitle>
              <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <ShieldCheck className="size-6 text-primary-foreground" />
              </div>
            </div>
            <CardDescription className="text-base text-muted-foreground">
              Ensure your practice meets all regulatory requirements with our comprehensive compliance tools
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200 group/item"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-200">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors duration-200">
                      {item.name}
                    </p>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Specialties Card */}
        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-500" />
          
          <CardHeader className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                Specialties
              </CardTitle>
              <div className="rounded-xl bg-gradient-to-br from-secondary to-secondary/80 p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <BookHeart className="size-6 text-secondary-foreground" />
              </div>
            </div>
            <CardDescription className="text-base text-muted-foreground">
              Specialized coding support across all major medical specialties
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid grid-cols-2 gap-3">
              {specialtiesItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative overflow-hidden group/specialty"
                >
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 hover:from-muted to-muted/50 transition-all duration-300 group-hover/specialty:scale-105">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient} shadow-sm`} />
                    <span className="text-sm font-medium text-foreground truncate">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background p-8 text-center border border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-60" />
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="size-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Transform Your Medical Coding Process
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of healthcare professionals who trust EHRCoder for accurate, compliant medical coding
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="mailto:ceo@ehrcoder.com" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200 hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <Link href="mailto:ceo@ehrcoder.com" className="text-primary hover:underline font-medium">
                ceo@ehrcoder.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}