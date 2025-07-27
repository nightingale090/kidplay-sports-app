"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Shield, Users, Bell, Settings, Eye, CheckCircle, XCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

const mockConnections = [
  {
    id: 1,
    name: "Sam",
    age: "9-11",
    sports: ["basketball", "soccer"],
    status: "approved",
    connectedDate: "2024-01-15",
    lastActivity: "2 hours ago",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Jordan",
    age: "9-11",
    sports: ["soccer", "tennis"],
    status: "pending",
    requestDate: "2024-01-20",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

const mockNotifications = [
  {
    id: 1,
    type: "friend_request",
    message: "Alex received a friend request from Sam",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    type: "message",
    message: "Alex sent a message: 'Want to play soccer this Saturday?'",
    time: "1 day ago",
    status: "approved",
  },
  {
    id: 3,
    type: "activity",
    message: "Alex viewed Jordan's profile",
    time: "2 days ago",
    status: "info",
  },
]

export default function ParentDashboard() {
  const [settings, setSettings] = useState({
    allowNewRequests: true,
    requireApproval: true,
    locationSharing: false,
    emailNotifications: true,
    smsNotifications: false,
  })

  const handleApprove = (connectionId: number) => {
    // In a real app, this would update the database
    console.log("Approved connection:", connectionId)
  }

  const handleDecline = (connectionId: number) => {
    // In a real app, this would update the database
    console.log("Declined connection:", connectionId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg">⚽</span>
                </div>
                <span className="text-white font-bold">KidPlay Sports</span>
              </Link>
              <Badge className="bg-purple-500 text-white">Parent Dashboard</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Bell className="w-4 h-4 mr-2" />
                Alerts (2)
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to Alex's Parent Dashboard 👨‍👩‍👧‍👦</h1>
          <p className="text-white/80">
            Monitor your child's connections and keep them safe while they make new sports friends.
          </p>
        </div>

        <Tabs defaultValue="connections" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger
              value="connections"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
            >
              <Users className="w-4 h-4 mr-2" />
              Connections
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              <Eye className="w-4 h-4 mr-2" />
              Activity
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Connections Tab */}
          <TabsContent value="connections">
            <div className="grid gap-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Alex's Connections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockConnections.map((connection) => (
                      <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={connection.avatar || "/placeholder.svg"} alt={connection.name} />
                            <AvatarFallback>{connection.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{connection.name}</h4>
                            <p className="text-sm text-gray-600">Age {connection.age}</p>
                            <div className="flex gap-1 mt-1">
                              {connection.sports.map((sport) => (
                                <Badge key={sport} variant="secondary" className="text-xs">
                                  {sport}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          {connection.status === "approved" ? (
                            <div>
                              <Badge className="bg-green-100 text-green-800 mb-2">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Approved
                              </Badge>
                              <p className="text-xs text-gray-500">Connected {connection.connectedDate}</p>
                              <p className="text-xs text-gray-500">Last active: {connection.lastActivity}</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <Badge className="bg-yellow-100 text-yellow-800 mb-2">Pending Approval</Badge>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleApprove(connection.id)}
                                  className="bg-green-500 hover:bg-green-600"
                                >
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Approve
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => handleDecline(connection.id)}>
                                  <XCircle className="w-3 h-3 mr-1" />
                                  Decline
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Message Sent</p>
                        <p className="text-sm text-gray-600">Alex sent: "Want to play soccer this Saturday?"</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">2 hours ago</p>
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Profile Viewed</p>
                        <p className="text-sm text-gray-600">Alex viewed Jordan's profile</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">Friend Request Received</p>
                        <p className="text-sm text-gray-600">Sam wants to connect with Alex</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">2 days ago</p>
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notifications & Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            notification.status === "pending"
                              ? "bg-yellow-400"
                              : notification.status === "approved"
                                ? "bg-green-400"
                                : "bg-blue-400"
                          }`}
                        />
                        <div>
                          <p className="font-medium">{notification.message}</p>
                          <p className="text-sm text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                      {notification.status === "pending" && <Button size="sm">Review</Button>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Privacy & Safety Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allow-requests" className="font-medium">
                        Allow New Friend Requests
                      </Label>
                      <p className="text-sm text-gray-600">Let other kids send friend requests to Alex</p>
                    </div>
                    <Switch
                      id="allow-requests"
                      checked={settings.allowNewRequests}
                      onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, allowNewRequests: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="require-approval" className="font-medium">
                        Require Parent Approval
                      </Label>
                      <p className="text-sm text-gray-600">All connections must be approved by you first</p>
                    </div>
                    <Switch
                      id="require-approval"
                      checked={settings.requireApproval}
                      onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, requireApproval: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="location-sharing" className="font-medium">
                        Location Sharing
                      </Label>
                      <p className="text-sm text-gray-600">Share general area (city/district) with connections</p>
                    </div>
                    <Switch
                      id="location-sharing"
                      checked={settings.locationSharing}
                      onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, locationSharing: checked }))}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications" className="font-medium">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-gray-600">Receive updates via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, emailNotifications: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sms-notifications" className="font-medium">
                        SMS Notifications
                      </Label>
                      <p className="text-sm text-gray-600">Receive urgent alerts via text message</p>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={settings.smsNotifications}
                      onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, smsNotifications: checked }))}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Account Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Alex's Data
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Temporarily Disable Account
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Delete Account Permanently
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
