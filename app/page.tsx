import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  HeartPulse,
  Stethoscope,
  Microscope,
  Thermometer,
  Syringe,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-white to-teal-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Trusted by 500+ Medical Institutions
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your One-Stop Shop for Medical Equipment in Gujarat
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Disrupting local dealer monopolies with competitive pricing, wide product selection, and reliable
                service.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/b2b">B2B Portal</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Medical equipment showcase"
                width={1280}
                height={720}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Why Choose Pharma Mart
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Comprehensive Medical Equipment Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We provide a complete ecosystem for all your medical equipment needs with competitive pricing and
                reliable service.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  All products are certified and meet industry standards for quality and safety.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Multiple subscription plans with scheduled deliveries across Gujarat.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Competitive Pricing</h3>
                <p className="text-muted-foreground">Transparent pricing with bulk discounts and competitive rates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Product Categories
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Explore Our Wide Range of Medical Equipment
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                From surgical instruments to diagnostic tools, we have everything you need.
              </p>
            </div>
          </div>
          <Tabs defaultValue="surgical" className="mt-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="surgical">Surgical</TabsTrigger>
                <TabsTrigger value="diagnostic">Diagnostic</TabsTrigger>
                <TabsTrigger value="supplies">Supplies</TabsTrigger>
                <TabsTrigger value="furniture">Furniture</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="surgical" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/products/category/surgical-instruments" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Surgical Instruments"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Surgical Instruments</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/anesthesia-equipment" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Anesthesia Equipment"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Anesthesia Equipment</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/surgical-lights" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Surgical Lights"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Surgical Lights</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/sterilization-equipment" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Sterilization Equipment"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Sterilization Equipment</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="diagnostic" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/products/category/imaging-systems" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Imaging Systems"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Imaging Systems</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/patient-monitors" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Patient Monitors"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Patient Monitors</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/laboratory-equipment" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Laboratory Equipment"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Laboratory Equipment</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/ecg-machines" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="ECG Machines"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">ECG Machines</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="supplies" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/products/category/disposables" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Disposables"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Disposables</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/wound-care" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Wound Care"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Wound Care</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/syringes-needles" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Syringes & Needles"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Syringes & Needles</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/ppe" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="PPE"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">PPE</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="furniture" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/products/category/hospital-beds" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Hospital Beds"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Hospital Beds</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/examination-tables" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Examination Tables"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Examination Tables</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/medical-carts" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Medical Carts"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Medical Carts</h3>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/products/category/cabinets-storage" className="group">
                  <Card className="overflow-hidden bg-background hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Cabinets & Storage"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">Cabinets & Storage</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Medical Specialties
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Equipment for Every Medical Specialty</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We cater to all medical specialties with specialized equipment and supplies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mt-12">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Cardiology</h3>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">General Practice</h3>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Laboratory</h3>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Pediatrics</h3>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Syringe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">Surgery</h3>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/specialties">
                View All Specialties <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Medical Equipment Procurement?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join 500+ medical institutions across Gujarat who trust Pharma Mart for their equipment needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

