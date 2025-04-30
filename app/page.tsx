import Link from 'next/link';
import { Search, BriefcaseBusiness, Bookmark, Bell, FileCheck, GraduationCap, Building, MapPin } from 'lucide-react';
import FeaturedJobs from '@/components/featured-jobs';
import JobCategories from '@/components/job-categories';
import LatestUpdates from '@/components/latest-updates';
import SearchBar from '@/components/search-bar';
import { Button } from '@/components/ui/button';
import JobNotifications from '@/components/job-notifications';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Government Job</h1>
              <p className="text-blue-100 text-lg mb-6">
                Discover thousands of government job opportunities, exam results, and admit cards all in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Latest Jobs
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Results
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <SearchBar />
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">10,000+</p>
              <p className="text-blue-100">Active Jobs</p>
            </div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">5,000+</p>
              <p className="text-blue-100">Results</p>
            </div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">2,500+</p>
              <p className="text-blue-100">Admit Cards</p>
            </div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold">1M+</p>
              <p className="text-blue-100">Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            <Link href="/jobs" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
              <BriefcaseBusiness size={18} className="text-blue-700" />
              <span>Latest Jobs</span>
            </Link>
            <Link href="/results" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
              <FileCheck size={18} className="text-green-600" />
              <span>Results</span>
            </Link>
            <Link href="/admit-cards" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
              <GraduationCap size={18} className="text-orange-600" />
              <span>Admit Cards</span>
            </Link>
            <Link href="/government" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
              <Building size={18} className="text-purple-600" />
              <span>Government Jobs</span>
            </Link>
            <Link href="/states" className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
              <MapPin size={18} className="text-red-600" />
              <span>State Jobs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Browse By Categories</h2>
          <JobCategories />
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Updates</h2>
            <Button variant="outline">View All</Button>
          </div>
          <LatestUpdates />
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Jobs</h2>
            <Button variant="outline">View All Jobs</Button>
          </div>
          <FeaturedJobs />
        </div>
      </section>

      {/* Important Notifications */}
      <section className="py-10 px-4 bg-blue-50 dark:bg-blue-950/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Bell className="text-orange-600" />
              <h2 className="text-2xl md:text-3xl font-bold">Important Notifications</h2>
            </div>
            <Button variant="outline">All Notifications</Button>
          </div>
          <JobNotifications />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-blue-800 rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-4 text-blue-100">
                Get the latest job notifications, results, and admit cards directly in your inbox.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-md flex-grow bg-blue-700 text-white placeholder:text-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
              </div>
              <p className="text-sm text-blue-300 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}