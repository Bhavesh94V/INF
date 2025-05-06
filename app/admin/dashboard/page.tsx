"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Briefcase, MessageSquare, Building, Plus, Trash2, Edit, LogOut } from "lucide-react"
import { useJobStore } from "@/lib/store"

export default function AdminDashboard() {
  const router = useRouter()
  const {
    jobs,
    addJob,
    updateJob,
    deleteJob,
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    clients,
    addClient,
    updateClient,
    deleteClient,
  } = useJobStore()

  // New job form state
  const [newJob, setNewJob] = useState({
    id: "",
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    category: "",
    level: "",
    salary: "",
    description: "",
    requirements: [""],
    skills: [""],
    benefits: [""],
    aboutCompany: "",
    companyIndustry: "",
    companySize: "",
    posted: "",
    postedDate: "",
  })

  // New testimonial form state
  const [newTestimonial, setNewTestimonial] = useState({
    id: "",
    name: "",
    position: "",
    company: "",
    content: "",
  })

  // New client form state
  const [newClient, setNewClient] = useState({
    id: "",
    name: "",
    logo: "/placeholder.svg?height=60&width=120",
  })

  // Dialog states
  const [jobDialogOpen, setJobDialogOpen] = useState(false)
  const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false)
  const [clientDialogOpen, setClientDialogOpen] = useState(false)

  // Edit states
  const [editingJob, setEditingJob] = useState<string | null>(null)
  const [editingTestimonial, setEditingTestimonial] = useState<string | null>(null)
  const [editingClient, setEditingClient] = useState<string | null>(null)

  // Handle logout
  const handleLogout = () => {
    router.push("/admin")
  }

  // Handle job form submission
  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split("T")[0]
    const posted = "Just now"

    if (editingJob) {
      // Update existing job
      updateJob(editingJob, { ...newJob, id: editingJob })
      setEditingJob(null)
    } else {
      // Add new job
      const jobId = newJob.title.toLowerCase().replace(/\s+/g, "-")
      addJob({
        ...newJob,
        id: jobId,
        posted,
        postedDate: formattedDate,
        requirements: newJob.requirements.filter((req) => req.trim() !== ""),
        skills: newJob.skills.filter((skill) => skill.trim() !== ""),
        benefits: newJob.benefits.filter((benefit) => benefit.trim() !== ""),
      })
    }

    // Reset form and close dialog
    setNewJob({
      id: "",
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      category: "",
      level: "",
      salary: "",
      description: "",
      requirements: [""],
      skills: [""],
      benefits: [""],
      aboutCompany: "",
      companyIndustry: "",
      companySize: "",
      posted: "",
      postedDate: "",
    })
    setJobDialogOpen(false)
  }

  // Handle testimonial form submission
  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingTestimonial) {
      // Update existing testimonial
      updateTestimonial(editingTestimonial, { ...newTestimonial, id: editingTestimonial })
      setEditingTestimonial(null)
    } else {
      // Add new testimonial
      const testimonialId = Date.now().toString()
      addTestimonial({ ...newTestimonial, id: testimonialId })
    }

    // Reset form and close dialog
    setNewTestimonial({
      id: "",
      name: "",
      position: "",
      company: "",
      content: "",
    })
    setTestimonialDialogOpen(false)
  }

  // Handle client form submission
  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingClient) {
      // Update existing client
      updateClient(editingClient, { ...newClient, id: editingClient })
      setEditingClient(null)
    } else {
      // Add new client
      const clientId = Date.now().toString()
      addClient({ ...newClient, id: clientId })
    }

    // Reset form and close dialog
    setNewClient({
      id: "",
      name: "",
      logo: "/placeholder.svg?height=60&width=120",
    })
    setClientDialogOpen(false)
  }

  // Edit job
  const editJob = (id: string) => {
    const job = jobs.find((job) => job.id === id)
    if (job) {
      setNewJob({
        ...job,
        requirements: job.requirements || [""],
        skills: job.skills || [""],
        benefits: job.benefits || [""],
      })
      setEditingJob(id)
      setJobDialogOpen(true)
    }
  }

  // Delete job
  const handleDeleteJob = (id: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      deleteJob(id)
    }
  }

  // Edit testimonial
  const editTestimonial = (id: string) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id === id)
    if (testimonial) {
      setNewTestimonial(testimonial)
      setEditingTestimonial(id)
      setTestimonialDialogOpen(true)
    }
  }

  // Delete testimonial
  const handleDeleteTestimonial = (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteTestimonial(id)
    }
  }

  // Edit client
  const editClient = (id: string) => {
    const client = clients.find((client) => client.id === id)
    if (client) {
      setNewClient(client)
      setEditingClient(id)
      setClientDialogOpen(true)
    }
  }

  // Delete client
  const handleDeleteClient = (id: string) => {
    if (confirm("Are you sure you want to delete this client?")) {
      deleteClient(id)
    }
  }

  // Handle array field changes for job form
  const handleArrayFieldChange = (field: "requirements" | "skills" | "benefits", index: number, value: string) => {
    const updatedArray = [...newJob[field]]
    updatedArray[index] = value
    setNewJob({ ...newJob, [field]: updatedArray })
  }

  // Add new item to array field
  const addArrayItem = (field: "requirements" | "skills" | "benefits") => {
    setNewJob({ ...newJob, [field]: [...newJob[field], ""] })
  }

  // Remove item from array field
  const removeArrayItem = (field: "requirements" | "skills" | "benefits", index: number) => {
    const updatedArray = newJob[field].filter((_, i) => i !== index)
    setNewJob({ ...newJob, [field]: updatedArray.length ? updatedArray : [""] })
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">Admin Dashboard</h1>
            <Button variant="ghost" onClick={handleLogout} className="flex items-center text-blue-700">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="jobs">
          <TabsList className="grid w-full grid-cols-1 mb-8 bg-blue-100">
            <TabsTrigger
              value="jobs"
              className="flex items-center text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Briefcase className="mr-2 h-4 w-4" /> Jobs
            </TabsTrigger>
            {/* <TabsTrigger
              value="testimonials"
              className="flex items-center text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> Testimonials
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="flex items-center text-blue-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Building className="mr-2 h-4 w-4" /> Clients
            </TabsTrigger> */}
          </TabsList>

          {/* Jobs Tab */}
          <TabsContent value="jobs">
            <Card className="border-blue-100">
              <CardHeader className="border-b border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-700">Manage Jobs</CardTitle>
                    <CardDescription className="text-blue-600">Add, edit, or remove job listings.</CardDescription>
                  </div>
                  <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                        <Plus className="mr-2 h-4 w-4" /> Add New Job
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-blue-700">{editingJob ? "Edit Job" : "Add New Job"}</DialogTitle>
                        <DialogDescription className="text-blue-600">
                          {editingJob
                            ? "Update the job details below."
                            : "Fill in the details for the new job listing."}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleJobSubmit}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="title" className="text-blue-700">
                                Job Title
                              </Label>
                              <Input
                                id="title"
                                value={newJob.title}
                                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="company" className="text-blue-700">
                                Company
                              </Label>
                              <Input
                                id="company"
                                value={newJob.company}
                                onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="location" className="text-blue-700">
                                Location
                              </Label>
                              <Input
                                id="location"
                                value={newJob.location}
                                onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="type" className="text-blue-700">
                                Job Type
                              </Label>
                              <Input
                                id="type"
                                value={newJob.type}
                                onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="category" className="text-blue-700">
                                Category
                              </Label>
                              <Input
                                id="category"
                                value={newJob.category}
                                onChange={(e) => setNewJob({ ...newJob, category: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="level" className="text-blue-700">
                                Level
                              </Label>
                              <Input
                                id="level"
                                value={newJob.level}
                                onChange={(e) => setNewJob({ ...newJob, level: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="salary" className="text-blue-700">
                              Salary Range
                            </Label>
                            <Input
                              id="salary"
                              value={newJob.salary}
                              onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                              required
                              className="border-blue-200 focus:border-blue-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="description" className="text-blue-700">
                              Description
                            </Label>
                            <Textarea
                              id="description"
                              value={newJob.description}
                              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                              required
                              className="h-24 border-blue-200 focus:border-blue-400"
                            />
                          </div>

                          {/* Requirements */}
                          <div>
                            <Label className="text-blue-700">Requirements</Label>
                            {newJob.requirements.map((req, index) => (
                              <div key={index} className="flex items-center gap-2 mt-2">
                                <Input
                                  value={req}
                                  onChange={(e) => handleArrayFieldChange("requirements", index, e.target.value)}
                                  placeholder={`Requirement ${index + 1}`}
                                  className="border-blue-200 focus:border-blue-400"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => removeArrayItem("requirements", index)}
                                  className="border-blue-200 text-blue-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2 border-blue-200 text-blue-700"
                              onClick={() => addArrayItem("requirements")}
                            >
                              Add Requirement
                            </Button>
                          </div>

                          {/* Skills */}
                          <div>
                            <Label className="text-blue-700">Skills</Label>
                            {newJob.skills.map((skill, index) => (
                              <div key={index} className="flex items-center gap-2 mt-2">
                                <Input
                                  value={skill}
                                  onChange={(e) => handleArrayFieldChange("skills", index, e.target.value)}
                                  placeholder={`Skill ${index + 1}`}
                                  className="border-blue-200 focus:border-blue-400"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => removeArrayItem("skills", index)}
                                  className="border-blue-200 text-blue-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2 border-blue-200 text-blue-700"
                              onClick={() => addArrayItem("skills")}
                            >
                              Add Skill
                            </Button>
                          </div>

                          {/* Benefits */}
                          <div>
                            <Label className="text-blue-700">Benefits</Label>
                            {newJob.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center gap-2 mt-2">
                                <Input
                                  value={benefit}
                                  onChange={(e) => handleArrayFieldChange("benefits", index, e.target.value)}
                                  placeholder={`Benefit ${index + 1}`}
                                  className="border-blue-200 focus:border-blue-400"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => removeArrayItem("benefits", index)}
                                  className="border-blue-200 text-blue-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="mt-2 border-blue-200 text-blue-700"
                              onClick={() => addArrayItem("benefits")}
                            >
                              Add Benefit
                            </Button>
                          </div>

                          <div>
                            <Label htmlFor="aboutCompany" className="text-blue-700">
                              About Company
                            </Label>
                            <Textarea
                              id="aboutCompany"
                              value={newJob.aboutCompany}
                              onChange={(e) => setNewJob({ ...newJob, aboutCompany: e.target.value })}
                              required
                              className="h-24 border-blue-200 focus:border-blue-400"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="companyIndustry" className="text-blue-700">
                                Company Industry
                              </Label>
                              <Input
                                id="companyIndustry"
                                value={newJob.companyIndustry}
                                onChange={(e) => setNewJob({ ...newJob, companyIndustry: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="companySize" className="text-blue-700">
                                Company Size
                              </Label>
                              <Input
                                id="companySize"
                                value={newJob.companySize}
                                onChange={(e) => setNewJob({ ...newJob, companySize: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            {editingJob ? "Update Job" : "Add Job"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {jobs.length > 0 ? (
                    jobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex justify-between items-center p-4 bg-white border border-blue-100 rounded-lg shadow-sm"
                      >
                        <div>
                          <h3 className="font-semibold text-blue-700">{job.title}</h3>
                          <p className="text-sm text-blue-600">
                            {job.company} • {job.location}
                          </p>
                          <p className="text-sm text-blue-500 mt-1">
                            {job.salary} • Posted: {job.posted}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => editJob(job.id)}
                            className="border-blue-200 text-blue-700"
                          >
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-red-200 text-red-600"
                            onClick={() => handleDeleteJob(job.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-blue-500">
                      No jobs available. Click "Add New Job" to create one.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <Card className="border-blue-100">
              <CardHeader className="border-b border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-700">Manage Testimonials</CardTitle>
                    <CardDescription className="text-blue-600">
                      Add, edit, or remove client testimonials.
                    </CardDescription>
                  </div>
                  <Dialog open={testimonialDialogOpen} onOpenChange={setTestimonialDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                        <Plus className="mr-2 h-4 w-4" /> Add New Testimonial
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-blue-700">
                          {editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}
                        </DialogTitle>
                        <DialogDescription className="text-blue-600">
                          {editingTestimonial
                            ? "Update the testimonial details below."
                            : "Fill in the details for the new testimonial."}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleTestimonialSubmit}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name" className="text-blue-700">
                                Name
                              </Label>
                              <Input
                                id="name"
                                value={newTestimonial.name}
                                onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                            <div>
                              <Label htmlFor="position" className="text-blue-700">
                                Position
                              </Label>
                              <Input
                                id="position"
                                value={newTestimonial.position}
                                onChange={(e) => setNewTestimonial({ ...newTestimonial, position: e.target.value })}
                                required
                                className="border-blue-200 focus:border-blue-400"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="company" className="text-blue-700">
                              Company
                            </Label>
                            <Input
                              id="company"
                              value={newTestimonial.company}
                              onChange={(e) => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                              required
                              className="border-blue-200 focus:border-blue-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="content" className="text-blue-700">
                              Testimonial Content
                            </Label>
                            <Textarea
                              id="content"
                              value={newTestimonial.content}
                              onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                              required
                              className="h-24 border-blue-200 focus:border-blue-400"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            {editingTestimonial ? "Update Testimonial" : "Add Testimonial"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {testimonials.length > 0 ? (
                    testimonials.map((testimonial) => (
                      <div key={testimonial.id} className="p-4 bg-white border border-blue-100 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-blue-700">{testimonial.name}</h3>
                            <p className="text-sm text-blue-600">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => editTestimonial(testimonial.id)}
                              className="border-blue-200 text-blue-700"
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-200 text-red-600"
                              onClick={() => handleDeleteTestimonial(testimonial.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                        <p className="mt-2 text-blue-700 italic">"{testimonial.content}"</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-blue-500">
                      No testimonials available. Click "Add New Testimonial" to create one.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients">
            <Card className="border-blue-100">
              <CardHeader className="border-b border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-blue-700">Manage Clients</CardTitle>
                    <CardDescription className="text-blue-600">Add, edit, or remove client logos.</CardDescription>
                  </div>
                  <Dialog open={clientDialogOpen} onOpenChange={setClientDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center bg-blue-600 hover:bg-blue-700">
                        <Plus className="mr-2 h-4 w-4" /> Add New Client
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-blue-700">
                          {editingClient ? "Edit Client" : "Add New Client"}
                        </DialogTitle>
                        <DialogDescription className="text-blue-600">
                          {editingClient
                            ? "Update the client details below."
                            : "Fill in the details for the new client."}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleClientSubmit}>
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="clientName" className="text-blue-700">
                              Client Name
                            </Label>
                            <Input
                              id="clientName"
                              value={newClient.name}
                              onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                              required
                              className="border-blue-200 focus:border-blue-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="logoUrl" className="text-blue-700">
                              Logo URL
                            </Label>
                            <Input
                              id="logoUrl"
                              value={newClient.logo}
                              onChange={(e) => setNewClient({ ...newClient, logo: e.target.value })}
                              required
                              className="border-blue-200 focus:border-blue-400"
                            />
                            <p className="text-xs text-blue-500 mt-1">
                              For this demo, we're using placeholder images. In a real application, you would upload
                              images.
                            </p>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            {editingClient ? "Update Client" : "Add Client"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {clients.length > 0 ? (
                    clients.map((client) => (
                      <div
                        key={client.id}
                        className="p-4 bg-white border border-blue-100 rounded-lg shadow-sm flex flex-col items-center"
                      >
                        <div className="w-full flex justify-end mb-2">
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => editClient(client.id)}
                              className="border-blue-200 text-blue-700"
                            >
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-200 text-red-600"
                              onClick={() => handleDeleteClient(client.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                        <div className="h-16 flex items-center justify-center">
                          <img src={client.logo || "/placeholder.svg"} alt={client.name} className="max-h-full" />
                        </div>
                        <h3 className="mt-2 font-medium text-blue-700 text-center">{client.name}</h3>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-8 text-blue-500">
                      No clients available. Click "Add New Client" to create one.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
