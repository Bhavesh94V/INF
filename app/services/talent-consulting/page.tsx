import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, LineChart, Users, Lightbulb, Target, BarChart } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function TalentConsultingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <FadeInSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">Talent Consulting</h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Strategic advisory services to optimize your recruitment processes and talent management strategies.
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
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Transform Your Talent Strategy</h2>
                                <p className="text-gray-700 mb-6">
                                    Our Talent Consulting services help organizations develop and implement effective talent acquisition
                                    and management strategies. We provide expert guidance to optimize your recruitment processes, enhance
                                    your employer brand, and build a strong talent pipeline.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    In today's competitive job market, having a strategic approach to talent is essential for
                                    organizational success. Our consultants bring deep industry knowledge and best practices to help you
                                    attract, develop, and retain top talent.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <LineChart className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Recruitment Strategy Development</h3>
                                        <p className="text-gray-700">
                                            Create a comprehensive recruitment strategy aligned with your business goals and talent needs.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Users className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Employer Branding</h3>
                                        <p className="text-gray-700">
                                            Develop a compelling employer brand that attracts top talent and differentiates your organization.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <BarChart className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Compensation Benchmarking</h3>
                                        <p className="text-gray-700">
                                            Ensure your compensation packages are competitive and aligned with market standards.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Target className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Talent Assessment</h3>
                                        <p className="text-gray-700">
                                            Implement effective assessment methodologies to identify the best candidates for your
                                            organization.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Consulting Approach</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Diagnostic Assessment</h4>
                                        <p className="text-gray-700">
                                            We begin by conducting a thorough assessment of your current talent acquisition processes,
                                            identifying strengths, weaknesses, and opportunities for improvement.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Strategy Development</h4>
                                        <p className="text-gray-700">
                                            Based on the assessment findings, we develop a customized talent strategy that addresses your
                                            specific challenges and aligns with your business objectives.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Implementation Planning</h4>
                                        <p className="text-gray-700">
                                            We create a detailed implementation plan with clear timelines, responsibilities, and key
                                            performance indicators to ensure successful execution.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Execution Support</h4>
                                        <p className="text-gray-700">
                                            Our consultants provide hands-on support during the implementation phase, offering guidance,
                                            training, and resources to ensure smooth execution.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Measurement & Optimization</h4>
                                        <p className="text-gray-700">
                                            We continuously monitor progress, measure results against established KPIs, and make adjustments
                                            as needed to optimize your talent strategy.
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className="lg:col-span-1">
                            <FadeInSection delay={0.2}>
                                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                    <h3 className="text-xl font-bold text-blue-900 mb-4">Our Consulting Services</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Recruitment Process Optimization</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Employer Brand Development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Talent Market Analysis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Compensation & Benefits Strategy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Diversity & Inclusion Initiatives</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Candidate Experience Enhancement</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Recruitment Technology Assessment</span>
                                        </li>
                                    </ul>

                                    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-semibold text-blue-900 mb-2">Why Choose Our Consulting Services:</h4>
                                        <ul className="space-y-2">
                                            <li className="text-gray-700 flex items-start">
                                                <Lightbulb className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                                                <span>Industry-specific expertise and insights</span>
                                            </li>
                                            <li className="text-gray-700 flex items-start">
                                                <Lightbulb className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                                                <span>Data-driven approach to talent strategy</span>
                                            </li>
                                            <li className="text-gray-700 flex items-start">
                                                <Lightbulb className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                                                <span>Customized solutions for your unique challenges</span>
                                            </li>
                                            <li className="text-gray-700 flex items-start">
                                                <Lightbulb className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                                                <span>Practical implementation support</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <Button asChild className="w-full">
                                            <Link href="/contact" className="text-white">Schedule a Consultation</Link>
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
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Transform Your Talent Strategy?</h2>
                            <p className="text-gray-700 mb-8">
                                Contact us today to schedule a consultation with our talent experts and discover how we can help you
                                optimize your recruitment processes and talent management strategies.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact" className="text-white">Contact Our Consulting Team</Link>
                            </Button>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    )
}