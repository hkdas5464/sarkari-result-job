"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, BriefcaseBusiness, Search, Bell, Bookmark, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white dark:bg-gray-900 shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <BriefcaseBusiness size={28} className="text-blue-600" />
            <span className="font-bold text-xl">SarkariJobs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/jobs" className="px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Jobs
            </Link>
            <Link href="/results" className="px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Results
            </Link>
            <Link href="/admit-cards" className="px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Admit Cards
            </Link>
            <Link href="/syllabus" className="px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Syllabus
            </Link>
            <Link href="/answer-keys" className="px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Answer Keys
            </Link>
            <Link href="/admissions" className="px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              Admissions
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="outline" size="icon">
              <Search size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <Bell size={18} />
            </Button>
            <Button variant="outline" size="icon">
              <Bookmark size={18} />
            </Button>
            <Button>
              <User size={18} className="mr-2" /> Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link href="/jobs" className="px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Jobs
              </Link>
              <Link href="/results" className="px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Results
              </Link>
              <Link href="/admit-cards" className="px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Admit Cards
              </Link>
              <Link href="/syllabus" className="px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Syllabus
              </Link>
              <Link href="/answer-keys" className="px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Answer Keys
              </Link>
              <Link href="/admissions" className="px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Admissions
              </Link>
              <div className="flex items-center space-x-2 pt-2 mt-2 border-t">
                <Button variant="outline" size="icon">
                  <Search size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Bell size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark size={18} />
                </Button>
                <Button className="flex-1">
                  <User size={18} className="mr-2" /> Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}