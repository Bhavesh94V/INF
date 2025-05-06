import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Award, TrendingUp, CheckCircle2 } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About EliteRecruit</h1>
              <p className="text-xl text-blue-100 mb-8">
                We're a premium recruitment agency dedicated to connecting exceptional talent with industry-leading
                companies.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2025, EliteRecruit began with a simple mission: to transform the recruitment industry by
                  providing a more personalized, effective approach to connecting talent with opportunity.
                </p>
                <p className="text-gray-700 mb-6">
                  What started as a small team of passionate recruiters has grown into a global agency with offices in
                  major cities worldwide. Throughout our growth, we've maintained our commitment to excellence and
                  personalized service.
                </p>
                <p className="text-gray-700">
                  Today, we're proud to be trusted by Fortune 500 companies and emerging startups alike to find the
                  talent that drives their success. Our deep industry knowledge, extensive network, and innovative
                  approach have made us leaders in executive search and professional recruitment.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do and define who we are as an organization.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">People First</h3>
                <p className="text-gray-600">
                  We believe in treating candidates and clients as people, not transactions. Building meaningful
                  relationships is at the heart of our approach.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering exceptional results. We set high standards for ourselves and
                  continuously strive to exceed expectations.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We operate with transparency and honesty in all our interactions. Trust is the foundation of our
                  business and relationships.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and methodologies to stay ahead of industry trends and provide
                  cutting-edge recruitment solutions.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who guide our company's vision and strategy.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/premium-photo/portrait-young-girl-posing-gray_136354-7645.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                    alt="Ananya Desai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Ananya Desai</h3>
                  <p className="text-blue-600 mb-3">Head of Talent Acquisition</p>
                  <p className="text-gray-600 mb-4">
                    Ananya drives our talent strategies with a focus on innovation and inclusion, helping startups scale
                    quickly with the right people.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/indian-stylish-man-yellow-traditional-clothes-with-white-scarf-posed-outdoor-against-wooden-background-shows-namaste-hands-sign_627829-12668.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                    alt="Ravi Mehta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Ravi Mehta</h3>
                  <p className="text-blue-600 mb-3">Head of Client Partnerships</p>
                  <p className="text-gray-600 mb-4">
                    With a strong background in consulting and client success, Ravi ensures long-term value through
                    strategic recruitment solutions.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17501.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                    alt="Meera Kapoor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Meera Kapoor</h3>
                  <p className="text-blue-600 mb-3">Senior Recruitment Consultant</p>
                  <p className="text-gray-600 mb-4">
                    Meera specializes in tech hiring and has helped place hundreds of engineers and product leaders in
                    high-growth roles.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-700 mb-2">12+</div>
                <p className="text-gray-700">Years of Experience</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-700 mb-2">5,000+</div>
                <p className="text-gray-700">Successful Placements</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-700 mb-2">200+</div>
                <p className="text-gray-700">Corporate Partners</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-blue-700 mb-2">8</div>
                <p className="text-gray-700">Global Offices</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Whether you're seeking exceptional talent or your next career opportunity, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-blue-700 hover:bg-blue-700">
                  <Link href="/jobs">Browse Opportunities</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
