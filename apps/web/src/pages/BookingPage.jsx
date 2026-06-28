<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BookingSummary from '@/components/BookingSummary.jsx';
import IntegratedAiChatWidget from '@/components/IntegratedAiChatWidget.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Button } from '@/components/ui/button.jsx';
>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.jsx';
import { Calendar } from '@/components/ui/calendar.jsx';
import { getProducts, initializeCheckout } from '@/api/EcommerceApi.js';
import { cn } from '@/lib/utils.js';
import { toast } from '@/hooks/use-toast.js';

export default function BookingPage() {
  const location = useLocation();
  const preSelectedVehicle = location.state?.selectedVehicle;

  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(preSelectedVehicle || null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [discounts, setDiscounts] = useState({ online: 5, longTerm: 0 });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    async function loadVehicles() {
      try {
        const response = await getProducts({ exclude_types: 'subscription' });
        setVehicles(response.products);
<<<<<<< HEAD
<<<<<<< HEAD
      } catch (error) { console.error('Failed to load vehicles:', error); }
=======
      } catch (error) {
        console.error('Failed to load vehicles:', error);
      }
>>>>>>> bd28705 (initial commit)
=======
      } catch (error) { console.error('Failed to load vehicles:', error); }
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
    }
    loadVehicles();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    if (selectedVehicle?.variants?.length > 0) setSelectedVariant(selectedVehicle.variants[0]);
=======
    if (selectedVehicle && selectedVehicle.variants?.length > 0) {
      setSelectedVariant(selectedVehicle.variants[0]);
    }
>>>>>>> bd28705 (initial commit)
=======
    if (selectedVehicle?.variants?.length > 0) setSelectedVariant(selectedVehicle.variants[0]);
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
  }, [selectedVehicle]);

  useEffect(() => {
    if (pickupDate && returnDate) {
      const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
<<<<<<< HEAD
<<<<<<< HEAD
      setDiscounts({ online: 5, longTerm: days >= 30 ? 15 : days >= 7 ? 10 : 0 });
    }
  }, [pickupDate, returnDate]);

  const handleVehicleChange = (vehicleId) => setSelectedVehicle(vehicles.find((v) => v.id === vehicleId));
  const handleVariantChange = (variantId) => setSelectedVariant(selectedVehicle?.variants?.find((v) => v.id === variantId));

  const handleCheckout = async () => {
    if (!selectedVehicle || !selectedVariant) { toast({ variant: 'destructive', title: 'Select a vehicle and rental period.' }); return; }
    if (!pickupDate || !returnDate) { toast({ variant: 'destructive', title: 'Select pickup and return dates.' }); return; }
    setIsProcessing(true);
    try {
      const { url } = await initializeCheckout({ items: [{ variant_id: selectedVariant.id, quantity: 1 }], successUrl: `${window.location.origin}/success`, cancelUrl: `${window.location.origin}/booking` });
      window.open(url, '_blank');
    } catch { toast({ variant: 'destructive', title: 'Checkout error', description: 'Please try again.' }); }
    finally { setIsProcessing(false); }
  };

  const dateButtonClass = (date) => cn(
    'w-full justify-start text-left font-light text-sm h-10 rounded-none border-[#e8ede8] text-[#1a2e1a]',
    !date && 'text-[#1a2e1a]/40'
  );
=======
      let longTermDiscount = 0;
      if (days >= 30) {
        longTermDiscount = 15;
      } else if (days >= 7) {
        longTermDiscount = 10;
      }
      setDiscounts({ online: 5, longTerm: longTermDiscount });
=======
      setDiscounts({ online: 5, longTerm: days >= 30 ? 15 : days >= 7 ? 10 : 0 });
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
    }
  }, [pickupDate, returnDate]);

  const handleVehicleChange = (vehicleId) => setSelectedVehicle(vehicles.find((v) => v.id === vehicleId));
  const handleVariantChange = (variantId) => setSelectedVariant(selectedVehicle?.variants?.find((v) => v.id === variantId));

  const handleCheckout = async () => {
    if (!selectedVehicle || !selectedVariant) { toast({ variant: 'destructive', title: 'Select a vehicle and rental period.' }); return; }
    if (!pickupDate || !returnDate) { toast({ variant: 'destructive', title: 'Select pickup and return dates.' }); return; }
    setIsProcessing(true);
    try {
      const { url } = await initializeCheckout({ items: [{ variant_id: selectedVariant.id, quantity: 1 }], successUrl: `${window.location.origin}/success`, cancelUrl: `${window.location.origin}/booking` });
      window.open(url, '_blank');
    } catch { toast({ variant: 'destructive', title: 'Checkout error', description: 'Please try again.' }); }
    finally { setIsProcessing(false); }
  };
