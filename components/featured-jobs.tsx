"use client"

import { motion } from 'framer-motion';
import { Building, MapPin, Calendar, ExternalLink, Briefcase, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const featuredJobs = [
  {
    id: 1,
    title: 'UPSC Civil Services Examination 2025',
    organization: 'Union Public Service Commission',
    location: 'All India',
    deadline: 'April 15, 2025',
    postDate: 'March 1, 2025',
    vacancy: 712,
    type: 'Central Government',
    salary: '₹56,100 - ₹2,50,000',
    isHot: true,
  },
  {
    id: 2,
    title: 'SBI Probationary Officers Recruitment',
    organization: 'State Bank of India',
    location: 'Nationwide',
    deadline: 'May 10, 2025',
    postDate: 'March 20, 2025',
    vacancy: 2000,
    type: 'Banking',
    salary: '₹27,620 - ₹42,020',
    isNew: true,
  },
  {
    id: 3,
    title: 'SSC Combined Graduate Level Examination',
    organization: 'Staff Selection Commission',
    location: 'All India',
    deadline: 'March 31, 2025',
    postDate: 'February 15, 2025',
    vacancy: 7500,
    type: 'Central Government',
    salary: '₹25,500 - ₹81,100',
  },
  {
    id: 4,
    title: 'Indian Army Technical Entry Scheme',
    organization: 'Indian Army',
    location: 'Nationwide',
    deadline: 'June 5, 2025',
    postDate: 'March 15, 2025',
    vacancy: 90,
    type: 'Defense',
    salary: '₹56,100 - ₹1,77,500',
    isHot: true,
  },
];

export default function FeaturedJobs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredJobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold mb-1 line-clamp-2">{job.title}</h3>
                  <div className="text-muted-foreground flex items-center gap-1">
                    <Building size={14} />
                    <span>{job.organization}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <BookmarkPlus size={18} />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Briefcase size={14} />
                  {job.type}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin size={14} />
                  {job.location}
                </Badge>
                {job.isHot && (
                  <Badge className="bg-red-500 hover:bg-red-600">Hot</Badge>
                )}
                {job.isNew && (
                  <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                )}
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span>Vacancy:</span>
                  <span className="font-semibold text-foreground">{job.vacancy}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>Last Date: {job.deadline}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Salary Range:</span>
                  <span className="font-medium ml-1">{job.salary}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <Button variant="outline" size="sm">Save Job</Button>
              <Button size="sm">
                Apply Now
                <ExternalLink size={14} className="ml-1" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}