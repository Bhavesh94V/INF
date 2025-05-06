"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Search, MapPin, Filter, X } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { useJobStore } from "@/lib/store"

export default function JobsPage() {
  const { jobs } = useJobStore()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [filtersVisible, setFiltersVisible] = useState(false)

  // Extract unique categories and locations from jobs
  const categories = ["All Categories", ...Array.from(new Set(jobs.map((job) => job.category)))]
  const locations = ["All Locations", ...Array.from(new Set(jobs.map((job) => job.location)))]

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All Categories")
    setSelectedLocation("All Locations")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Find Your Perfect Career Opportunity</h1>
              <p className="text-xl text-blue-100 mb-8">
                Browse our curated selection of premium job opportunities with industry-leading companies.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for jobs, companies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 bg-white text-gray-900 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Mobile Toggle */}
            <div className="md:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="w-full flex items-center justify-center"
              >
                {filtersVisible ? (
                  <>
                    <X className="mr-2 h-4 w-4" /> Hide Filters
                  </>
                ) : (
                  <>
                    <Filter className="mr-2 h-4 w-4" /> Show Filters
                  </>
                )}
              </Button>
            </div>

            {/* Filters - Sidebar */}
            <div className={`${filtersVisible ? "block" : "hidden"} md:block md:w-1/4 lg:w-1/5`}>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-800 p-0 h-auto"
                  >
                    Clear all filters
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Jobs List */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue-900">
                  {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Available
                </h2>
              </div>

              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredJobs.map((job, index) => (
                    <FadeInSection key={job.id} delay={index * 0.1}>
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                              {job.type}
                            </span>
                            <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <Briefcase className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>

                        <div className="flex items-center text-gray-500 mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.location}</span>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills &&
                            job.skills.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-blue-700 font-semibold">{job.salary}</span>
                          <Link href={`/jobs/${job.id}`}>
                            <Button size="sm">Apply Now</Button>
                          </Link>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl text-center">
                  <div className="mb-4 flex justify-center">
                    <Search className="h-12 w-12 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No jobs found</h3>
                  <p className="text-gray-500 mb-4">We couldn't find any jobs matching your search criteria.</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Don't See the Right Opportunity?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Submit your resume and we'll notify you when relevant positions become available.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Submit Your Resume</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
