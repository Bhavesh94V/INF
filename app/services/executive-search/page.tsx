import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function ExecutiveSearchPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <FadeInSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">Executive Search</h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Strategic recruitment of C-suite and senior leadership positions for industry-leading organizations.
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* Back to Services */}
            <div className="container mx-auto px-4 py-6">
                <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </div>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <FadeInSection>
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Finding Exceptional Leadership Talent</h2>
                                <p className="text-gray-700 mb-6">
                                    Our Executive Search service is designed to identify and attract top-tier leadership talent for
                                    critical roles within your organization. We understand that finding the right executive can transform
                                    your business and drive success.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    With our extensive network and deep industry knowledge, we connect you with exceptional candidates who
                                    not only possess the required skills and experience but also align with your company's culture and
                                    vision.
                                </p>

                                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Executive Search Process</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Strategic Consultation</h4>
                                        <p className="text-gray-700">
                                            We begin with a thorough understanding of your organization, its culture, and the specific
                                            requirements for the executive role. This includes identifying key competencies, experience, and
                                            leadership qualities needed.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">
                                            2. Market Research & Candidate Identification
                                        </h4>
                                        <p className="text-gray-700">
                                            Our research team conducts comprehensive market analysis to identify potential candidates from
                                            target companies and industries. We leverage our extensive network and advanced search
                                            methodologies to create a pool of qualified executives.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Rigorous Assessment</h4>
                                        <p className="text-gray-700">
                                            Candidates undergo a thorough evaluation process, including in-depth interviews, competency
                                            assessments, and reference checks. We assess not only their professional capabilities but also
                                            their leadership style and cultural fit.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Presentation & Selection</h4>
                                        <p className="text-gray-700">
                                            We present a shortlist of exceptional candidates, complete with detailed profiles and assessment
                                            reports. Our team facilitates the interview process and provides guidance throughout the selection
                                            phase.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Offer & Onboarding Support</h4>
                                        <p className="text-gray-700">
                                            Once you've identified your preferred candidate, we assist with offer negotiation and provide
                                            support during the onboarding process to ensure a smooth transition for both the executive and
                                            your organization.
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className="lg:col-span-1">
                            <FadeInSection delay={0.2}>
                                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                    <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Our Executive Search</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Access to an exclusive network of top-tier executives</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Industry-specific expertise and market insights</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Comprehensive assessment of leadership capabilities</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Confidential and discreet search process</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Tailored approach to meet your specific requirements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Ongoing support throughout the hiring process</span>
                                        </li>
                                    </ul>

                                    <div className="mt-8">
                                        <h4 className="font-semibold text-blue-900 mb-2">Positions We Recruit For:</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            <li className="text-gray-700">• CEO/President</li>
                                            <li className="text-gray-700">• CFO</li>
                                            <li className="text-gray-700">• CTO/CIO</li>
                                            <li className="text-gray-700">• COO</li>
                                            <li className="text-gray-700">• CMO</li>
                                            <li className="text-gray-700">• CHRO</li>
                                            <li className="text-gray-700">• VP Level</li>
                                            <li className="text-gray-700">• Directors</li>
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <Button asChild className="w-full">
                                            <Link href="/contact" className="text-white">Discuss Your Executive Search Needs</Link>
                                        </Button>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <FadeInSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Find Your Next Executive Leader?</h2>
                            <p className="text-gray-700 mb-8">
                                Contact us today to discuss your executive search requirements and discover how we can help you find
                                exceptional leadership talent for your organization.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact" className="text-white">Contact Our Executive Search Team</Link>
                            </Button>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    )
}