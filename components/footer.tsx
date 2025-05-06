import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "./Logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-blue-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-blue-200 mb-6">
              Stay updated with the latest job opportunities and recruitment insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-blue-700/30 border-blue-600 text-white placeholder:text-blue-300"
              />
              <Button className="bg-white text-blue-800 hover:bg-blue-50">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center">
              <Logo />
            </div>
            <p className="text-blue-200 mb-4">
              Connecting top talent with leading companies since 2010. Your trusted partner in professional recruitment.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-700/50 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-blue-700/50 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-blue-700/50 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="bg-blue-700/50 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Job Listings
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-2"></span>
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/executive-search"
                  className="text-blue-200 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Executive Search
                </Link>
              </li>
              <li>
                <Link
                  href="/services/temporary-staffing"
                  className="text-blue-200 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Temporary Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-recruitment"
                  className="text-blue-200 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  IT Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hr-consulting"
                  className="text-blue-200 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/talent-assessment"
                  className="text-blue-200 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                  Talent Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">
                  123 Business Avenue, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-blue-100 hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@talenttree.com" className="text-blue-100 hover:text-white transition-colors">
                  info@talenttree.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-blue-300 flex-shrink-0" />
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Schedule a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-700/50 py-6 flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
          <p>&copy; {currentYear} TalentTree Professional Recruitment. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
