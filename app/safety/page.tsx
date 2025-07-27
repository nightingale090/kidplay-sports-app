import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, MessageCircle, Eye, AlertTriangle, Phone } from "lucide-react"
import Link from "next/link"

const safetyRules = [
  {
    icon: "🚫",
    title: "Don't share personal info",
    description: "Never share your phone number, home address, or school name with other kids.",
    color: "bg-red-50 border-red-200",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Ask your parent first",
    description: "Always check with your parent before meeting up with a new friend.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: "🚩",
    title: "Report bad behavior",
    description: "If someone makes you uncomfortable, use the report button right away.",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    icon: "👥",
    title: "Meet in public places",
    description: "Only meet friends at playgrounds, parks, or other safe public places.",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: "💬",
    title: "Use safe messages",
    description: "Stick to the pre-written messages we provide. Don't share personal details.",
    color: "bg-purple-50 border-purple-200",
  },
  {
    icon: "🔒",
    title: "Keep your account private",
    description: "Only accept friend requests from kids you want to play sports with.",
    color: "bg-indigo-50 border-indigo-200",
  },
]

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-purple-500">
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Stay Safe While Playing! 🛡️</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            These simple rules help keep you safe while making new sports friends online.
          </p>
        </div>

        {/* Safety Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safetyRules.map((rule, index) => (
            <Card key={index} className={`${rule.color} hover:scale-105 transition-transform`}>
              <CardHeader className="text-center pb-3">
                <div className="text-4xl mb-2">{rule.icon}</div>
                <CardTitle className="text-lg">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">{rule.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Safety Quiz */}
        <Card className="bg-white/90 backdrop-blur-sm mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🧠 Safety Quiz</CardTitle>
            <p className="text-gray-600">Test what you've learned!</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold mb-3">Question 1: What should you do if someone asks for your phone number?</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left bg-transparent">
                  A) Give it to them right away
                </Button>
                <Button variant="outline" className="w-full justify-start text-left bg-green-100 border-green-300">
                  B) Say no and tell your parent ✅
                </Button>
                <Button variant="outline" className="w-full justify-start text-left bg-transparent">
                  C) Ask them why they need it
                </Button>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-bold mb-3">Question 2: Where is the best place to meet a new friend?</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left bg-transparent">
                  A) At your house
                </Button>
                <Button variant="outline" className="w-full justify-start text-left bg-green-100 border-green-300">
                  B) At a public playground with your parent ✅
                </Button>
                <Button variant="outline" className="w-full justify-start text-left bg-transparent">
                  C) At their house
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200 mb-8">
          <CardHeader className="text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-red-800">Need Help Right Away?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-red-700">
              If someone makes you feel scared or uncomfortable, tell a trusted adult immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Tell Your Parent
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                Report to KidPlay
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Parent Resources */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">👨‍👩‍👧‍👦 For Parents</CardTitle>
            <p className="text-gray-600">Resources to help keep your child safe</p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Safety Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  All profiles are verified by parents
                </li>
                <li className="flex items-center">
                  <Eye className="w-4 h-4 mr-2 text-blue-500" />
                  Monitor all your child's interactions
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-purple-500" />
                  Pre-approved safe messaging only
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-orange-500" />
                  Approve all friend connections
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">Quick Actions</h3>
              <div className="space-y-2">
                <Link href="/parent-dashboard">
                  <Button className="w-full">Access Parent Dashboard</Button>
                </Link>
                <Link href="/help">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Help Center
                  </Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Safety Guide
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
