'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Clock, Mail, Phone, MapPin } from "lucide-react"

export function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
          <CardHeader className="pb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Settings className="h-10 w-10 text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <Badge variant="secondary" className="mb-4 mx-auto w-fit">Wartungsarbeiten</Badge>
            <CardTitle className="text-4xl font-bold text-gray-900 mb-4">
              Website wird überarbeitet
            </CardTitle>
            <CardDescription className="text-xl text-gray-600">
              Wir arbeiten gerade an Verbesserungen für Sie.
              Die Website wird in Kürze wieder verfügbar sein.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Voraussichtliche Dauer: N/A</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Dringende Anfragen? Kontaktieren Sie uns direkt:
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Telefon</p>
                      <p className="text-blue-600 font-semibold text-sm mt-1">
                        +49 (0) 1577 7598945
                      </p>
                    </div>
                  </Card>

                  <Card className="p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">E-Mail</p>
                      <p className="text-purple-600 font-semibold text-sm mt-1">
                        j.herrlich@esherrllich.de
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Seite neu laden
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Vielen Dank für Ihr Verständnis!<br />
                  <span className="font-medium">Eventservice Herrlich Team</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
