import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Heart } from "lucide-react"
import Link from "next/link"
import { ThemePicker } from "@/components/theme-picker"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500">
      {/* Theme Picker */}
      <div className="absolute top-4 right-4 z-50">
        <ThemePicker />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">⚽</span>
            </div>
            <h1 className="text-2xl font-bold text-white">KidPlay Sports</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/safety" className="text-white hover:text-yellow-200 transition-colors">
              Safety First
            </Link>
            <Link href="/help" className="text-white hover:text-yellow-200 transition-colors">
              Help
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="inline-flex space-x-4 mb-6">
              <div className="animate-bounce">⚽</div>
              <div className="animate-bounce delay-100">🏀</div>
              <div className="animate-bounce delay-200">🏸</div>
              <div className="animate-bounce delay-300">🏐</div>
              <div className="animate-bounce delay-400">🏓</div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Play Sports.
            <br />
            Make Friends.
            <br />
            <span className="text-yellow-300">Stay Safe.</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Connect with kids nearby who love the same sports as you! Safe, fun, and parent-approved connections.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup/kid">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                🟢 Join as Kid
              </Button>
            </Link>
            <Link href="/parent-dashboard">
              <Button
                size="lg"
                variant="outline"
                className="bg-blue-500 hover:bg-blue-600 text-white border-white px-8 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                🔵 Parent Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Safe Matchmaking</h3>
              <p className="text-white/80">Connect with verified kids who share your favorite sports</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Verified Profiles</h3>
              <p className="text-white/80">All profiles are parent-verified and moderated for safety</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sports Discovery</h3>
              <p className="text-white/80">Find kids who love basketball, soccer, tennis, and more!</p>
            </CardContent>
          </Card>
        </div>

        {/* Safety Badges */}
        <div className="text-center">
          <p className="text-white/80 mb-4">Trusted by parents, loved by kids</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🛡️ COPPA Compliant
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🔒 GDPR Protected
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              👨‍👩‍👧‍👦 Parent Approved
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🏆 Kid Safe Certified
            </Badge>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-white/60">
        <p>&copy; 2024 KidPlay Sports. Making sports connections safe and fun for kids.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/safety" className="hover:text-white transition-colors">
            Safety Guidelines
          </Link>
        </div>
      </footer>
    </div>
  )
}
