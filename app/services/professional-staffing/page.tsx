import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Users, Award, Clock, Building } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function ProfessionalStaffingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <FadeInSection>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">Professional Staffing</h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Specialized recruitment for mid-level professionals and technical experts across industries.
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
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Connecting You with Top Professional Talent</h2>
                                <p className="text-gray-700 mb-6">
                                    Our Professional Staffing service is designed to help organizations find skilled professionals across
                                    various disciplines and industries. Whether you need to fill permanent positions, contract roles, or
                                    temporary assignments, we have the expertise and network to connect you with exceptional talent.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    We understand that finding professionals with the right technical skills, experience, and cultural fit
                                    is crucial for your organization's success. Our dedicated recruiters specialize in specific industries
                                    and functional areas, allowing us to identify and attract candidates who meet your exact requirements.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Users className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Permanent Placement</h3>
                                        <p className="text-gray-700">
                                            Find full-time professionals who will contribute to your organization's long-term success with our
                                            comprehensive permanent placement services.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Clock className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Contract Staffing</h3>
                                        <p className="text-gray-700">
                                            Access specialized skills for specific projects or time periods with our flexible contract
                                            staffing solutions.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Award className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Executive Professionals</h3>
                                        <p className="text-gray-700">
                                            Recruit senior professionals and department heads who will provide leadership and expertise to
                                            drive your business forward.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                            <Building className="h-6 w-6 text-blue-700" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Project Teams</h3>
                                        <p className="text-gray-700">
                                            Build entire project teams with complementary skills and experience for specific initiatives or
                                            transformations.
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Professional Staffing Process</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Requirements Analysis</h4>
                                        <p className="text-gray-700">
                                            We work closely with you to understand your specific needs, including technical requirements,
                                            experience level, team dynamics, and company culture.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Targeted Sourcing</h4>
                                        <p className="text-gray-700">
                                            Our recruiters leverage their industry-specific networks, advanced search techniques, and our
                                            proprietary database to identify qualified candidates.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Thorough Screening</h4>
                                        <p className="text-gray-700">
                                            Candidates undergo comprehensive screening, including skills assessment, behavioral interviews,
                                            and reference checks to ensure they meet your requirements.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Presentation & Selection</h4>
                                        <p className="text-gray-700">
                                            We present you with a shortlist of qualified candidates, complete with detailed profiles and
                                            assessment summaries, and facilitate the interview process.
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Onboarding Support</h4>
                                        <p className="text-gray-700">
                                            Once you've selected your preferred candidate, we assist with offer negotiation and provide
                                            support during the onboarding process to ensure a smooth transition.
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className="lg:col-span-1">
                            <FadeInSection delay={0.2}>
                                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                                    <h3 className="text-xl font-bold text-blue-900 mb-4">Industries We Serve</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Information Technology</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Finance & Accounting</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Healthcare & Life Sciences</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Engineering & Manufacturing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Sales & Marketing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Human Resources</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Legal & Compliance</span>
                                        </li>
                                    </ul>

                                    <div className="mt-8">
                                        <h4 className="font-semibold text-blue-900 mb-2">Professional Roles We Fill:</h4>
                                        <ul className="space-y-2">
                                            <li className="text-gray-700">• Software Developers & Engineers</li>
                                            <li className="text-gray-700">• Project & Program Managers</li>
                                            <li className="text-gray-700">• Financial Analysts & Accountants</li>
                                            <li className="text-gray-700">• HR Specialists & Managers</li>
                                            <li className="text-gray-700">• Marketing & Sales Professionals</li>
                                            <li className="text-gray-700">• Healthcare Practitioners</li>
                                            <li className="text-gray-700">• Legal & Compliance Specialists</li>
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <Button asChild className="w-full">
                                            <Link href="/contact" className="text-white">Discuss Your Staffing Needs</Link>
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
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Build Your Professional Team?</h2>
                            <p className="text-gray-700 mb-8">
                                Contact us today to discuss your professional staffing requirements and discover how we can help you
                                find exceptional talent for your organization.
                            </p>
                            <Button size="lg" asChild>
                                <Link href="/contact" className="text-white">Contact Our Staffing Team</Link>
                            </Button>
                        </div>
                    </FadeInSection>
                </div>
            </section>
        </div>
    )
}