import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // This hook gets the 'id' from the URL

// Import all the new components
import BarrelHeader from '../../components/barrel-details/BarrelHeader';
import ImageGallery from '../../components/barrel-details/ImageGallery';
import KeyMetrics from '../../components/barrel-details/KeyMetrics';
import InfoTabs from '../../components/barrel-details/InfoTabs';
import LocationMap from '../../components/barrel-details/LocationMap';
import InvestPanel from '../../components/barrel-details/InvestPanel';

// --- MOCK DATA (In a real app, this comes from an API call using the 'id') ---
const mockBarrelData = {
  id: 'glen-1992-88',
  name: 'Glen Fiddich 1992 Cask #88',
  distillery: 'Glenfiddich Distillery',
  location: 'Dufftown, Scotland',
  status: 'Open for Investment',
  images: [ '/b-img1.jpg', '/b-img2.jpg', '/b-img3.jpg' ], // Add paths to your images in /public
  metrics: {
    age: '33 Years',
    caskType: 'Oloroso Sherry Oak',
    abv: '48.7%',
    bottleYield: 'Approx. 210 bottles',
    valuation: 450000,
    tokenPrice: 250.00,
    remainingTokens: 1200,
    totalTokens: 1800
  },
  overview: "This exceptional 1992 vintage from the Glenfiddich distillery represents a pinnacle of single malt craftsmanship. Matured for over three decades in a first-fill Oloroso Sherry oak cask, it boasts a rich profile of dried fruits, dark chocolate, and warm spice. A rare and highly sought-after collectible.",
  documents: [
    { name: 'Aging & Provenance Certificate', url: '#' },
    { name: 'Warehouse & Insurance Docs', url: '#' },
    { name: 'Legal & Tokenization Agreement', url: '#' },
  ]
};

const gradientBackground = {
  background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'
};

const BarrelDetailsPage = () => {
  const { id } = useParams(); // Get barrel ID from URL
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data for the specific barrel
    console.log(`Fetching data for barrel ID: ${id}`);
    setIsLoading(true);
    setTimeout(() => {
      setData(mockBarrelData);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  // Add a skeleton loader for a better UX
  if (isLoading) {
    return <div className="min-h-screen text-white text-center p-20" style={gradientBackground}>Loading Barrel Details...</div>;
  }

  if (!data) return <div>Barrel not found.</div>;

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 font-sans" style={gradientBackground}>
      <div className="max-w-7xl mx-auto">
        <BarrelHeader name={data.name} distillery={data.distillery} status={data.status} />

        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery images={data.images} />
            <KeyMetrics metrics={data.metrics} />
            <LocationMap location={data.location} />
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-1 space-y-8">
            <InvestPanel 
              tokenPrice={data.metrics.tokenPrice}
              remainingTokens={data.metrics.remainingTokens}
              totalTokens={data.metrics.totalTokens}
            />
            <InfoTabs overview={data.overview} documents={data.documents} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BarrelDetailsPage;