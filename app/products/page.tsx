"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Search, X, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample product data
const products = [
  {
    id: 1,
    name: "Digital Stethoscope Pro",
    category: "Diagnostic Tools",
    price: 12999,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Surgical Scissors Set",
    category: "Surgical Instruments",
    price: 4999,
    rating: 4.2,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 3,
    name: "Patient Monitor X3",
    category: "Monitoring Equipment",
    price: 89999,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Examination Table Standard",
    category: "Hospital Furniture",
    price: 35999,
    rating: 4.0,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 5,
    name: "Surgical Gloves (Box of 100)",
    category: "Disposables",
    price: 899,
    rating: 4.3,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Portable ECG Machine",
    category: "Diagnostic Tools",
    price: 45999,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    inStock: false,
  },
  {
    id: 7,
    name: "Surgical Mask N95 (Box of 50)",
    category: "Disposables",
    price: 1499,
    rating: 4.4,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Hospital Bed Electric",
    category: "Hospital Furniture",
    price: 129999,
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    inStock: true,
  },
  {
    id: 9,
    name: "Pulse Oximeter Fingertip",
    category: "Monitoring Equipment",
    price: 2499,
    rating: 4.1,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 10,
    name: "Surgical Sutures Pack",
    category: "Surgical Instruments",
    price: 3499,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 11,
    name: "Digital Blood Pressure Monitor",
    category: "Diagnostic Tools",
    price: 5999,
    rating: 4.3,
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    inStock: true,
  },
  {
    id: 12,
    name: "Sterilization Autoclave 20L",
    category: "Sterilization Equipment",
    price: 79999,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    inStock: true,
  },
]

// Categories for filtering
const categories = [
  "Diagnostic Tools",
  "Surgical Instruments",
  "Monitoring Equipment",
  "Hospital Furniture",
  "Disposables",
  "Sterilization Equipment",
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 150000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortOption, setSortOption] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  // Filter products based on search, categories, and price range
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "featured":
        return b.featured - a.featured
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  // Toggle category selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setPriceRange([0, 150000])
    setSelectedCategories([])
    setSortOption("featured")
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">Browse our wide range of medical equipment and supplies</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-8 md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Clear search</span>
                </Button>
              )}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium tracking-wide text-foreground">Price Range</h3>
                    <Slider
                      defaultValue={priceRange}
                      max={150000}
                      step={1000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">₹{priceRange[0].toLocaleString()}</span>
                      <span className="text-sm">₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium tracking-wide text-foreground">Categories</h3>
                    <div className="grid gap-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`category-${category}`}>{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium tracking-wide text-foreground">Availability</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="in-stock" />
                        <Label htmlFor="in-stock">In Stock Only</Label>
                      </div>
                    </div>
                  </div>
                  <Button onClick={clearFilters} variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="rounded-lg border bg-card p-4 shadow-sm md:hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="price">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                  <Slider
                    defaultValue={priceRange}
                    max={150000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">₹{priceRange[0].toLocaleString()}</span>
                    <span className="text-sm">₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={`mobile-category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="availability">
                <AccordionTrigger>Availability</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mobile-in-stock" />
                      <Label htmlFor="mobile-in-stock">In Stock Only</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button onClick={clearFilters} variant="outline" className="mt-4 w-full">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Results summary */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} of {products.length} products
          </p>
          {(searchQuery || selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 150000) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-2 h-4 w-4" />
              Clear filters
            </Button>
          )}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  {product.featured && (
                    <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute right-2 top-2">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </Link>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <Link href={`/products/${product.id}`} className="block">
                    <h3 className="font-medium">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-medium">₹{product.price.toLocaleString()}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex w-full gap-2">
                  <Button className="w-full" size="sm" disabled={!product.inStock}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {sortedProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-10 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
            <Button onClick={clearFilters}>Clear filters</Button>
          </div>
        )}
      </div>
    </div>
  )
}

