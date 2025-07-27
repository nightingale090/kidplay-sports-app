"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Users, Settings, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

const mockKids = [
  {
    id: 1,
    name: "Alex",
    age: "9-11",
    sports: ["soccer", "basketball"],
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["Verified", "Same School"],
    lastActive: "2 hours ago",
    commonSports: 2,
  },
  {
    id: 2,
    name: "Sam",
    age: "9-11",
    sports: ["basketball", "tennis"],
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["Verified", "Nearby"],
    lastActive: "1 day ago",
    commonSports: 1,
  },
  {
    id: 3,
    name: "Jordan",
    age: "9-11",
    sports: ["soccer", "swimming"],
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["Verified", "New User"],
    lastActive: "3 hours ago",
    commonSports: 1,
  },
]

const sportsEmojis: { [key: string]: string } = {
  soccer: "⚽",
  basketball: "🏀",
  tennis: "🎾",
  swimming: "🏊",
  badminton: "🏸",
  volleyball: "🏐",
}

export default function KidDashboard() {
  const [selectedSport, setSelectedSport] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredKids = mockKids.filter((kid) => {
    const matchesSport = selectedSport === "all" || kid.sports.includes(selectedSport)
    const matchesSearch = kid.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSport && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-purple-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg">⚽</span>
                </div>
                <span className="text-white font-bold">KidPlay</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Hi Alex, ready to play? 🎉</h1>
          <p className="text-white/80">Find kids nearby who love the same sports as you!</p>
        </div>

        {/* Sports Navigation */}
        <Tabs value={selectedSport} onValueChange={setSelectedSport} className="mb-8">
          <TabsList className="bg-white/10 backdrop-blur-sm border-white/20 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              🧩 All Sports
            </TabsTrigger>
            <TabsTrigger
              value="basketball"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
            >
              🏀 Basketball
            </TabsTrigger>
            <TabsTrigger value="soccer" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              ⚽ Soccer
            </TabsTrigger>
            <TabsTrigger value="tennis" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              🎾 Tennis
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/90 backdrop-blur-sm"
            />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              🏙️ My City
            </Button>
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              🎯 My Age
            </Button>
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              👋 New Users
            </Button>
          </div>
        </div>

        {/* Suggested Players */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Kids Near You
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKids.map((kid) => (
              <Card key={kid.id} className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-16 h-16 border-4 border-purple-200">
                      <AvatarImage src={kid.avatar || "/placeholder.svg"} alt={kid.name} />
                      <AvatarFallback className="bg-purple-100 text-purple-600 text-xl">{kid.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{kid.name}</CardTitle>
                      <p className="text-sm text-gray-600">Age {kid.age}</p>
                      <p className="text-xs text-gray-500">{kid.lastActive}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Sports */}
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Loves to play:</p>
                    <div className="flex flex-wrap gap-1">
                      {kid.sports.map((sport) => (
                        <Badge key={sport} variant="secondary" className="text-xs">
                          {sportsEmojis[sport]} {sport}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1">
                    {kid.badges.map((badge) => (
                      <Badge key={badge} variant="outline" className="text-xs">
                        {badge === "Verified" && "✅"}
                        {badge === "Same School" && "🏫"}
                        {badge === "Nearby" && "📍"}
                        {badge === "New User" && "✨"}
                        {" " + badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Common Sports */}
                  {kid.commonSports > 0 && (
                    <div className="bg-green-50 rounded-lg p-2">
                      <p className="text-sm text-green-700 font-medium">
                        🎯 {kid.commonSports} sport{kid.commonSports !== 1 ? "s" : ""} in common!
                      </p>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                    👋 Send Friend Request
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">My Friends</h3>
              <p className="text-white/80 mb-4">See your current sports buddies</p>
              <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                View Friends
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Find Playgrounds</h3>
              <p className="text-white/80 mb-4">Discover safe places to play nearby</p>
              <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Explore Places
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
