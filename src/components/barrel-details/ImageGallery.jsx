import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ImageGallery = ({ images }) => (
  <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm overflow-hidden">
    <CardContent className="p-0">
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <img src={src} alt={`Barrel image ${index + 1}`} className="w-full h-96 object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
    </CardContent>
  </Card>
);
export default ImageGallery;