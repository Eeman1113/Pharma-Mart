"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, Trash2, CreditCard, ShieldCheck, Truck, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "Digital Stethoscope Pro",
    category: "Diagnostic Tools",
    price: 12999,
    quantity: 2,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Patient Monitor X3",
    category: "Monitoring Equipment",
    price: 89999,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Surgical Gloves (Box of 100)",
    category: "Disposables",
    price: 899,
    quantity: 5,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)
  const [couponCode, setCouponCode] = useState("")
  const [deliveryOption, setDeliveryOption] = useState("standard")

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  // Calculate delivery fee based on selected option
  const getDeliveryFee = () => {
    switch (deliveryOption) {
      case "express":
        return 499
      case "standard":
        return subtotal >= 10000 ? 0 : 299
      case "scheduled":
        return 399
      default:
        return 0
    }
  }

  const deliveryFee = getDeliveryFee()
  const tax = Math.round(subtotal * 0.18) // 18% GST
  const total = subtotal + deliveryFee + tax

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item from cart
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  // Check if cart meets minimum order value
  const meetsMinimumOrder = subtotal >= 10000

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-6">Your Cart</h1>

      {items.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative h-40 w-full sm:h-auto sm:w-40">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 sm:text-right">
                            <p className="font-medium">₹{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove item</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-bold">Delivery Options</h2>
              <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="grid gap-4">
                <div className="flex items-start space-x-4 rounded-lg border p-4">
                  <RadioGroupItem value="standard" id="standard" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="standard" className="text-base font-medium">
                      Standard Delivery
                    </Label>
                    <p className="text-sm text-muted-foreground">Delivery within 3-5 business days</p>
                    <p className="mt-1 text-sm font-medium">{subtotal >= 10000 ? "Free" : "₹299"}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-lg border p-4">
                  <RadioGroupItem value="express" id="express" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="express" className="text-base font-medium">
                      Express Delivery
                    </Label>
                    <p className="text-sm text-muted-foreground">Delivery within 24 hours</p>
                    <p className="mt-1 text-sm font-medium">₹499</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 rounded-lg border p-4">
                  <RadioGroupItem value="scheduled" id="scheduled" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="scheduled" className="text-base font-medium">
                      Scheduled Delivery
                    </Label>
                    <p className="text-sm text-muted-foreground">Choose your preferred delivery date and time</p>
                    <p className="mt-1 text-sm font-medium">₹399</p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="delivery-date" className="text-sm">
                          Date
                        </Label>
                        <Select disabled={deliveryOption !== "scheduled"}>
                          <SelectTrigger id="delivery-date">
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tomorrow">Tomorrow</SelectItem>
                            <SelectItem value="day-after">Day after tomorrow</SelectItem>
                            <SelectItem value="custom">Custom date</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="delivery-time" className="text-sm">
                          Time
                        </Label>
                        <Select disabled={deliveryOption !== "scheduled"}>
                          <SelectTrigger id="delivery-time">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">9 AM - 12 PM</SelectItem>
                            <SelectItem value="afternoon">1 PM - 5 PM</SelectItem>
                            <SelectItem value="evening">6 PM - 9 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery</span>
                    <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (18% GST)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>

                  <Separator className="my-2" />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>

                  {!meetsMinimumOrder && (
                    <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                      <p>Minimum order value is ₹10,000. Add ₹{(10000 - subtotal).toLocaleString()} more to proceed.</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>

                  <Button className="w-full" size="lg" disabled={!meetsMinimumOrder}>
                    Proceed to Checkout
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <ShieldCheck className="mr-1 h-4 w-4" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="mr-1 h-4 w-4" />
                      <span>Fast Delivery</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="payment">
                  <AccordionTrigger>Payment Methods</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2 rounded-md border p-3">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        <span>Credit/Debit Card</span>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-3">
                        <svg
                          className="h-5 w-5 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 12H16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 7.5V16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>UPI</span>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-3">
                        <svg
                          className="h-5 w-5 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 10H21"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Net Banking</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="rounded-lg bg-muted/50 p-4">
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our customer support team is available 24/7 to assist you with your order.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-10 text-center">
          <div className="rounded-full bg-primary/10 p-3">
            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground">Looks like you haven't added any products to your cart yet.</p>
          </div>
          <Button asChild>
            <Link href="/products">
              Browse Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">You might also like</h2>
          <Tabs defaultValue="related">
            <TabsList>
              <TabsTrigger value="related">Related Products</TabsTrigger>
              <TabsTrigger value="frequently">Frequently Bought Together</TabsTrigger>
            </TabsList>
            <TabsContent value="related" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((id) => (
                  <Card key={id} className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Related product"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Related Product {id}</h3>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium">
                          ₹{(Math.floor(Math.random() * 10000) + 1000).toLocaleString()}
                        </span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="frequently" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[5, 6, 7, 8].map((id) => (
                  <Card key={id} className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Frequently bought product"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Frequently Bought {id}</h3>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium">
                          ₹{(Math.floor(Math.random() * 10000) + 1000).toLocaleString()}
                        </span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