>>>>>>> bd28705 (initial commit)

  const dateButtonClass = (date) => cn(
    'w-full justify-start text-left font-light text-sm h-10 rounded-none border-[#e8ede8] text-[#1a2e1a]',
    !date && 'text-[#1a2e1a]/40'
  );

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Reserve — Siargao Rose</title>
        <meta name="description" content="Book your premium vehicle rental on Siargao Island." />
=======
        <title>Book Your Rental - Siargao Rose</title>
        <meta
          name="description"
          content="Book your bike, scooter, or car rental in Siargao. Get instant online booking discount and long-term rental deals."
        />
>>>>>>> bd28705 (initial commit)
=======
        <title>Reserve — Siargao Rose</title>
        <meta name="description" content="Book your premium vehicle rental on Siargao Island." />
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
      </Helmet>

      <Header />

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
      <main className="min-h-screen bg-[#fafaf8]">
        <section className="pt-40 pb-20 bg-[#f0f4f0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#1e3d1e]/60 mb-4">Reservation</p>
<<<<<<< HEAD
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-6xl md:text-7xl font-light text-[#1a2e1a]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Book your vehicle
            </motion.h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white border border-[#e8ede8] p-10">
                  <h2 className="font-display text-2xl font-light text-[#1a2e1a] mb-8">Rental details</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">Select vehicle</label>
                      <Select value={selectedVehicle?.id} onValueChange={handleVehicleChange}>
                        <SelectTrigger className="rounded-none border-[#e8ede8] text-[#1a2e1a] font-light text-sm h-10">
                          <SelectValue placeholder="Choose a vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicles.map((v) => <SelectItem key={v.id} value={v.id}>{v.title}</SelectItem>)}
=======
      <main className="min-h-screen bg-background">
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-6xl md:text-7xl font-light text-[#1a2e1a]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Book your vehicle
            </motion.h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white border border-[#e8ede8] p-10">
                  <h2 className="font-display text-2xl font-light text-[#1a2e1a] mb-8">Rental details</h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">Select vehicle</label>
                      <Select value={selectedVehicle?.id} onValueChange={handleVehicleChange}>
                        <SelectTrigger className="rounded-none border-[#e8ede8] text-[#1a2e1a] font-light text-sm h-10">
                          <SelectValue placeholder="Choose a vehicle" />
                        </SelectTrigger>
                        <SelectContent>
<<<<<<< HEAD
                          {vehicles.map((vehicle) => (
                            <SelectItem key={vehicle.id} value={vehicle.id}>
                              {vehicle.title}
                            </SelectItem>
                          ))}
>>>>>>> bd28705 (initial commit)
=======
                          {vehicles.map((v) => <SelectItem key={v.id} value={v.id}>{v.title}</SelectItem>)}
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                        </SelectContent>
                      </Select>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
                    {selectedVehicle?.variants?.length > 0 && (
                      <div className="space-y-2">
                        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">Rental period</label>
                        <Select value={selectedVariant?.id} onValueChange={handleVariantChange}>
                          <SelectTrigger className="rounded-none border-[#e8ede8] text-[#1a2e1a] font-light text-sm h-10">
                            <SelectValue placeholder="Choose rental period" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedVehicle.variants.map((v) => (
                              <SelectItem key={v.id} value={v.id}>{v.title} — {v.sale_price_formatted || v.price_formatted}</SelectItem>
=======
                    {selectedVehicle && selectedVehicle.variants?.length > 0 && (
=======
                    {selectedVehicle?.variants?.length > 0 && (
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                      <div className="space-y-2">
                        <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">Rental period</label>
                        <Select value={selectedVariant?.id} onValueChange={handleVariantChange}>
                          <SelectTrigger className="rounded-none border-[#e8ede8] text-[#1a2e1a] font-light text-sm h-10">
                            <SelectValue placeholder="Choose rental period" />
                          </SelectTrigger>
                          <SelectContent>
<<<<<<< HEAD
                            {selectedVehicle.variants.map((variant) => (
                              <SelectItem key={variant.id} value={variant.id}>
                                {variant.title} - {variant.sale_price_formatted || variant.price_formatted}
                              </SelectItem>
>>>>>>> bd28705 (initial commit)
=======
                            {selectedVehicle.variants.map((v) => (
                              <SelectItem key={v.id} value={v.id}>{v.title} — {v.sale_price_formatted || v.price_formatted}</SelectItem>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[['Pickup date', pickupDate, setPickupDate, (d) => d < new Date()], ['Return date', returnDate, setReturnDate, (d) => !pickupDate || d <= pickupDate]].map(([lbl, date, setDate, disabled]) => (
                        <div key={lbl} className="space-y-2">
                          <label className="text-[0.65rem] tracking-[0.15em] uppercase text-[#1a2e1a]/50">{lbl}</label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button className={cn('flex items-center gap-2 w-full border border-[#e8ede8] px-3 h-10 text-sm font-light', !date && 'text-[#1a2e1a]/40', date && 'text-[#1a2e1a]')}>
                                <CalendarIcon className="h-3.5 w-3.5 flex-shrink-0" />
                                {date ? format(date, 'PPP') : 'Select date'}
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} disabled={disabled} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>
                      ))}
<<<<<<< HEAD
=======
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Pickup date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                'w-full justify-start text-left font-normal text-foreground',
                                !pickupDate && 'text-muted-foreground'
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {pickupDate ? format(pickupDate, 'PPP') : 'Pick a date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={pickupDate}
                              onSelect={setPickupDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Return date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                'w-full justify-start text-left font-normal text-foreground',
                                !returnDate && 'text-muted-foreground'
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {returnDate ? format(returnDate, 'PPP') : 'Pick a date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={returnDate}
                              onSelect={setReturnDate}
                              disabled={(date) => !pickupDate || date <= pickupDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                    </div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
              <div className="lg:col-span-1 space-y-5">
                <BookingSummary vehicle={selectedVehicle} variant={selectedVariant} pickupDate={pickupDate ? format(pickupDate, 'PPP') : null} returnDate={returnDate ? format(returnDate, 'PPP') : null} discounts={discounts} />
                <button
                  onClick={handleCheckout}
                  disabled={!selectedVehicle || !selectedVariant || !pickupDate || !returnDate || isProcessing}
                  className="w-full text-[0.7rem] tracking-[0.15em] uppercase font-medium py-4 bg-[#1e3d1e] text-white hover:bg-[#1a2e1a] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing…' : 'Proceed to Checkout'}
                </button>
=======
              <div className="lg:col-span-1">
                <BookingSummary
                  vehicle={selectedVehicle}
                  variant={selectedVariant}
                  pickupDate={pickupDate ? format(pickupDate, 'PPP') : null}
                  returnDate={returnDate ? format(returnDate, 'PPP') : null}
                  discounts={discounts}
                />

                <Button
=======
              <div className="lg:col-span-1 space-y-5">
                <BookingSummary vehicle={selectedVehicle} variant={selectedVariant} pickupDate={pickupDate ? format(pickupDate, 'PPP') : null} returnDate={returnDate ? format(returnDate, 'PPP') : null} discounts={discounts} />
                <button
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                  onClick={handleCheckout}
                  disabled={!selectedVehicle || !selectedVariant || !pickupDate || !returnDate || isProcessing}
                  className="w-full text-[0.7rem] tracking-[0.15em] uppercase font-medium py-4 bg-[#1e3d1e] text-white hover:bg-[#1a2e1a] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
<<<<<<< HEAD
                  {isProcessing ? 'Processing...' : 'Proceed to checkout'}
                </Button>
>>>>>>> bd28705 (initial commit)
=======
                  {isProcessing ? 'Processing…' : 'Proceed to Checkout'}
                </button>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <IntegratedAiChatWidget />
    </>
  );
}
