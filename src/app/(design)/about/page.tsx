import { 
  Clock, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Shield, 
  Stethoscope, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Target,
  Zap,
  Award,
  Heart
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Reduce documentation time from hours to minutes",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Cut Costs",
    description: "Lower payroll expenses with automated coding",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Increase Throughput",
    description: "See more patients with streamlined workflows",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: Heart,
    title: "Reduce Burnout",
    description: "Let physicians focus on patient care, not paperwork",
    gradient: "from-red-500 to-pink-500"
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Document",
    description: "Physician meets with a patient and writes up a clinical note",
    icon: FileText
  },
  {
    step: "02",
    title: "Copy and Paste",
    description: "Patient pastes note into EHRCoder, which is fully encrypted and HIPPA compliant",
    icon: Stethoscope
  },
  {
    step: "03",
    title: "Code",
    description: "EHRCoder automatically generates appropriate CPT and ICD-10 codes through Machine Learning and AI Agents",
    icon: Zap
  },
  {
    step: "04",
    title: "Continue",
    description: "Move confidently to the next patient with complete documentation",
    icon: ArrowRight
  }
];

const features = [
  "CPT, ICD-10, and Penny (non-billable) code generation",
  "Specialty-specific coding insights",
  "Point-of-care or back-end coding flexibility",
  "HIPAA-compliant and secure platform",
  "Integration with existing EHR systems"
];

export default function AboutPage() {
  return (
    <main className="container p-5 md:p-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 mb-12">
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="size-4 text-primary" />
            <span className="text-sm font-medium text-primary">About EHRCoder</span>
          </div>
          
          <h1 className="font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Revolutionizing Medical Coding
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            A back-end medical coding assistant designed to streamline documentation 
            and coding processes for healthcare providers, allowing you to focus on what matters most—patient care.
          </p>
        </div>
      </div>

      {/* Value Proposition Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-6 text-center relative z-10">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-4 shadow-lg`}>
                <benefit.icon className="size-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        {/* What We Do */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="size-6 text-primary" />
              What We Do
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">EHRCoder</strong> supports CPT, ICD-10, and Penny (non-billable) 
                codes, helping ensure compliance and accuracy while dramatically reducing administrative burden.
              </p>
              <p>
                By automating code generation and keeping up with the latest compliance bulletins, we allow 
                physicians and staff to focus more on patient care and less on paperwork. Whether codes are 
                entered at the point of care or after the visit, our solution adapts seamlessly to your workflow.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="size-6 text-primary" />
              Who Benefits?
            </h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Private practices and clinics</strong> of all specialties, 
                especially those with high patient loads and significant documentation requirements. From solo 
                practitioners to multi-physician practices, EHRCoder scales to meet your needs.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="size-6 text-primary" />
              Our Competitive Edge
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide the most current and up-to-date compliance and billing details, with a built-in 
              bulletin system for ongoing review and staff education. Stay ahead of regulatory changes 
              and ensure your practice remains compliant and profitable.
            </p>
          </div>
        </div>

        {/* Features Sidebar */}
        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="size-5 text-primary" />
                Key Features
              </CardTitle>
              <CardDescription>Everything you need for efficient medical coding</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="size-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Workflow Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How simple medical coding will be
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto shadow-lg">
                      <step.icon className="size-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connector Arrow */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="size-6 text-primary/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background p-8 text-center border border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-60" />
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join healthcare providers who are already saving time, reducing costs, and improving patient care with EHRCoder.
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-200 hover:shadow-lg hover:-translate-y-0.5 transform cursor-pointer">
            <span>Get Started Today</span>
            <ArrowRight className="size-4" />
          </div>
        </div>
      </div>
    </main>
  );
}