"use client"

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for jobs, results, admit cards..."
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            className="flex-grow px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="jobs">Jobs</option>
            <option value="results">Results</option>
            <option value="admit-cards">Admit Cards</option>
            <option value="answer-keys">Answer Keys</option>
          </select>
          <Button className="bg-blue-700 hover:bg-blue-800 px-6">
            <Search size={18} className="mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}