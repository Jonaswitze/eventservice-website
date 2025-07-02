import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Volume2, Lightbulb, Video, Home, Utensils, Zap, Droplets } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Volume2,
      title: "Tontechnik",
      description: "Professionelle Beschallungsanlagen, Mikrofone und Audio-Equipment für jede Veranstaltungsgröße",
      features: ["PA-Anlagen", "Wireless-Mikrofone", "Mischpulte", "Monitoring"]
    },
    {
      icon: Lightbulb,
      title: "Lichttechnik",
      description: "Atmosphäre durch Licht - von Bühnenscheinwerfern bis zur LED-Beleuchtung",
      features: ["LED-Scheinwerfer", "Moving Lights", "Ambientebeleuchtung", "Lichtsteuerung"]
    },
    {
      icon: Video,
      title: "Videotechnik",
      description: "Professionelle Video- und Projektionslösungen für beeindruckende Präsentationen",
      features: ["LED-Wände", "Projektoren", "Kameras", "Live-Streaming"]
    },
    {
      icon: Home,
      title: "Zelte & Pavillons",
      description: "Wetterschutz und stilvolle Überdachungen für Outdoor-Events",
      features: ["Festzelte", "Pavillons", "Pagodenzelte", "Seitenwände"]
    },
    {
      icon: Utensils,
      title: "Geschirr & Besteck",
      description: "Hochwertiges Geschirr, Besteck und Gläser für jeden Anlass",
      features: ["Porzellan", "Besteck-Sets", "Gläser", "Servierplatten"]
    },
    {
      icon: Zap,
      title: "Strom & Energie",
      description: "Zuverlässige Stromversorgung für alle Ihre Event-Anforderungen",
      features: ["Generatoren", "Stromverteilung", "CEE-Anschlüsse", "Absicherung"]
    },
    {
      icon: Droplets,
      title: "Wasser & Sanitär",
      description: "Wasserversorgung und sanitäre Anlagen für Outdoor-Veranstaltungen",
      features: ["Wassertanks", "Mobile Toiletten", "Handwaschstationen", "Abwasser"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Volume2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EventService Pro</h1>
                <p className="text-sm text-gray-600">Ihr Partner für perfekte Events</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#references" className="text-gray-600 hover:text-blue-600 transition-colors">Referenzen</a>
              <a href="#partners" className="text-gray-600 hover:text-blue-600 transition-colors">Partner</a>
              <a href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">Team</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
              <Button>Anfrage stellen</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Professioneller Eventservice</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ihr Event,
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> perfekt inszeniert</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Von der Technik bis zur Ausstattung - wir sorgen dafür, dass Ihre Veranstaltung
              ein unvergessliches Erlebnis wird. Professionell, zuverlässig und mit Leidenschaft für Details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Kostenlose Beratung
              </Button>
              <Button size="lg" variant="outline">
                Services ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Unsere Services</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Alles aus einer Hand</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Komplette Event-Ausstattung und Technik für Ihre perfekte Veranstaltung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Über uns</Badge>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Erfahrung trifft Innovation
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Seit Jahren sind wir Ihr zuverlässiger Partner für erfolgreiche Events.
                Von intimen Feiern bis hin zu Großveranstaltungen - wir haben die Erfahrung
                und das Equipment für jeden Anlass.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Events erfolgreich umgesetzt</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4">Warum EventService Pro?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Professionelle Beratung</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Modernste Technik</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Zuverlässiger Service</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Faire Preise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Unsere Referenzen</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Erfolgreiche Events sprechen für sich</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ein Blick auf unsere vergangenen Projekte zeigt die Vielfalt und Qualität
              unserer Event-Ausstattung und technischen Umsetzungen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                <img
                  src="https://thumbs.dreamstime.com/b/outdoor-stage-setup-concert-event-lighting-sound-system-view-featuring-covered-platform-professional-ready-338486680.jpg"
                  alt="Outdoor Festival Bühne"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Outdoor Festival 2024</h4>
                <p className="text-gray-600 mb-4">
                  Komplette Bühnentechnik für 5.000 Besucher mit Lichttechnik,
                  Beschallung und LED-Screens.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Tontechnik</Badge>
                  <Badge variant="outline" className="text-xs">Lichttechnik</Badge>
                  <Badge variant="outline" className="text-xs">Bühne</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                <img
                  src="https://www.ldsystems.com/wp-content/uploads/2021/09/LD-Systems-Live-Event-Pro-Wrestling-1.jpg"
                  alt="Indoor Arena Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Arena Sportveranstaltung</h4>
                <p className="text-gray-600 mb-4">
                  Professionelle Arena-Beschallung mit LED-Wänden und
                  kompletter Lichttechnik für Live-Übertragung.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">LED-Wände</Badge>
                  <Badge variant="outline" className="text-xs">Live-Streaming</Badge>
                  <Badge variant="outline" className="text-xs">Lichttechnik</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 relative overflow-hidden">
                <img
                  src="https://thumbs.dreamstime.com/b/large-indoor-outdoor-concert-stage-large-indoor-outdoor-concert-stage-professional-sound-lighting-equipment-designed-364269452.jpg"
                  alt="Konzert Bühne Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Konzert-Festival</h4>
                <p className="text-gray-600 mb-4">
                  Große Outdoor-Bühne mit kompletter Infrastruktur,
                  Stromversorgung und Zeltüberdachung.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Bühnenaufbau</Badge>
                  <Badge variant="outline" className="text-xs">Stromversorgung</Badge>
                  <Badge variant="outline" className="text-xs">Zelte</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 relative overflow-hidden">
                <img
                  src="https://thumbs.dreamstime.com/b/stage-lighting-setup-circular-truss-beams-dramatic-illumination-empty-performance-area-professional-sound-equipment-smoke-356044219.jpg"
                  alt="Theater Lichttechnik"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Theater Produktion</h4>
                <p className="text-gray-600 mb-4">
                  Atmosphärische Lichttechnik mit Moving Lights und
                  Nebeleffekten für Theateraufführung.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Moving Lights</Badge>
                  <Badge variant="outline" className="text-xs">Effekte</Badge>
                  <Badge variant="outline" className="text-xs">Theater</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1265600574/photo/installation-of-professional-sound-light-led-panel-video-and-stage-equipment-for-a-concert.jpg?s=1024x1024&w=is&k=20&c=zrcN1p5OpM5rewOWQsnK8l0sMRhwmyYtTVVHbwT_j3s="
                  alt="Equipment Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Corporate Event</h4>
                <p className="text-gray-600 mb-4">
                  Professionelle Installation von Audio-, Video- und
                  Lichttechnik für Firmenveranstaltung.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Corporate</Badge>
                  <Badge variant="outline" className="text-xs">Videotechnik</Badge>
                  <Badge variant="outline" className="text-xs">Installation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-teal-600 to-green-600 relative overflow-hidden">
                <img
                  src="https://carolinassl.com/wp-content/uploads/2024/09/mobile-stage-sl100-rental-stageline-charlotte-nc-carolina-sound-stage-lighting-pro-audio-corporate-concert-festival-event-production-media.jpg-1024x533.jpg"
                  alt="Mobile Bühne"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">Mobile Event-Bühne</h4>
                <p className="text-gray-600 mb-4">
                  Flexible mobile Bühne mit integrierter Technik für
                  Outdoor-Events und Festivals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Mobile Bühne</Badge>
                  <Badge variant="outline" className="text-xs">Outdoor</Badge>
                  <Badge variant="outline" className="text-xs">Festival</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Unsere Partner</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Starke Partnerschaften für bessere Events</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Durch unsere Kooperationen mit führenden Unternehmen der Branche können wir
              Ihnen stets die neueste Technik und beste Qualität bieten.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <Card className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Volume2 className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">AudioTech Pro</p>
              </div>
            </Card>

            <Card className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">LightVision</p>
              </div>
            </Card>

            <Card className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">VideoStream GmbH</p>
              </div>
            </Card>

            <Card className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">ZeltProfi</p>
              </div>
            </Card>

            <Card className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">PowerTech</p>
              </div>
            </Card>

            <Card className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-100 hover:border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Catering Plus</p>
              </div>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Badge className="text-white bg-transparent">T</Badge>
              </div>
              <h4 className="text-xl font-semibold mb-3">Technologie-Partner</h4>
              <p className="text-gray-600">
                Führende Hersteller von Audio-, Video- und Lichttechnik für modernste Ausstattung.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Badge className="text-white bg-transparent">V</Badge>
              </div>
              <h4 className="text-xl font-semibold mb-3">Veranstaltungsorte</h4>
              <p className="text-gray-600">
                Kooperationen mit Premium-Venues und Event-Locations in der gesamten Region.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Badge className="text-white bg-transparent">S</Badge>
              </div>
              <h4 className="text-xl font-semibold mb-3">Service-Partner</h4>
              <p className="text-gray-600">
                Zuverlässige Partner für Catering, Dekoration und zusätzliche Event-Services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Unser Team</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Die Experten hinter Ihrem Event</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lernen Sie unser erfahrenes Team kennen, das mit Leidenschaft und Expertise
              für den Erfolg Ihrer Veranstaltung sorgt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                MK
              </div>
              <h4 className="text-xl font-semibold mb-2">Michael Klang</h4>
              <p className="text-blue-600 font-medium mb-3">Geschäftsführer & Tontechnik</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                15 Jahre Erfahrung in der Veranstaltungstechnik. Spezialist für
                Beschallungsanlagen und Live-Events aller Größenordnungen.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                SL
              </div>
              <h4 className="text-xl font-semibold mb-2">Sarah Licht</h4>
              <p className="text-blue-600 font-medium mb-3">Lichttechnik & Design</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kreative Lichtdesignerin mit Fokus auf atmosphärische Beleuchtung
                und innovative LED-Installationen für unvergessliche Momente.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                TW
              </div>
              <h4 className="text-xl font-semibold mb-2">Thomas Weber</h4>
              <p className="text-blue-600 font-medium mb-3">Videotechnik & Streaming</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experte für Projektionslösungen und Live-Streaming. Sorgt für
                perfekte Übertragungen und beeindruckende Video-Präsentationen.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                JH
              </div>
              <h4 className="text-xl font-semibold mb-2">Julia Haus</h4>
              <p className="text-blue-600 font-medium mb-3">Event-Ausstattung</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Organisationstalent für Zelte, Möbel und Catering-Equipment.
                Plant jedes Detail für eine perfekte Veranstaltungsausstattung.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                MS
              </div>
              <h4 className="text-xl font-semibold mb-2">Marco Strom</h4>
              <p className="text-blue-600 font-medium mb-3">Energie & Infrastruktur</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Elektrotechnik-Spezialist für sichere Stromversorgung und
                Infrastruktur. Sorgt für zuverlässige Energieversorgung bei jedem Event.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-600 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                AL
              </div>
              <h4 className="text-xl font-semibold mb-2">Anna Logistik</h4>
              <p className="text-blue-600 font-medium mb-3">Projektmanagement</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Koordiniert alle Bereiche und sorgt für reibungslose Abläufe.
                Ihre Ansprechpartnerin für Planung und Projektmanagement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Kontakt</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Lassen Sie uns sprechen</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot?
              Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Telefon</h4>
              <p className="text-gray-600 mb-4">Rufen Sie uns an für eine schnelle Beratung</p>
              <p className="text-blue-600 font-semibold">+49 (0) 123 456 789</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">E-Mail</h4>
              <p className="text-gray-600 mb-4">Schreiben Sie uns Ihre Anfrage</p>
              <p className="text-blue-600 font-semibold">info@eventservice-pro.de</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Standort</h4>
              <p className="text-gray-600 mb-4">Besuchen Sie uns vor Ort</p>
              <p className="text-blue-600 font-semibold">
                Musterstraße 123<br />
                12345 Musterstadt
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Jetzt Beratungstermin vereinbaren
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Volume2 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold">EventService Pro</span>
              </div>
              <p className="text-gray-400">
                Ihr zuverlässiger Partner für unvergessliche Events.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Tontechnik</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Lichttechnik</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Videotechnik</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Eventausstattung</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Unternehmen</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#references" className="hover:text-white transition-colors">Referenzen</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Partner</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontakt</h5>
              <ul className="space-y-2 text-gray-400">
                <li>+49 (0) 123 456 789</li>
                <li>info@eventservice-pro.de</li>
                <li>Musterstraße 123</li>
                <li>12345 Musterstadt</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EventService Pro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
