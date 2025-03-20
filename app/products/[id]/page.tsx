"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, ShoppingCart, Star, Check, Info, Truck, RefreshCw, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample product data
const product = {
  id: 1,
  name: "Digital Stethoscope Pro",
  description:
    "Advanced digital stethoscope with noise cancellation and Bluetooth connectivity for clear auscultation and recording capabilities.",
  price: 12999,
  originalPrice: 15999,
  rating: 4.5,
  reviewCount: 128,
  category: "Diagnostic Tools",
  brand: "MediTech",
  sku: "DSP-1001",
  inStock: true,
  features: [
    "Noise cancellation technology",
    "Bluetooth connectivity",
    "Recording capabilities",
    "Amplification up to 40x",
    "Compatible with medical software",
    "Rechargeable battery (up to 20 hours)",
    "Lightweight design (150g)",
  ],
  specifications: {
    Dimensions: "18 x 4 x 3 cm",
    Weight: "150g",
    "Battery Life": "Up to 20 hours",
    Connectivity: "Bluetooth 5.0",
    Amplification: "Up to 40x",
    "Frequency Range": "20Hz - 2000Hz",
    Warranty: "2 years",
  },
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  substitutes: [
    {
      id: 101,
      name: "Digital Stethoscope Lite",
      price: 8999,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 102,
      name: "Premium Acoustic Stethoscope",
      price: 5999,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 103,
      name: "Digital Stethoscope Plus",
      price: 10999,
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  reviews: [
    {
      id: 1,
      user: "Dr. Patel",
      rating: 5,
      date: "2023-12-15",
      comment: "Excellent clarity and the noise cancellation is a game-changer in busy hospital environments.",
    },
    {
      id: 2,
      user: "Dr. Sharma",
      rating: 4,
      date: "2023-11-20",
      comment: "Great product, battery life is impressive. The app could use some improvements.",
    },
    {
      id: 3,
      user: "Dr. Mehta",
      rating: 5,
      date: "2023-10-05",
      comment: "The recording feature has been invaluable for teaching medical students.",
    },
  ],
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState("1")

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Images */}
        <div className="space-y-4 md:col-span-1">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.originalPrice > product.price && (
              <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </Badge>
            )}
          </div>
          <div className="flex space-x-2 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square w-20 overflow-hidden rounded-md border ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6 md:col-span-1">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : i < product.rating
                          ? "fill-primary text-primary opacity-50"
                          : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Inclusive of all taxes</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="font-medium text-green-700">In Stock</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">SKU:</span>
                <span className="text-sm text-muted-foreground">{product.sku}</span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="quantity" className="text-sm font-medium">
                    Quantity
                  </label>
                  <Select value={quantity} onValueChange={setQuantity}>
                    <SelectTrigger id="quantity">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total</label>
                  <div className="rounded-md border px-3 py-2">
                    <span className="font-medium">₹{(product.price * Number.parseInt(quantity)).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-lg bg-muted/50 p-4">
            <div className="flex items-start space-x-3">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Free Delivery</p>
                <p className="text-xs text-muted-foreground">For orders above ₹10,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RefreshCw className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Easy Replacement</p>
                <p className="text-xs text-muted-foreground">7-day replacement policy</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">2-Year Warranty</p>
                <p className="text-xs text-muted-foreground">Manufacturer warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description, Features, and Substitutes */}
        <div className="space-y-8 md:col-span-2 lg:col-span-1">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specs</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 pt-4">
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-muted-foreground">
                The Digital Stethoscope Pro is designed for healthcare professionals who demand the highest quality in
                their diagnostic tools. With advanced noise cancellation technology, it filters out ambient noise for
                crystal-clear auscultation, even in busy hospital environments.
              </p>
              <p className="text-muted-foreground">
                Bluetooth connectivity allows seamless pairing with your smartphone or tablet, enabling recording and
                playback of heart and lung sounds. This feature is invaluable for education, patient records, or remote
                consultations.
              </p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="grid gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <p className="text-sm font-medium">{key}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Substitute Products</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">About substitutes</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">
                      These products offer similar functionality at different price points
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {product.substitutes.map((substitute) => (
                <Card key={substitute.id} className="overflow-hidden">
                  <div className="flex items-center p-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image
                        src={substitute.image || "/placeholder.svg"}
                        alt={substitute.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium">{substitute.name}</h4>
                      <p className="text-sm text-muted-foreground">₹{substitute.price.toLocaleString()}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/${substitute.id}`}>View</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="reviews">
              <AccordionTrigger>Customer Reviews</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="space-y-2 rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{review.user}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Shipping Policy</p>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on all orders above ₹10,000. Standard delivery within 3-5 business days across
                    Gujarat.
                  </p>
                  <p className="text-sm font-medium mt-4">Return Policy</p>
                  <p className="text-sm text-muted-foreground">
                    Easy replacement within 7 days of delivery if the product is damaged or defective. No refunds, only
                    replacements.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

