<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gaW1hZ2U8L3RleHQ+PC9zdmc+";
<<<<<<< HEAD
=======

=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

<<<<<<< HEAD
const PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTRhM2I4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gaW1hZ2U8L3RleHQ+PC9zdmc+";
>>>>>>> bd28705 (initial commit)
=======
const PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZThlZGU4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOWFiMjlhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gaW1hZ2U8L3RleHQ+PC9zdmc+";
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
>>>>>>> 7a4c2f5 (bold urban redesign)

export default function VehicleCard({ vehicle }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rawImages = vehicle.images?.length > 0 ? vehicle.images : (vehicle.image ? [{ url: vehicle.image }] : []);
  const images = rawImages.length > 0 ? rawImages : [{ url: PLACEHOLDER }];

<<<<<<< HEAD
<<<<<<< HEAD
  const nextImage = (e) => { e.preventDefault(); setCurrentImageIndex((prev) => (prev + 1) % images.length); };
  const prevImage = (e) => { e.preventDefault(); setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length); };
=======
  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
>>>>>>> bd28705 (initial commit)
=======
  const nextImage = (e) => { e.preventDefault(); setCurrentImageIndex((prev) => (prev + 1) % images.length); };
  const prevImage = (e) => { e.preventDefault(); setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length); };
