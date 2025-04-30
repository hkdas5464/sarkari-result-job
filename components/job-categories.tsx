"use client"

import Link from 'next/link';
import { Building, Briefcase, Landmark, School, Train, UserRound, Shield, Headphones, HardHat, Laptop, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { 
    name: 'Central Government', 
    icon: <Building size={24} />, 
    jobs: '1,234', 
    href: '/jobs/central-government',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
  },
  { 
    name: 'State Government', 
    icon: <Building2 size={24} />, 
    jobs: '2,456', 
    href: '/jobs/state-government',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'
  },
  { 
    name: 'Bank Jobs', 
    icon: <Landmark size={24} />, 
    jobs: '567', 
    href: '/jobs/bank',
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400'
  },
  { 
    name: 'Teaching', 
    icon: <School size={24} />, 
    jobs: '890', 
    href: '/jobs/teaching',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400'
  },
  { 
    name: 'Railways', 
    icon: <Train size={24} />, 
    jobs: '345', 
    href: '/jobs/railway',
    color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400'
  },
  { 
    name: 'Police/Defense', 
    icon: <Shield size={24} />, 
    jobs: '678', 
    href: '/jobs/police-defense',
    color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400'
  },
  { 
    name: 'Engineering', 
    icon: <HardHat size={24} />, 
    jobs: '456', 
    href: '/jobs/engineering',
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400'
  },
  { 
    name: 'IT & Technology', 
    icon: <Laptop size={24} />, 
    jobs: '789', 
    href: '/jobs/it-technology',
    color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400'
  },
];

export default function JobCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={category.href}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <div className={`inline-flex items-center justify-center p-3 rounded-full mb-4 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
              <div className="text-sm text-muted-foreground">{category.jobs} open positions</div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}