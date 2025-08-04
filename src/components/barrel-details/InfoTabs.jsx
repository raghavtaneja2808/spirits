import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from 'lucide-react';

const InfoTabs = ({ overview, documents }) => (
  <Tabs defaultValue="overview" className="w-full">
    <TabsList className="grid w-full grid-cols-2 bg-black bg-opacity-20 border-gray-700">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="documents">Documents</TabsTrigger>
    </TabsList>
    <TabsContent value="overview" className="mt-4 text-gray-300 text-sm leading-relaxed">
      {overview}
    </TabsContent>
    <TabsContent value="documents" className="mt-4 space-y-2">
      {documents.map(doc => (
        <a key={doc.name} href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-md bg-gray-800/50 hover:bg-gray-700/50">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-brand-gold" />
            <span className="text-white text-sm">{doc.name}</span>
          </div>
        </a>
      ))}
    </TabsContent>
  </Tabs>
);
export default InfoTabs;