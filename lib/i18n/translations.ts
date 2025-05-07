export type Language = "en" | "tr"

export type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

export const translations: Translations = {
  en: {
    // Navigation
    features: "Features",
    themes: "Themes",
    testimonials: "Testimonials",
    faq: "FAQ",
    createResume: "Create Resume",

    // Hero Section
    professionalResumeBuilder: "Professional Resume Builder",
    transformCareer: "Transform Your Career Story with Precision",
    createATSResumes:
      "Create ATS-optimized, professional resumes using our intuitive Markdown editor. Stand out to recruiters with elegant, customizable templates.",
    exploreFeatures: "Explore Features",
    atsOptimized: "ATS-Optimized",
    multipleFormats: "Multiple Formats",
    professionalTemplates: "Professional Templates",
    resumeAnalysis: "Resume Analysis: 92% Match",

    // Features Section
    comprehensiveFeatures: "Comprehensive Resume Building Features",
    everythingYouNeed: "Everything you need to create a professional, ATS-optimized resume",
    markdownSimplicity: "Markdown Simplicity",
    markdownDescription:
      "Focus on your content with our intuitive Markdown editor. See changes instantly with real-time preview.",
    atsOptimization: "ATS Optimization",
    atsDescription:
      "Our intelligent system analyzes your resume against job descriptions to ensure maximum visibility to recruiters.",
    professionalThemes: "Professional Themes",
    themesDescription:
      "Choose from our collection of professionally designed themes tailored for different industries and positions.",
    multipleExportFormats: "Multiple Export Formats",
    exportDescription:
      "Export your resume as PDF, DOCX, or HTML to meet any application requirement. Print-ready formats available.",
    cloudSync: "Cloud Synchronization",
    cloudDescription:
      "Access your resumes from anywhere. Your work is automatically saved and synced across all your devices.",
    aiPowered: "AI-Powered Suggestions",
    aiDescription: "Receive intelligent recommendations to improve your resume content, structure, and impact.",

    // Themes Section
    resumeThemes: "Professional Resume Themes",
    chooseThemes: "Choose from our collection of industry-specific, ATS-optimized themes",
    useTemplate: "Use Template",

    // Success Stories
    successStories: "Success Stories",
    seeHow: "See how Minu has helped professionals advance their careers",

    // CTA Section
    readyToElevate: "Ready to Elevate Your Professional Profile?",
    joinThousands: "Join thousands of professionals who have transformed their career opportunities with Minu.",
    createYourResume: "Create Your Resume Now",
    securePrivate: "Secure, private, and professional",

    // Footer
    allRightsReserved: "All rights reserved.",
    designedBy: "Designed and developed by",

    // Theme names
    executive: "Executive",
    technical: "Technical",
    creative: "Creative",
    academic: "Academic",
    minimalist: "Minimalist",
    international: "International",

    // Theme descriptions
    executiveDesc: "Elegant and authoritative design for senior positions",
    technicalDesc: "Optimized for technical roles and skill showcasing",
    creativeDesc: "Modern design for creative professionals",
    academicDesc: "Structured format for academic and research positions",
    minimalistDesc: "Clean, distraction-free design that focuses on content",
    internationalDesc: "Globally recognized format for international applications",

    // Theme features
    cleanTypography: "Clean typography",
    strategicLayout: "Strategic layout",
    executiveSummary: "Executive summary focus",
    skillsMatrix: "Skills matrix",
    projectHighlights: "Project highlights",
    certificationSection: "Technical certification section",
    portfolioIntegration: "Portfolio integration",
    visualElements: "Visual elements",
    brandFocused: "Brand-focused layout",
    publicationsSection: "Publications section",
    researchHighlights: "Research highlights",
    teachingExperience: "Teaching experience",
    optimizedWhitespace: "Optimized whitespace",
    strategicTypography: "Strategic typography",
    contentFirst: "Content-first approach",
    multiLanguage: "Multi-language support",
    regionSpecific: "Region-specific customizations",
    globalStandards: "Global standards compliance",

    // Language selector
    language: "Language",
  },
  tr: {
    // Navigation
    features: "Özellikler",
    themes: "Temalar",
    testimonials: "Kullanıcı Yorumları",
    faq: "SSS",
    createResume: "Özgeçmiş Oluştur",

    // Hero Section
    professionalResumeBuilder: "Profesyonel Özgeçmiş Oluşturucu",
    transformCareer: "Kariyer Hikayenizi Hassasiyetle Dönüştürün",
    createATSResumes:
      "Sezgisel Markdown editörümüzü kullanarak ATS optimize edilmiş profesyonel özgeçmişler oluşturun. Şık, özelleştirilebilir şablonlarla işe alım uzmanlarına fark yaratın.",
    exploreFeatures: "Özellikleri Keşfet",
    atsOptimized: "ATS-Optimize",
    multipleFormats: "Çoklu Format",
    professionalTemplates: "Profesyonel Şablonlar",
    resumeAnalysis: "Özgeçmiş Analizi: %92 Eşleşme",

    // Features Section
    comprehensiveFeatures: "Kapsamlı Özgeçmiş Oluşturma Özellikleri",
    everythingYouNeed: "Profesyonel, ATS optimize edilmiş bir özgeçmiş oluşturmak için ihtiyacınız olan her şey",
    markdownSimplicity: "Markdown Basitliği",
    markdownDescription:
      "Sezgisel Markdown editörümüzle içeriğinize odaklanın. Değişiklikleri gerçek zamanlı önizleme ile anında görün.",
    atsOptimization: "ATS Optimizasyonu",
    atsDescription:
      "Akıllı sistemimiz özgeçmişinizi iş tanımlarıyla karşılaştırarak işe alım uzmanlarına maksimum görünürlük sağlar.",
    professionalThemes: "Profesyonel Temalar",
    themesDescription:
      "Farklı sektörler ve pozisyonlar için özel olarak tasarlanmış profesyonel tema koleksiyonumuzdan seçim yapın.",
    multipleExportFormats: "Çoklu Dışa Aktarma Formatları",
    exportDescription:
      "Özgeçmişinizi PDF, DOCX veya HTML olarak dışa aktararak her türlü başvuru gereksinimini karşılayın. Yazdırmaya hazır formatlar mevcuttur.",
    cloudSync: "Bulut Senkronizasyonu",
    cloudDescription:
      "Özgeçmişlerinize her yerden erişin. Çalışmalarınız otomatik olarak kaydedilir ve tüm cihazlarınızda senkronize edilir.",
    aiPowered: "Yapay Zeka Destekli Öneriler",
    aiDescription: "Özgeçmiş içeriğinizi, yapısını ve etkisini geliştirmek için akıllı öneriler alın.",

    // Themes Section
    resumeThemes: "Profesyonel Özgeçmiş Temaları",
    chooseThemes: "Sektöre özel, ATS optimize edilmiş tema koleksiyonumuzdan seçim yapın",
    useTemplate: "Şablonu Kullan",

    // Success Stories
    successStories: "Başarı Hikayeleri",
    seeHow: "Minu'nun profesyonellerin kariyerlerini nasıl ilerletmelerine yardımcı olduğunu görün",

    // CTA Section
    readyToElevate: "Profesyonel Profilinizi Yükseltmeye Hazır mısınız?",
    joinThousands: "Minu ile kariyer fırsatlarını dönüştüren binlerce profesyonele katılın.",
    createYourResume: "Şimdi Özgeçmişinizi Oluşturun",
    securePrivate: "Güvenli, özel ve profesyonel",

    // Footer
    allRightsReserved: "Tüm hakları saklıdır.",
    designedBy: "Tasarım ve geliştirme",

    // Theme names
    executive: "Yönetici",
    technical: "Teknik",
    creative: "Yaratıcı",
    academic: "Akademik",
    minimalist: "Minimalist",
    international: "Uluslararası",

    // Theme descriptions
    executiveDesc: "Üst düzey pozisyonlar için zarif ve otoriter tasarım",
    technicalDesc: "Teknik roller ve beceri gösterimi için optimize edilmiş",
    creativeDesc: "Yaratıcı profesyoneller için modern tasarım",
    academicDesc: "Akademik ve araştırma pozisyonları için yapılandırılmış format",
    minimalistDesc: "İçeriğe odaklanan temiz, dikkat dağıtmayan tasarım",
    internationalDesc: "Uluslararası başvurular için küresel olarak tanınan format",

    // Theme features
    cleanTypography: "Temiz tipografi",
    strategicLayout: "Stratejik düzen",
    executiveSummary: "Yönetici özeti odaklı",
    skillsMatrix: "Beceri matrisi",
    projectHighlights: "Proje öne çıkanları",
    certificationSection: "Teknik sertifika bölümü",
    portfolioIntegration: "Portfolyo entegrasyonu",
    visualElements: "Görsel öğeler",
    brandFocused: "Marka odaklı düzen",
    publicationsSection: "Yayınlar bölümü",
    researchHighlights: "Araştırma öne çıkanları",
    teachingExperience: "Öğretim deneyimi",
    optimizedWhitespace: "Optimize edilmiş boşluk kullanımı",
    strategicTypography: "Stratejik tipografi",
    contentFirst: "İçerik öncelikli yaklaşım",
    multiLanguage: "Çoklu dil desteği",
    regionSpecific: "Bölgeye özel özelleştirmeler",
    globalStandards: "Küresel standartlara uygunluk",

    // Language selector
    language: "Dil",
  },
}
