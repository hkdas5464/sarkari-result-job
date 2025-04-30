"use client"

import { useState } from 'react';
import { Check, Filter, Search, MapPin, Calendar, ChevronDown, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function JobsPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    locations: [],
    qualifications: [],
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest Government Jobs</h1>
          <p className="text-blue-100 md:text-lg">
            Browse thousands of government job opportunities across India.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                    Reset All
                  </Button>
                </div>

                {/* Categories Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <span>Categories</span>
                    <ChevronDown size={16} className="ml-1" />
                  </h3>
                  <div className="space-y-2">
                    {['Central Government', 'State Government', 'PSU', 'Banking', 'Defense', 'Railway'].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={`category-${category}`} />
                        <label htmlFor={`category-${category}`} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Location Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <span>Location</span>
                    <ChevronDown size={16} className="ml-1" />
                  </h3>
                  <div className="space-y-2">
                    {['All India', 'Delhi', 'Maharashtra', 'Uttar Pradesh', 'Karnataka', 'Tamil Nadu'].map((location) => (
                      <div key={location} className="flex items-center space-x-2">
                        <Checkbox id={`location-${location}`} />
                        <label htmlFor={`location-${location}`} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Qualification Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <span>Qualification</span>
                    <ChevronDown size={16} className="ml-1" />
                  </h3>
                  <div className="space-y-2">
                    {['10th Pass', '12th Pass', 'Graduate', 'Post Graduate', 'Engineering', 'MBA'].map((qualification) => (
                      <div key={qualification} className="flex items-center space-x-2">
                        <Checkbox id={`qualification-${qualification}`} />
                        <label htmlFor={`qualification-${qualification}`} className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {qualification}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Salary Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Salary Range</h3>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Any Salary Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Salary Range</SelectItem>
                      <SelectItem value="10000-25000">₹10,000 - ₹25,000</SelectItem>
                      <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50000-75000">₹50,000 - ₹75,000</SelectItem>
                      <SelectItem value="75000-100000">₹75,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="100000+">₹1,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Jobs Listing */}
          <div className="lg:col-span-3">
            {/* Search and Sort */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input 
                  placeholder="Search jobs by title, organization..." 
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                  <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="hidden sm:flex">
                <ArrowUpDown size={18} />
              </Button>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
                Central Government <button className="ml-1">×</button>
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
                All India <button className="ml-1">×</button>
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 flex items-center gap-1">
                Graduate <button className="ml-1">×</button>
              </Badge>
              <Button variant="ghost" size="sm" className="h-7 text-xs">Clear All</Button>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {[...Array(10)].map((_, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Link href={`/jobs/${index + 1}`} className="block p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold">
                              {[
                                "UPSC Civil Services 2025",
                                "SSC CGL 2025",
                                "IBPS PO XIII",
                                "RBI Grade B Officers",
                                "Indian Army Technical Entry",
                                "SBI Clerk Recruitment",
                                "DRDO Entry Level Scientists",
                                "Railway Group D Recruitment",
                                "Indian Navy Sailors Entry",
                                "ISRO Scientist Recruitment"
                              ][index % 10]}
                            </h3>
                            {index % 3 === 0 && (
                              <Badge>New</Badge>
                            )}
                            {index % 5 === 0 && (
                              <Badge className="bg-orange-500 hover:bg-orange-600">Hot</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3">
                            {[
                              "Union Public Service Commission",
                              "Staff Selection Commission",
                              "Institute of Banking Personnel Selection",
                              "Reserve Bank of India",
                              "Indian Army",
                              "State Bank of India",
                              "Defence Research and Development Organisation",
                              "Railway Recruitment Board",
                              "Indian Navy",
                              "Indian Space Research Organisation"
                            ][index % 10]}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} />
                          <span>Deadline: {["Mar 15", "Apr 10", "May 5", "Jun 20", "Jul 15"][index % 5]}, 2025</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Vacancies</p>
                          <p className="font-medium">
                            {[712, 2000, 7500, 90, 150, 500, 300, 1200, 3000, 80][index % 10]}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <p className="font-medium">
                              {["All India", "Delhi", "Multiple States", "Mumbai", "Nationwide"][index % 5]}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Qualification</p>
                          <p className="font-medium">
                            {["Graduate", "10th Pass", "12th Pass", "Engineering", "Post Graduate"][index % 5]}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Salary</p>
                          <p className="font-medium">
                            {[
                              "₹56,100 - ₹2,50,000",
                              "₹25,500 - ₹81,100",
                              "₹17,900 - ₹63,200",
                              "₹35,400 - ₹1,12,400",
                              "₹44,900 - ₹1,42,400"
                            ][index % 5]}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="outline">
                          {["Central Government", "Banking", "Defense", "PSU", "State Government"][index % 5]}
                        </Badge>
                        <Badge variant="outline">
                          {["Full Time", "Permanent", "Regular", "Contractual", "Temporary"][index % 5]}
                        </Badge>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <Button variant="outline" className="hidden sm:flex">Previous</Button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="icon"
                    className="w-9 h-9"
                  >
                    {page}
                  </Button>
                ))}
                <span>...</span>
                <Button variant="outline" size="icon" className="w-9 h-9">
                  20
                </Button>
              </div>
              <Button variant="outline" className="hidden sm:flex">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}