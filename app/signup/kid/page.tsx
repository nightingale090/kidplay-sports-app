"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Upload, Mail, Phone } from "lucide-react"
import Link from "next/link"

const sports = [
  { emoji: "⚽", name: "Soccer", id: "soccer" },
  { emoji: "🏀", name: "Basketball", id: "basketball" },
  { emoji: "🏸", name: "Badminton", id: "badminton" },
  { emoji: "🏐", name: "Volleyball", id: "volleyball" },
  { emoji: "🏓", name: "Table Tennis", id: "tabletennis" },
  { emoji: "🎾", name: "Tennis", id: "tennis" },
  { emoji: "🏈", name: "Football", id: "football" },
  { emoji: "⚾", name: "Baseball", id: "baseball" },
  { emoji: "🏊", name: "Swimming", id: "swimming" },
  { emoji: "🚴", name: "Cycling", id: "cycling" },
  { emoji: "🏃", name: "Running", id: "running" },
  { emoji: "🧗", name: "Climbing", id: "climbing" },
]

const ageRanges = [
  { label: "6-8 years", value: "6-8" },
  { label: "9-11 years", value: "9-11" },
  { label: "12-14 years", value: "12-14" },
]

export default function KidSignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    ageRange: "",
    selectedSports: [] as string[],
    profilePhoto: null as File | null,
    parentContact: "",
    contactMethod: "email" as "email" | "phone",
  })

  const handleSportToggle = (sportId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSports: prev.selectedSports.includes(sportId)
        ? prev.selectedSports.filter((id) => id !== sportId)
        : [...prev.selectedSports, sportId],
    }))
  }

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // In a real app, this would send verification email/SMS to parent
    alert("Parent verification email sent! Please check your parent's email.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500 p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-yellow-200 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Join KidPlay Sports! 🎉</h1>
          <p className="text-white/80">Let's get you set up to find sports buddies</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i <= step ? "bg-white text-purple-500" : "bg-white/30 text-white"
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="w-full bg-white/30 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {step === 1 && "Tell us about yourself! 👋"}
              {step === 2 && "What sports do you love? ⚽"}
              {step === 3 && "Add your photo (optional) 📸"}
              {step === 4 && "Parent contact info 👨‍👩‍👧‍👦"}
              {step === 5 && "Almost done! 🎊"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-lg">
                    What's your first name?
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your first name"
                    className="text-lg p-3"
                  />
                </div>
                <div>
                  <Label className="text-lg">How old are you?</Label>
                  <div className="grid grid-cols-1 gap-3 mt-2">
                    {ageRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setFormData((prev) => ({ ...prev, ageRange: range.value }))}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.ageRange === range.value
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <span className="text-lg font-medium">{range.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Sports Selection */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-gray-600">Select all the sports you enjoy playing:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {sports.map((sport) => (
                    <button
                      key={sport.id}
                      onClick={() => handleSportToggle(sport.id)}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        formData.selectedSports.includes(sport.id)
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">{sport.emoji}</div>
                      <div className="font-medium">{sport.name}</div>
                    </button>
                  ))}
                </div>
                {formData.selectedSports.length > 0 && (
                  <div className="text-center">
                    <p className="text-green-600 font-medium">
                      Great! You selected {formData.selectedSports.length} sport
                      {formData.selectedSports.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Photo Upload */}
            {step === 3 && (
              <div className="space-y-4 text-center">
                <p className="text-gray-600">
                  Adding a photo helps other kids recognize you, but it's totally optional!
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-purple-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Click to upload a photo</p>
                  <Button variant="outline">Choose Photo</Button>
                </div>
                <p className="text-sm text-gray-500">
                  📝 Note: Your parent will need to approve your photo before others can see it
                </p>
              </div>
            )}

            {/* Step 4: Parent Contact */}
            {step === 4 && (
              <div className="space-y-4">
                <p className="text-gray-600">
                  We need to get permission from your parent or guardian to create your account.
                </p>

                <div className="flex gap-2 mb-4">
                  <Button
                    variant={formData.contactMethod === "email" ? "default" : "outline"}
                    onClick={() => setFormData((prev) => ({ ...prev, contactMethod: "email" }))}
                    className="flex-1"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button
                    variant={formData.contactMethod === "phone" ? "default" : "outline"}
                    onClick={() => setFormData((prev) => ({ ...prev, contactMethod: "phone" }))}
                    className="flex-1"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Phone
                  </Button>
                </div>

                <div>
                  <Label htmlFor="parentContact" className="text-lg">
                    Parent's {formData.contactMethod === "email" ? "Email" : "Phone Number"}
                  </Label>
                  <Input
                    id="parentContact"
                    value={formData.parentContact}
                    onChange={(e) => setFormData((prev) => ({ ...prev, parentContact: e.target.value }))}
                    placeholder={formData.contactMethod === "email" ? "parent@example.com" : "+1 (555) 123-4567"}
                    type={formData.contactMethod === "email" ? "email" : "tel"}
                    className="text-lg p-3"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {step === 5 && (
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold mb-3">Review your information:</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Name:</strong> {formData.name}
                    </p>
                    <p>
                      <strong>Age:</strong> {formData.ageRange} years
                    </p>
                    <p>
                      <strong>Sports:</strong>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {formData.selectedSports.map((sportId) => {
                        const sport = sports.find((s) => s.id === sportId)
                        return (
                          <Badge key={sportId} variant="secondary">
                            {sport?.emoji} {sport?.name}
                          </Badge>
                        )
                      })}
                    </div>
                    <p>
                      <strong>Parent Contact:</strong> {formData.parentContact}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">What happens next?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-blue-700">
                    <li>We'll send a verification message to your parent</li>
                    <li>Your parent will click a link to approve your account</li>
                    <li>Once approved, you can start finding sports buddies!</li>
                  </ol>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && (!formData.name || !formData.ageRange)) ||
                    (step === 2 && formData.selectedSports.length === 0) ||
                    (step === 4 && !formData.parentContact)
                  }
                  className="flex items-center"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600">
                  Send Parent Verification 🚀
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
