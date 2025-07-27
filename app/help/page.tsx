"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, MessageCircle, Shield, Settings, Mail } from "lucide-react"
import Link from "next/link"

const kidFAQs = [
  {
    question: "How do I find kids who like the same sports as me?",
    answer:
      "Use the sports tabs on your dashboard to filter by specific sports like basketball, soccer, or tennis. You can also use the search bar to look for specific sports or activities!",
  },
  {
    question: "What should I do if someone is being mean to me?",
    answer:
      "Click the 🚩 Report button on their profile right away. Also tell your parent or guardian immediately. We take safety very seriously and will investigate any reports.",
  },
  {
    question: "Can I change my favorite sports later?",
    answer:
      "Yes! Ask your parent to help you update your sports preferences in your profile settings. You can add new sports or remove ones you're not interested in anymore.",
  },
  {
    question: "Why do I need my parent's permission for everything?",
    answer:
      "We want to keep you safe! Your parent helps make sure all your connections are with real kids who want to play sports safely. It's like having a safety buddy online.",
  },
  {
    question: "How do I send a message to a friend?",
    answer:
      "Click on their profile and choose from our safe message options like 'Want to play soccer this Saturday?' or 'Let's meet at the playground!' You can also use fun emojis!",
  },
]

const parentFAQs = [
  {
    question: "How do you verify that profiles are real children?",
    answer:
      "We require parent email verification for all accounts. Parents must approve profile photos and provide consent before any account becomes active. Our moderation team also reviews all profiles manually.",
  },
  {
    question: "What information can other users see about my child?",
    answer:
      "Other users can only see your child's first name, age range (6-8, 9-11, 12-14), favorite sports, and profile photo (if you approve one). No personal information like last name, address, phone number, or school is ever shared.",
  },
  {
    question: "How can I monitor my child's interactions?",
    answer:
      "Your parent dashboard shows all friend requests, approved connections, messages sent/received, and activity history. You receive notifications for all interactions and can approve or decline any connection requests.",
  },
  {
    question: "What happens if I report inappropriate behavior?",
    answer:
      "Our moderation team investigates all reports within 24 hours. We may temporarily suspend accounts during investigation and permanently ban users who violate our safety guidelines. You'll receive updates on the status of your report.",
  },
  {
    question: "Can I delete my child's account and data?",
    answer:
      "Yes, you can delete your child's account at any time from the parent dashboard. All data will be permanently removed within 30 days, in compliance with COPPA and GDPR regulations.",
  },
]

export default function HelpPage() {
  const [contactForm, setContactForm] = useState({
    category: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to support
    alert("Thank you for contacting us! We'll get back to you within 24 hours.")
    setContactForm({ category: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg">⚽</span>
              </div>
              <span className="text-white font-bold">KidPlay Sports</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Help & Support 🤝</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        <Tabs defaultValue="kids" className="space-y-8">
          <TabsList className="bg-white/10 backdrop-blur-sm border-white/20 grid w-full grid-cols-3">
            <TabsTrigger value="kids" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              👶 For Kids
            </TabsTrigger>
            <TabsTrigger value="parents" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              👨‍👩‍👧‍👦 For Parents
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              📧 Contact Us
            </TabsTrigger>
          </TabsList>

          {/* Kids FAQ */}
          <TabsContent value="kids">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Questions from Kids 👶</CardTitle>
                <p className="text-gray-600">Common questions about using KidPlay Sports safely</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {kidFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`kid-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 font-bold">{index + 1}</span>
                          </div>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="ml-11 text-gray-700 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                  <h3 className="font-bold text-blue-800 mb-2">Still need help? 🤔</h3>
                  <p className="text-blue-700 mb-4">Ask your parent to contact our support team!</p>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get More Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parents FAQ */}
          <TabsContent value="parents">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Parent Resources 👨‍👩‍👧‍👦</CardTitle>
                <p className="text-gray-600">Everything you need to know about keeping your child safe</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {parentFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`parent-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-bold">{index + 1}</span>
                          </div>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="ml-11 text-gray-700 pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Quick Links */}
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4 text-center">
                      <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <h3 className="font-bold mb-2">Safety Guidelines</h3>
                      <p className="text-sm text-gray-600 mb-3">Review our comprehensive safety policies</p>
                      <Link href="/safety">
                        <Button size="sm" variant="outline">
                          View Guidelines
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4 text-center">
                      <Settings className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-bold mb-2">Parent Dashboard</h3>
                      <p className="text-sm text-gray-600 mb-3">Monitor and control your child's account</p>
                      <Link href="/parent-dashboard">
                        <Button size="sm" variant="outline">
                          Open Dashboard
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Form */}
          <TabsContent value="contact">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Our Support Team 📧</CardTitle>
                <p className="text-gray-600">
                  We're here to help! Send us a message and we'll respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div>
                    <Label htmlFor="category">What do you need help with?</Label>
                    <select
                      id="category"
                      value={contactForm.category}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, category: e.target.value }))}
                      className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="safety">Safety Concern</option>
                      <option value="technical">Technical Issue</option>
                      <option value="account">Account Management</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="email">Your Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="parent@example.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                      placeholder="Brief description of your question"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Please provide as much detail as possible..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-bold text-yellow-800 mb-2">⚠️ For Urgent Safety Issues</h4>
                    <p className="text-yellow-700 text-sm">
                      If you need immediate assistance with a safety concern, please contact local authorities first,
                      then email us at <strong>safety@kidplaysports.com</strong>
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Emergency Contact Info */}
                <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-center">
                  <h3 className="font-bold text-red-800 mb-2">Emergency Contact</h3>
                  <p className="text-red-700 mb-4">For immediate safety concerns, contact us at:</p>
                  <div className="space-y-2">
                    <p className="font-mono text-red-800">safety@kidplaysports.com</p>
                    <Badge className="bg-red-100 text-red-800">Response within 2 hours</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
