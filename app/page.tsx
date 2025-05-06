import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Briefcase, Award, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/animated-counter"
import FadeInSection from "@/components/fade-in-section"
import ClientLogos from "@/components/client-logos"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <FadeInSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Connecting <span className="text-blue-200">Top Talent</span> With Premier Opportunities
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                We specialize in executive recruitment and talent acquisition for industry-leading companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/jobs" className="flex items-center">
                    Browse Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <a href="/about">
                  <button className="px-8 w-full py-2.5 text-md border rounded-lg border-white text-white hover:bg-white hover:text-blue-700 transition-colors duration-300">
                    Learn More About Us
                  </button>
                </a>

              </div>
            </div>
          </FadeInSection>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <AnimatedCounter value={500} suffix="+" className="text-4xl font-bold text-blue-700 mb-2" />
                <p className="text-blue-900">Successful Placements</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <AnimatedCounter value={150} suffix="+" className="text-4xl font-bold text-blue-700 mb-2" />
                <p className="text-blue-900">Corporate Partners</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <AnimatedCounter value={95} suffix="%" className="text-4xl font-bold text-blue-700 mb-2" />
                <p className="text-blue-900">Client Satisfaction</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive recruitment solutions tailored to your organization's unique needs.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Executive Search</h3>
                <p className="text-gray-600 mb-4">
                  Strategic recruitment of C-suite and senior leadership positions for organizations seeking exceptional
                  talent.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Professional Staffing</h3>
                <p className="text-gray-600 mb-4">
                  Specialized recruitment for mid-level professionals and technical experts across various industries.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Talent Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Expert strategic advisory services to effectively optimize your recruitment processes and strengthen
                  employer branding.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Recruitment Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach to finding the perfect match for your organization.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FadeInSection delay={0.1}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  1
                </div>
                <div className="absolute top-5 left-5 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Needs Assessment</h3>
                <p className="text-gray-600">We thoroughly understand your requirements and organizational culture.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  2
                </div>
                <div className="absolute top-5 left-5 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Talent Search</h3>
                <p className="text-gray-600">Our experts engage with qualified candidates from our network.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  3
                </div>
                <div className="absolute top-5 left-5 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Evaluation</h3>
                <p className="text-gray-600">
                  Rigorous screening and assessment to ensure the perfect fit for your position.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  4
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Placement</h3>
                <p className="text-gray-600">Seamless onboarding and follow-up to ensure long-term success.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Featured Opportunities</h2>
                <p className="text-lg text-gray-600">Explore our latest premium job openings</p>
              </div>
              <a href="/jobs">
                <button className="px-5 py-2 text-blue-600 border border-blue-600 hover:bg-blue-50 rounded transition-colors duration-300">
                  View All Jobs
                </button>
              </a>
            </div>

          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                      Full-time
                    </span>
                    <h3 className="text-xl font-bold text-blue-900">Chief Technology Officer</h3>
                    <p className="text-gray-600">TechVision Enterprises</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Leadership</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Technology</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Executive</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-semibold">$180K - $220K</span>
                  <Link href="/jobs/chief-technology-officer">
                    <Button size="sm">Apply Now</Button>
                  </Link>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                      Full-time
                    </span>
                    <h3 className="text-xl font-bold text-blue-900">Senior Finance Manager</h3>
                    <p className="text-gray-600">Global Finance Partners</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Finance</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Management</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Banking</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-semibold">$120K - $150K</span>
                  <Link href="/jobs/senior-finance-manager">
                    <Button size="sm">Apply Now</Button>
                  </Link>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                      Full-time
                    </span>
                    <h3 className="text-xl font-bold text-blue-900">HR Director</h3>
                    <p className="text-gray-600">Innovate Corp</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Human Resources</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Leadership</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Strategy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-700 font-semibold">$130K - $160K</span>
                  <Link href="/jobs/hr-director">
                    <Button size="sm">Apply Now</Button>
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from organizations that have successfully partnered with us.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="https://img.freepik.com/free-photo/young-blogger-with-glasses-pointing-up_23-2148538860.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                      alt="Sarah Johnson"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900">Sarah Johnson</h4>
                    <p className="text-gray-600">CEO, TechVision Enterprises</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Working with this recruitment agency has been transformative for our organization. They truly
                  understand our company culture and consistently deliver exceptional talent that aligns with our values
                  and goals."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src="https://img.freepik.com/free-photo/young-blogger-with-glasses-pointing-up_23-2148538860.jpg?ga=GA1.1.2090407828.1744091715&semt=ais_hybrid&w=740"
                      alt="Michael Chen"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900">Michael Chen</h4>
                    <p className="text-gray-600">COO, Global Finance Partners</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Their executive search capabilities are unmatched. They found us a CFO who not only had the technical
                  expertise we needed but also fit perfectly with our company culture. The entire process was smooth and
                  professional."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Trusted By Industry Leaders</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We partner with prestigious organizations across various industries.
              </p>
            </div>
          </FadeInSection>

          <ClientLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Whether you're seeking exceptional talent or your next career opportunity, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
                <a href="/jobs">
                  <button className="px-6 py-2.5 rounded-md w-full text-[15px] font-medium border border-white  text-white hover:bg-white hover:text-blue-700 transition-colors duration-300">
                    Browse Opportunities
                  </button>
                </a>

              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
