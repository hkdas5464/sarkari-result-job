"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarClock, Briefcase, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const notifications = [
  {
    id: 1,
    title: 'UPSC Civil Services 2025 Application Starts',
    description: 'Applications for UPSC Civil Services Examination 2025 are now open. Last date to apply is April 15, 2025.',
    date: 'March 20, 2025',
    type: 'Application',
    isNew: true,
  },
  {
    id: 2,
    title: 'Indian Railways to recruit 35,000 posts',
    description: 'Indian Railways has announced a mega recruitment drive for 35,000 various posts across India.',
    date: 'March 18, 2025',
    type: 'Notification',
    isNew: true,
  },
  {
    id: 3,
    title: 'SBI PO 2025 Registration Last Date Extended',
    description: 'State Bank of India has extended the last date for PO recruitment 2025 to April 30, 2025.',
    date: 'March 15, 2025',
    type: 'Update',
  },
  {
    id: 4,
    title: 'SSC GD Constable Exam Date Announced',
    description: 'Staff Selection Commission has released the exam schedule for GD Constable recruitment 2025.',
    date: 'March 12, 2025',
    type: 'Exam Date',
  },
];

export default function JobNotifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full">
            <CardContent className="p-0">
              <Link href="#" className="block group">
                <div className="relative">
                  <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{notification.type}</Badge>
                        {notification.isNew && (
                          <Badge variant="default" className="bg-green-500 hover:bg-green-600">New</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground gap-1">
                        <CalendarClock size={14} />
                        <span>{notification.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {notification.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-muted-foreground mb-4">{notification.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase size={14} />
                        <span>Apply before deadline</span>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}