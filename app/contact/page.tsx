"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { useDispatch, useSelector } from "react-redux"
import { submitContactRequest, resetContactForm } from "@/lib/redux/reducers/contactReducer"
import type { RootState } from "@/lib/redux/store"

export default function ContactPage() {
  const dispatch = useDispatch()
  const { loading, success, error } = useSelector((state: RootState) => state.contact)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  // Reset form when submission is successful
  useEffect(() => {
    if (success) {
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }
  }, [success])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(submitContactRequest(formState))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-blue-100 mb-8">
                Have questions about our services or looking for career opportunities? We're here to help.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection>
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Our team is ready to assist you with any inquiries about our recruitment services, job opportunities,
                  or partnership possibilities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        123 Business Avenue, Suite 500
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@talenttreerecruits.com" className="hover:text-blue-700 transition-colors">
                          info@talenttreerecruits.com
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href="mailto:careers@talenttreerecruits.com"
                          className="hover:text-blue-700 transition-colors"
                        >
                          careers@talenttreerecruits.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+12125551234" className="hover:text-blue-700 transition-colors">
                          +1 (212) 555-1234
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+18005551234" className="hover:text-blue-700 transition-colors">
                          +1 (800) 555-1234 (Toll-free)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Office Hours</h3>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-blue-900">Monday - Friday</p>
                        <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Saturday</p>
                        <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-900">Sunday</p>
                        <p className="text-gray-600">Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm p-8">
                {success ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700 mb-6">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                    <Button onClick={() => dispatch(resetContactForm())}>Send Another Message</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                    {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">{error}</div>}
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            required
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Select
                            value={formState.subject}
                            onValueChange={(value) => setFormState({ ...formState, subject: value })}
                            required
                          >
                            <SelectTrigger id="subject" className="mt-1">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="services">Recruitment Services</SelectItem>
                              <SelectItem value="career">Career Opportunities</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            required
                            className="mt-1 h-32"
                            placeholder="How can we help you?"
                          />
                        </div>

                        <div>
                          <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Sending Message..." : "Send Message"}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Visit Our Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're conveniently located in the heart of New York City. Feel free to stop by during our office hours.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-sm h-[400px] bg-gray-200">
              {/* This would be replaced with an actual map component in a real application */}
              <div className="w-full h-full flex items-center justify-center bg-blue-50">
                <p className="text-blue-700 font-medium">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
