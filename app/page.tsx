"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, CheckCircle, Download, FileText, Globe, Palette, Shield, Sparkles, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/lib/i18n/use-translation"

export default function LandingPage() {
  const { t } = useTranslation()

  const themes = [
    {
      name: t("executive"),
      description: t("executiveDesc"),
      features: [t("cleanTypography"), t("strategicLayout"), t("executiveSummary")],
    },
    {
      name: t("technical"),
      description: t("technicalDesc"),
      features: [t("skillsMatrix"), t("projectHighlights"), t("certificationSection")],
    },
    {
      name: t("creative"),
      description: t("creativeDesc"),
      features: [t("portfolioIntegration"), t("visualElements"), t("brandFocused")],
    },
    {
      name: t("academic"),
      description: t("academicDesc"),
      features: [t("publicationsSection"), t("researchHighlights"), t("teachingExperience")],
    },
    {
      name: t("minimalist"),
      description: t("minimalistDesc"),
      features: [t("optimizedWhitespace"), t("strategicTypography"), t("contentFirst")],
    },
    {
      name: t("international"),
      description: t("internationalDesc"),
      features: [t("multiLanguage"), t("regionSpecific"), t("globalStandards")],
    },
  ]

  const testimonials = [
    {
      quote:
        "Minu'nun ATS optimizasyon özelliğini kullanarak, özgeçmişim tarama sürecini geçti ve bir haftada üç farklı mülakat teklifi aldım.",
      name: "Ayşe Yılmaz",
      title: "Kıdemli Ürün Müdürü",
      company: "Teknoloji Çözümleri A.Ş.",
    },
    {
      quote:
        "Markdown editörü sayesinde farklı pozisyonlar için birden fazla özgeçmiş versiyonunu kolayca yönetebildim.",
      name: "Mehmet Kaya",
      title: "Yazılım Mühendisi",
      company: "Global Sistemler",
    },
    {
      quote: "Yönetici şablonu, liderlik becerilerimi mükemmel bir şekilde vurgulamama yardımcı oldu.",
      name: "Zeynep Demir",
      title: "Operasyon Direktörü",
      company: "Kurumsal Çözümler Ltd.",
    },
    {
      quote: "Akademik dünyada çalışan biri olarak, Akademik şablon araştırma pozisyonlarım için tam ihtiyacım olandı.",
      name: "Dr. Ahmet Öztürk",
      title: "Doçent",
      company: "Üniversite Araştırma Merkezi",
    },
    {
      quote: "Yapay zeka önerileri, özgeçmişimdeki normalde fark edemeyeceğim eksiklikleri belirlememe yardımcı oldu.",
      name: "Elif Şahin",
      title: "Pazarlama Uzmanı",
      company: "Yaratıcı Ajans",
    },
    {
      quote:
        "Farklı başvuru sistemleri için özgeçmişimi çeşitli formatlarda dakikalar içinde oluşturup dışa aktarabildim.",
      name: "Burak Yıldız",
      title: "Finans Analisti",
      company: "Yatırım Ortakları",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Minu</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              {t("features")}
            </Link>
            <Link href="#themes" className="text-sm font-medium hover:text-primary transition-colors">
              {t("themes")}
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              {t("testimonials")}
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              {t("faq")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link href="/builder">
              <Button size="lg" className="font-medium">
                {t("createResume")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {t("professionalResumeBuilder")}
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    {t("transformCareer")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("createATSResumes")}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/builder">
                    <Button size="lg" className="px-8 font-medium">
                      {t("createResume")}
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button size="lg" variant="outline" className="px-8 font-medium">
                      {t("exploreFeatures")}
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{t("atsOptimized")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{t("multipleFormats")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{t("professionalTemplates")}</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:ml-10">
                <div className="relative overflow-hidden rounded-xl border bg-background p-2 shadow-lg">
                  <div className="relative">
                    <Image
                      src="/resume-template.jpeg"
                      width={800}
                      height={600}
                      alt="Modern Resume Template"
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">{t("resumeAnalysis")}</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[92%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
                <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30" id="features">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t("comprehensiveFeatures")}
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">{t("everythingYouNeed")}</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="bg-background/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("markdownSimplicity")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("markdownDescription")}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("atsOptimization")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("atsDescription")}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("professionalThemes")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("themesDescription")}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("multipleExportFormats")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("exportDescription")}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("cloudSync")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("cloudDescription")}</p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t("aiPowered")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("aiDescription")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20" id="themes">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("resumeThemes")}</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">{t("chooseThemes")}</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {themes.map((theme, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/30 flex items-center justify-center border-b">
                    <span className="text-2xl font-semibold">{theme.name}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{theme.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{theme.description}</p>
                    <div className="mt-4 space-y-2">
                      {theme.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/builder">
                      <Button variant="outline" className="mt-6 w-full">
                        {t("useTemplate")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("successStories")}</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">{t("seeHow")}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-background/60 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Award key={i} className="h-5 w-5 text-primary" />
                          ))}
                        </div>
                        <blockquote className="text-lg font-medium mb-4">"{testimonial.quote}"</blockquote>
                      </div>
                      <div className="border-t pt-4 mt-auto">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" id="faq">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("faq")}</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about Minu
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  question: "What is Markdown and why use it for resumes?",
                  answer:
                    "Markdown is a lightweight markup language that allows you to format text using simple syntax. It's perfect for resumes because it lets you focus on content while maintaining consistent formatting. Our editor handles the styling automatically, ensuring professional results every time.",
                },
                {
                  question: "How does the ATS optimization feature work?",
                  answer:
                    "Our ATS (Applicant Tracking System) optimization analyzes your resume against job descriptions to identify keyword matches and gaps. It provides suggestions to improve your resume's visibility to automated screening systems, increasing your chances of getting to the interview stage.",
                },
                {
                  question: "What export formats are available?",
                  answer:
                    "Minu supports exporting your resume as PDF, DOCX (Microsoft Word), HTML, and plain text. All formats are professionally formatted and ready to submit. The PDF format includes additional features like custom fonts and advanced layout options.",
                },
                {
                  question: "Can I create multiple versions of my resume?",
                  answer:
                    "Yes, Minu allows you to create and save multiple versions of your resume. This is perfect for tailoring your resume to different positions or industries. All versions are stored securely in your account and can be accessed from any device.",
                },
                {
                  question: "Is Minu free to use?",
                  answer:
                    "Minu offers both free and premium plans. The free plan includes basic features like Markdown editing and PDF export. Premium plans add advanced features like ATS optimization, multiple export formats, cloud synchronization, and AI-powered suggestions.",
                },
              ].map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("readyToElevate")}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("joinThousands")}</p>
              </div>
              <div className="mt-6">
                <Link href="/builder">
                  <Button size="lg" className="px-8 font-medium">
                    {t("createYourResume")}
                  </Button>
                </Link>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{t("securePrivate")}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Minu</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Professional resume builder with ATS optimization, multiple export formats, and AI-powered suggestions.
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Minu. {t("allRightsReserved")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("features")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Markdown Editor
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    ATS Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Professional Themes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Multiple Export Formats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cloud Synchronization
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Resume Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Career Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Resume Writing Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Industry Examples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              {t("designedBy")} <span className="font-medium">Onur YERLİKAYA</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
