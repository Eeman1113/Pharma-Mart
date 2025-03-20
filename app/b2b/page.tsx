import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Building2, Package, BadgePercent, HeadsetIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function B2BPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 via-white to-teal-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="inline-block" variant="outline">
                B2B Portal
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Specialized Solutions for Medical Dealers & Distributors
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Access wholesale pricing, bulk inventory management, and dedicated support for your medical equipment
                business.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/auth/register?type=dealer">
                    Register as Dealer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact?subject=b2b">Contact Sales Team</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="B2B medical equipment distribution"
                width={1280}
                height={720}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Why Choose Our B2B Portal
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Benefits for Medical Dealers</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join our network of 200+ dealers across Gujarat and grow your business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <BadgePercent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Wholesale Pricing</h3>
                <p className="text-muted-foreground">
                  Access competitive wholesale pricing with volume-based discounts
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Bulk Inventory</h3>
                <p className="text-muted-foreground">
                  Manage large orders with our advanced inventory management system
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <HeadsetIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Dedicated Support</h3>
                <p className="text-muted-foreground">Get priority support from our dedicated B2B account managers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How Our B2B Portal Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Simple steps to start your wholesale medical equipment business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Register</h3>
              <p className="text-muted-foreground">
                Complete the dealer registration process with your business details and required certifications
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Verification</h3>
              <p className="text-muted-foreground">
                Our team verifies your credentials and approves your dealer account within 48 hours
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Start Ordering</h3>
              <p className="text-muted-foreground">
                Access wholesale pricing, place bulk orders, and manage your inventory through the dealer dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dealer Plans */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Dealer Plans
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Choose the Right Plan for Your Business
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Flexible dealer plans designed for businesses of all sizes
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold">₹0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">For small medical stores and clinics</p>
                  <Separator />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to wholesale catalog</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Standard delivery options</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic inventory management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/auth/register?type=dealer&plan=starter">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow border-primary">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Badge className="absolute right-2 top-2">Popular</Badge>
                  <h3 className="text-xl font-bold">Professional</h3>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold">₹4,999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">For growing medical equipment dealers</p>
                  <Separator />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>All Starter features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>5% additional discount on all orders</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority shipping</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced inventory management</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Phone & email support</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/auth/register?type=dealer&plan=professional">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold">₹9,999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">For large distributors and hospital chains</p>
                  <Separator />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>All Professional features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>10% additional discount on all orders</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Express shipping</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom reporting & analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/auth/register?type=dealer&plan=enterprise">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Dealers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Hear from medical equipment dealers who have transformed their business with Pharma Mart
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "Pharma Mart has revolutionized our medical supply business. The wholesale pricing and inventory
                    management tools have helped us grow our revenue by 40% in just six months."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">MediSupply Solutions</h4>
                      <p className="text-sm text-muted-foreground">Ahmedabad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "The dedicated account manager and priority shipping have been game-changers for our hospital chain.
                    We've reduced procurement costs by 25% while improving delivery reliability."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">HealthCare Hospitals</h4>
                      <p className="text-sm text-muted-foreground">Surat</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">
                    "As a small clinic, we never had access to competitive pricing before. Pharma Mart's B2B portal has
                    leveled the playing field and allowed us to offer better equipment at lower prices."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">City Medical Store</h4>
                      <p className="text-sm text-muted-foreground">Vadodara</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Medical Equipment Business?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join our network of 200+ dealers across Gujarat and access wholesale pricing, bulk inventory management,
                and dedicated support.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/auth/register?type=dealer">
                  Register as Dealer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?subject=b2b">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