>>>>>>> 30692b7 (premium redesign with real photos and reviews)

  const dailyVariant = vehicle.variants?.find(v => v.title?.toLowerCase().includes('daily'));
  const weeklyVariant = vehicle.variants?.find(v => v.title?.toLowerCase().includes('weekly'));
  const monthlyVariant = vehicle.variants?.find(v => v.title?.toLowerCase().includes('monthly'));

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="group bg-white border border-gray-200 hover:border-[#1e7a1e] transition-colors duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={images[currentImageIndex]?.url || PLACEHOLDER}
          alt={vehicle.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 hover:bg-black transition-all opacity-0 group-hover:opacity-100" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 hover:bg-black transition-all opacity-0 group-hover:opacity-100" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
        {vehicle.ribbon_text && (
          <div className="absolute top-3 left-0 bg-[#1e7a1e] text-white font-condensed text-xs font-700 tracking-widest uppercase px-3 py-1.5">
            {vehicle.ribbon_text}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-condensed text-xl font-800 uppercase text-[#111] mb-1">{vehicle.title}</h3>
        {vehicle.subtitle && <p className="text-sm text-gray-500 mb-5">{vehicle.subtitle}</p>}

        <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
          {dailyVariant && (
            <div className="flex justify-between items-center">
              <span className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Daily</span>
              <span className="font-condensed text-sm font-700 text-[#111]">{dailyVariant.sale_price_formatted || dailyVariant.price_formatted}</span>
=======
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
=======
    <div className="group bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ede8]">
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
    <div className="group bg-white border border-gray-200 hover:border-[#1e7a1e] transition-colors duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
>>>>>>> 7a4c2f5 (bold urban redesign)
        <img
          src={images[currentImageIndex]?.url || PLACEHOLDER}
          alt={vehicle.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 hover:bg-black transition-all opacity-0 group-hover:opacity-100" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-1.5 hover:bg-black transition-all opacity-0 group-hover:opacity-100" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
        {vehicle.ribbon_text && (
          <div className="absolute top-3 left-0 bg-[#1e7a1e] text-white font-condensed text-xs font-700 tracking-widest uppercase px-3 py-1.5">
            {vehicle.ribbon_text}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-condensed text-xl font-800 uppercase text-[#111] mb-1">{vehicle.title}</h3>
        {vehicle.subtitle && <p className="text-sm text-gray-500 mb-5">{vehicle.subtitle}</p>}

        <div className="space-y-2 mb-6 border-t border-gray-100 pt-4">
          {dailyVariant && (
            <div className="flex justify-between items-center">
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="text-sm font-medium">Daily rate</span>
              <div className="text-right">
                {dailyVariant.sale_price_in_cents ? (
                  <>
                    <span className="text-sm line-through text-muted-foreground mr-2">
                      {dailyVariant.price_formatted}
                    </span>
                    <span className="font-semibold text-primary">
                      {dailyVariant.sale_price_formatted}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-primary">
                    {dailyVariant.price_formatted}
                  </span>
                )}
              </div>
>>>>>>> bd28705 (initial commit)
=======
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/40">Daily</span>
              <span className="text-sm font-medium text-[#1a2e1a]">
                {dailyVariant.sale_price_formatted || dailyVariant.price_formatted}
              </span>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
              <span className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Daily</span>
              <span className="font-condensed text-sm font-700 text-[#111]">{dailyVariant.sale_price_formatted || dailyVariant.price_formatted}</span>
>>>>>>> 7a4c2f5 (bold urban redesign)
            </div>
          )}
          {weeklyVariant && (
            <div className="flex justify-between items-center">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Weekly</span>
              <span className="font-condensed text-sm font-700 text-[#111]">{weeklyVariant.sale_price_formatted || weeklyVariant.price_formatted}</span>
=======
              <span className="text-sm font-medium">Weekly rate</span>
              <div className="text-right">
                {weeklyVariant.sale_price_in_cents ? (
                  <>
                    <span className="text-sm line-through text-muted-foreground mr-2">
                      {weeklyVariant.price_formatted}
                    </span>
                    <span className="font-semibold text-secondary">
                      {weeklyVariant.sale_price_formatted}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-secondary">
                    {weeklyVariant.price_formatted}
                  </span>
                )}
              </div>
>>>>>>> bd28705 (initial commit)
=======
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/40">Weekly</span>
              <span className="text-sm font-medium text-[#1a2e1a]">
                {weeklyVariant.sale_price_formatted || weeklyVariant.price_formatted}
              </span>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
              <span className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Weekly</span>
              <span className="font-condensed text-sm font-700 text-[#111]">{weeklyVariant.sale_price_formatted || weeklyVariant.price_formatted}</span>
>>>>>>> 7a4c2f5 (bold urban redesign)
            </div>
          )}
          {monthlyVariant && (
            <div className="flex justify-between items-center">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
              <span className="font-condensed text-xs font-600 tracking-widest uppercase text-gray-400">Monthly</span>
              <span className="font-condensed text-sm font-700 text-[#111]">{monthlyVariant.sale_price_formatted || monthlyVariant.price_formatted}</span>
            </div>
          )}
        </div>

        <Link to="/booking" state={{ selectedVehicle: vehicle }} className="block">
          <button className="w-full font-condensed text-xs font-700 tracking-widest uppercase py-3 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
            Reserve Now
          </button>
        </Link>
<<<<<<< HEAD
      </div>
    </div>
=======
              <span className="text-sm font-medium">Monthly rate</span>
              <div className="text-right">
                {monthlyVariant.sale_price_in_cents ? (
                  <>
                    <span className="text-sm line-through text-muted-foreground mr-2">
                      {monthlyVariant.price_formatted}
                    </span>
                    <span className="font-semibold text-accent">
                      {monthlyVariant.sale_price_formatted}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-accent">
                    {monthlyVariant.price_formatted}
                  </span>
                )}
              </div>
=======
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/40">Monthly</span>
              <span className="text-sm font-medium text-[#1a2e1a]">
                {monthlyVariant.sale_price_formatted || monthlyVariant.price_formatted}
              </span>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            </div>
          )}
        </div>

<<<<<<< HEAD
      <CardFooter className="mt-auto">
        <Link to="/booking" state={{ selectedVehicle: vehicle }} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Book now
          </Button>
        </Link>
      </CardFooter>
    </Card>
>>>>>>> bd28705 (initial commit)
=======
        <div className="border-t border-[#e8ede8] pt-5">
          <Link to="/booking" state={{ selectedVehicle: vehicle }} className="w-full">
            <button className="w-full text-[0.65rem] tracking-[0.2em] uppercase font-medium py-3 border border-[#1e3d1e] text-[#1e3d1e] hover:bg-[#1e3d1e] hover:text-white transition-all duration-300">
              Reserve
            </button>
          </Link>
        </div>
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
      </div>
    </div>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
  );
}
