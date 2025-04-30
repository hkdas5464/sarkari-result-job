"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileCheck, GraduationCap, FileText, CalendarDays, AlertTriangle, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define a type for the update objects
interface Update {
  id: number;
  title: string;
  date: string;
  isNew?: boolean;
  isUrgent?: boolean;
}

// Define the shape of updateTypes
interface UpdateTypes {
  results: Update[];
  admitCards: Update[];
  answerKeys: Update[];
  importantDates: Update[];
  syllabus: Update[];
}

const updateTypes: UpdateTypes = {
  results: [
    { id: 1, title: 'UPSC CSE 2024 Final Result', date: 'March 15, 2025', isNew: true },
    { id: 2, title: 'SSC CGL 2024 Tier II Result', date: 'March 10, 2025', isNew: true },
    { id: 3, title: 'IBPS PO XIII Final Result', date: 'March 5, 2025' },
    { id: 4, title: 'RRB NTPC Result 2024', date: 'March 1, 2025' },
    { id: 5, title: 'SBI Clerk Main Result 2024', date: 'February 25, 2025' },
  ],
  admitCards: [
    { id: 1, title: 'IBPS Clerk Mains Admit Card', date: 'March 20, 2025', isNew: true },
    { id: 2, title: 'SSC CHSL 2024 Tier I Admit Card', date: 'March 18, 2025', isNew: true },
    { id: 3, title: 'UPSC EPFO Admit Card 2025', date: 'March 15, 2025' },
    { id: 4, title: 'SBI PO Pre Exam Call Letter', date: 'March 12, 2025' },
    { id: 5, title: 'RRB JE Admit Card 2025', date: 'March 10, 2025' },
  ],
  answerKeys: [
    { id: 1, title: 'UPSC NDA I 2025 Answer Key', date: 'March 22, 2025', isNew: true },
    { id: 2, title: 'SSC GD Constable Answer Key', date: 'March 17, 2025', isNew: true },
    { id: 3, title: 'GATE 2025 Final Answer Key', date: 'March 14, 2025' },
    { id: 4, title: 'CTET January 2025 Answer Key', date: 'March 8, 2025' },
    { id: 5, title: 'UGC NET December 2024 Answer Key', date: 'March 5, 2025' },
  ],
  importantDates: [
    { id: 1, title: 'UPSC CAPF 2025 Application Last Date', date: 'April 5, 2025', isUrgent: true },
    { id: 2, title: 'IBPS RRB 2025 Registration Starts', date: 'March 30, 2025', isUrgent: true },
    { id: 3, title: 'SSC MTS 2025 Notification Release', date: 'March 25, 2025' },
    { id: 4, title: 'UPSC CSE 2025 Prelims Exam Date', date: 'June 1, 2025' },
    { id: 5, title: 'IBPS PO 2025 Registration Starts', date: 'May 15, 2025' },
  ],
  syllabus: [
    { id: 1, title: 'RBI Grade B Officer 2025 Syllabus', date: 'March 18, 2025', isNew: true },
    { id: 2, title: 'UPSC IES 2025 Revised Syllabus', date: 'March 15, 2025', isNew: true },
    { id: 3, title: 'SSC CGL 2025 Detailed Syllabus', date: 'March 12, 2025' },
    { id: 4, title: 'IBPS Clerk 2025 New Pattern & Syllabus', date: 'March 8, 2025' },
    { id: 5, title: 'UPSC EPFO 2025 Revised Syllabus', date: 'March 5, 2025' },
  ],
};

export default function LatestUpdates() {
  const tabIcons = {
    results: <FileCheck className="h-4 w-4" />,
    admitCards: <GraduationCap className="h-4 w-4" />,
    answerKeys: <FileText className="h-4 w-4" />,
    importantDates: <CalendarDays className="h-4 w-4" />,
    syllabus: <AlertTriangle className="h-4 w-4" />,
  };

  return (
    <Tabs defaultValue="results" className="w-full">
      <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6">
        <TabsTrigger value="results" className="flex items-center gap-1">
          {tabIcons.results} Results
        </TabsTrigger>
        <TabsTrigger value="admitCards" className="flex items-center gap-1">
          {tabIcons.admitCards} Admit Cards
        </TabsTrigger>
        <TabsTrigger value="answerKeys" className="flex items-center gap-1">
          {tabIcons.answerKeys} Answer Keys
        </TabsTrigger>
        <TabsTrigger value="importantDates" className="flex items-center gap-1">
          {tabIcons.importantDates} Important Dates
        </TabsTrigger>
        <TabsTrigger value="syllabus" className="flex items-center gap-1">
          {tabIcons.syllabus} Syllabus
        </TabsTrigger>
      </TabsList>

      {Object.entries(updateTypes).map(([tabKey, updates]: [string, Update[]]) => (
        <TabsContent key={tabKey} value={tabKey} className="m-0">
          <div className="grid grid-cols-1">
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {updates.map((update, index) => (
                    <motion.li 
                      key={update.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="p-4 hover:bg-muted/50 transition-colors"
                    >
                      <Link href="#" className="flex justify-between items-center group">
                        <div className="flex items-center">
                          <div className={cn(
                            "h-10 w-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
                            tabKey === 'results' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                            tabKey === 'admitCards' && "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
                            tabKey === 'answerKeys' && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                            tabKey === 'importantDates' && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                            tabKey === 'syllabus' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                          )}>
                            {tabIcons[tabKey as keyof typeof tabIcons]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{update.title}</span>
                              {update.isNew && (
                                <Badge className="bg-green-500 hover:bg-green-600 h-5">New</Badge>
                              )}
                              {update.isUrgent && (
                                <Badge className="bg-red-500 hover:bg-red-600 h-5">Urgent</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Updated: {update.date}
                            </p>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}