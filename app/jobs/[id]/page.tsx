"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Building,
  ChevronLeft,
  Upload,
  CheckCircle,
  Share2,
  Bookmark,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useJobStore } from "@/lib/store"
import { useDispatch, useSelector } from "react-redux"
import { submitApplicationRequest } from "@/lib/redux/reducers/jobApplicationReducer"
import type { RootState } from "@/lib/redux/store"

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const jobId = params.id as string
  const dispatch = useDispatch()
  const { loading, success, error } = useSelector((state: RootState) => state.jobApplication)

  // Get jobs from the store
  const { jobs } = useJobStore()
  const job = jobs.find((job) => job.id === jobId)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  })

  const [fileName, setFileName] = useState("")

  // Reset form when submission is successful
  useEffect(() => {
    if (success) {
      setFormState({
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
      })
      setFileName("")
    }
  }, [success])

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
        <p className="text-gray-600 mb-8">The job you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/jobs">Browse All Jobs</Link>
        </Button>
      </div>
    )
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState({
        ...formState,
        resume: e.target.files[0],
      })
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(
      submitApplicationRequest({
        jobTitle: job.title,
        jobId: job.id,
        company: job.company,
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        coverLetter: formState.coverLetter,
        resumeFileName: fileName,
      }),
    )
  }

  // Find similar jobs based on category
  const similarJobs = jobs.filter((j) => j.id !== job.id && j.category === job.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Jobs Navigation */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/jobs")}
            className="text-blue-600 hover:text-blue-800 mb-4 pl-0"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Jobs
          </Button>
        </div>

        {/* Main Job Card */}
        <div className="bg-white border rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-blue-50 p-3 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>

            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                {job.type}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{job.title}</h1>
              <div className="text-gray-700 mb-2">{job.company}</div>

              <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-600 mt-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  <span>Posted {job.posted}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-4 w-4" />
                <span className="sr-only">Save</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Job Description</h2>
              <p className="text-gray-700 mb-6">{job.description}</p>

              {/* Requirements */}
              <h3 className="text-lg font-bold text-blue-900 mb-3">Requirements</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-700">
                    {requirement}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <h3 className="text-lg font-bold text-blue-900 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Benefits */}
              <h3 className="text-lg font-bold text-blue-900 mb-3">Benefits</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* About Company */}
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">About {job.company}</h2>
              <div className="flex items-start mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{job.company}</h3>
                  <p className="text-gray-600">
                    {job.companyIndustry} • {job.companySize}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-line">{job.aboutCompany}</p>
            </div>
          </div>

          {/* Right Column - Apply and Job Details */}
          <div className="space-y-8">
            {/* Apply Card */}
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Apply for this position</h2>
              <p className="text-gray-600 mb-4">
                Ready to take the next step in your career? Apply now and join our team of talented professionals.
              </p>
              <Button
                className="w-full"
                onClick={() => document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply Now
              </Button>
            </div>

            {/* Job Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Salary Range</span>
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posted</span>
                  <span className="font-medium">{job.posted}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs Card */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarJobs.length > 0 ? (
                  similarJobs.map((similarJob) => (
                    <Link
                      key={similarJob.id}
                      href={`/jobs/${similarJob.id}`}
                      className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-blue-900">{similarJob.title}</div>
                      <div className="text-sm text-gray-600">{similarJob.company}</div>
                      <div className="text-sm text-gray-500 mt-1">{similarJob.location}</div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-2">No similar jobs found</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <section id="apply-section" className="py-16 bg-white mt-16 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Apply for this Position</h2>
              <p className="text-gray-600">
                Complete the form below to apply for the {job.title} position at {job.company}.
              </p>
            </div>

            {success ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-700 mb-6">
                  Thank you for your interest in the {job.title} position. Our team will review your application and
                  contact you soon.
                </p>
                <Button asChild>
                  <Link href="/jobs">Browse More Jobs</Link>
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 border">
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
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="resume">Resume/CV</Label>
                      <div className="mt-1">
                        <label
                          htmlFor="resume-upload"
                          className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-blue-400 focus:outline-none"
                        >
                          <span className="flex flex-col items-center space-y-2">
                            {fileName ? (
                              <>
                                <span className="font-medium text-blue-600">{fileName}</span>
                                <span className="text-xs text-gray-500">Click to change file</span>
                              </>
                            ) : (
                              <>
                                <Upload className="w-8 h-8 text-gray-400" />
                                <span className="font-medium text-gray-600">
                                  Drop your file here, or <span className="text-blue-600 underline">browse</span>
                                </span>
                                <span className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</span>
                              </>
                            )}
                          </span>
                          <input
                            id="resume-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                      <Textarea
                        id="coverLetter"
                        value={formState.coverLetter}
                        onChange={(e) => setFormState({ ...formState, coverLetter: e.target.value })}
                        className="mt-1 h-32"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      />
                    </div>

                    <div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Submitting Application..." : "Submit Application"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
