"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, ShoppingCart, Trash2, Share2, Filter, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Sample wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Digital Stethoscope Pro",
    category: "Diagnostic Tools",
    price: 12999,
    originalPrice: 15999,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    dateAdded: "2023-12-15",
  },
  {
    id: 2,
    name: "Surgical Scissors Set",
    category: "Surgical Instruments",
    price: 4999,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    dateAdded: "2023-12-10",
  },
  {
    id: 3,
    name: "Patient Monitor X3",
    category: "Monitoring Equipment",
    price: 89999,
    originalPrice: 99999,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    dateAdded: "2023-12-05",
  },
  {
    id: 4,
    name: "Examination Table Standard",
    category: "Hospital Furniture",
    price: 35999,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    dateAdded: "2023-11-28",
  },
  {
    id: 6,
    name: "Portable ECG Machine",
    category: "Diagnostic Tools",
    price: 45999,
    originalPrice: 49999,
    image: "/placeholder.svg?height=300&width=300",
    inStock: false,
    dateAdded: "2023-11-20",
  },
  {
    id: 8,
    name: "Hospital Bed Electric",
    category: "Hospital Furniture",
    price: 129999,
    originalPrice: 149999,
    image: "/placeholder.svg?height=300&width=300",
    inStock: true,
    dateAdded: "2023-11-15",
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOption, setSortOption] = useState("date-new")
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  // Filter items based on search query and in-stock filter
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStock = showInStockOnly ? item.inStock : true

    return matchesSearch && matchesStock
  })

  // Sort items based on selected option
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortOption) {
      case "date-new":
        return new Date(b.dateAdded) - new Date(a.dateAdded)
      case "date-old":
        return new Date(a.dateAdded) - new Date(b.dateAdded)
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      default:
        return 0
    }
  })

  // Remove item from wishlist
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
  }

  // Remove all selected items
  const removeSelectedItems = () => {
    setItems(items.filter((item) => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  // Toggle item selection
  const toggleItemSelection = (id) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }

  // Select all items
  const selectAllItems = () => {
    if (selectedItems.length === sortedItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(sortedItems.map((item) => item.id))
    }
  }

  // Add all selected items to cart
  const addSelectedToCart = () => {
    // This would typically make an API call to add items to cart
    console.log("Adding to cart:", selectedItems)
    // For demo purposes, we'll just clear the selection
    setSelectedItems([])
  }

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

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wishlist</h1>
          <p className="text-muted-foreground">{items.length} saved items</p>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search wishlist..."
              className="w-full sm:w-[200px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowInStockOnly(!showInStockOnly)}
            className={showInStockOnly ? "bg-primary/10" : ""}
          >
            <Filter className="mr-2 h-4 w-4" />
            {showInStockOnly ? "All Items" : "In Stock Only"}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuRadioGroup value={sortOption} onValueChange={setSortOption}>
                <DropdownMenuRadioItem value="date-new">Newest First</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="date-old">Oldest First</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name-asc">Name: A to Z</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name-desc">Name: Z to A</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {selectedItems.length > 0 && (
        <div className="mt-4 flex items-center justify-between rounded-lg bg-muted p-4">
          <div className="flex items-center">
            <span className="font-medium">{selectedItems.length} items selected</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={addSelectedToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Remove selected items?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will remove {selectedItems.length} items from your wishlist. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={removeSelectedItems}>Remove</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      )}

      {sortedItems.length > 0 ? (
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={selectAllItems}>
              {selectedItems.length === sortedItems.length ? "Deselect All" : "Select All"}
            </Button>
            <span className="text-sm text-muted-foreground">
              Showing {sortedItems.length} of {items.length} items
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedItems.map((item) => (
              <Card
                key={item.id}
                className={`overflow-hidden ${selectedItems.includes(item.id) ? "ring-2 ring-primary" : ""}`}
              >
                <div className="relative">
                  <div className="absolute right-2 top-2 z-10 flex space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                      onClick={() => toggleItemSelection(item.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${selectedItems.includes(item.id) ? "fill-primary text-primary" : ""}`}
                      />
                      <span className="sr-only">Select item</span>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove from wishlist</span>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove from wishlist?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will remove "{item.name}" from your wishlist. This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => removeItem(item.id)}>Remove</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <Link href={`/products/${item.id}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                      {item.originalPrice && (
                        <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
                          Save {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                        </Badge>
                      )}
                      {!item.inStock && (
                        <Badge variant="destructive" className="absolute left-2 top-2">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                  </Link>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <Link href={`/products/${item.id}`} className="block">
                      <h3 className="font-medium">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-medium">₹{item.price.toLocaleString()}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Added on {new Date(item.dateAdded).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex w-full gap-2">
                    <Button className="w-full" size="sm" disabled={!item.inStock}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-10 text-center">
          <div className="rounded-full bg-primary/10 p-3">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
            <p className="text-muted-foreground">
              {items.length > 0
                ? "No items match your current filters."
                : "Save items you're interested in by clicking the heart icon on product pages."}
            </p>
          </div>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      )}

      {sortedItems.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((id) => (
              <Card key={id} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Recommended product"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">Recommended Product {id}</h3>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-medium">₹{(Math.floor(Math.random() * 10000) + 1000).toLocaleString()}</span>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" size="sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

