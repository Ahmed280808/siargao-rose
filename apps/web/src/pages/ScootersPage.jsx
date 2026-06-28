<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import VehicleCard from '@/components/VehicleCard.jsx';
import VehicleFilter from '@/components/VehicleFilter.jsx';
import { getProducts } from '@/api/EcommerceApi.js';
import { Skeleton } from '@/components/ui/skeleton.jsx';

export default function ScootersPage() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
<<<<<<< HEAD
  const [filters, setFilters] = useState({ sortBy: 'price-low', priceRange: [0, 5000], availableOnly: false });

  useEffect(() => {
    async function load() {
<<<<<<< HEAD
      try {
        const res = await getProducts({ exclude_types: 'subscription' });
        const items = res.products.filter(p => p.title?.toLowerCase().includes('scooter') || p.subtitle?.toLowerCase().includes('scooter'));
        setVehicles(items);
        setFilteredVehicles(items);
      } catch (e) { console.error(e); } finally { setLoading(false); }
    }
    load();
=======
  const [filters, setFilters] = useState({
    sortBy: 'price-low',
    priceRange: [0, 5000],
    availableOnly: false,
  });
=======
  const [filters, setFilters] = useState({ sortBy: 'price-low', priceRange: [0, 5000], availableOnly: false });
>>>>>>> 30692b7 (premium redesign with real photos and reviews)

  useEffect(() => {
    async function loadVehicles() {
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
      try {
        const res = await getProducts({ exclude_types: 'subscription' });
        const items = res.products.filter(p => p.title?.toLowerCase().includes('scooter') || p.subtitle?.toLowerCase().includes('scooter'));
        setVehicles(items);
        setFilteredVehicles(items);
      } catch (e) { console.error(e); } finally { setLoading(false); }
    }
<<<<<<< HEAD
    loadVehicles();
>>>>>>> bd28705 (initial commit)
=======
    load();
>>>>>>> 7a4c2f5 (bold urban redesign)
  }, []);

  useEffect(() => {
    let filtered = [...vehicles];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
    const dailyPrice = (v) => { const d = v.variants?.find(x => x.title?.toLowerCase().includes('daily')); return d ? d.sale_price_in_cents || d.price_in_cents : 0; };
    filtered = filtered.filter(v => { const p = dailyPrice(v) / 100; return p >= filters.priceRange[0] && p <= filters.priceRange[1]; });
    if (filters.sortBy === 'price-low') filtered.sort((a, b) => dailyPrice(a) - dailyPrice(b));
    else if (filters.sortBy === 'price-high') filtered.sort((a, b) => dailyPrice(b) - dailyPrice(a));
<<<<<<< HEAD
    else if (filters.sortBy === 'name') filtered.sort((a, b) => a.title.localeCompare(b.title));
=======

    const dailyVariantPrice = (vehicle) => {
      const dailyVariant = vehicle.variants?.find((v) => v.title?.toLowerCase().includes('daily'));
      return dailyVariant ? dailyVariant.sale_price_in_cents || dailyVariant.price_in_cents : 0;
=======
    const dailyVariantPrice = (v) => {
      const d = v.variants?.find((x) => x.title?.toLowerCase().includes('daily'));
      return d ? d.sale_price_in_cents || d.price_in_cents : 0;
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
    };
    filtered = filtered.filter((v) => {
      const price = dailyVariantPrice(v) / 100;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });
<<<<<<< HEAD

    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => dailyVariantPrice(a) - dailyVariantPrice(b));
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => dailyVariantPrice(b) - dailyVariantPrice(a));
    } else if (filters.sortBy === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

>>>>>>> bd28705 (initial commit)
=======
    if (filters.sortBy === 'price-low') filtered.sort((a, b) => dailyVariantPrice(a) - dailyVariantPrice(b));
    else if (filters.sortBy === 'price-high') filtered.sort((a, b) => dailyVariantPrice(b) - dailyVariantPrice(a));
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
    else if (filters.sortBy === 'name') filtered.sort((a, b) => a.title.localeCompare(b.title));
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
    setFilteredVehicles(filtered);
  }, [filters, vehicles]);

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Scooters for Rent — Siargao Rose Rentals</title>
        <meta name="description" content="Rent scooters on Siargao Island. Best prices, near the airport. Book online and save 5%." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-12 bg-[#111]">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <p className="font-condensed text-xs font-700 tracking-widest uppercase text-[#1e7a1e] mb-3">Our Fleet</p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-condensed text-6xl md:text-7xl font-900 uppercase text-white leading-none">
              Scooters
            </motion.h1>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
=======
        <title>Scooter Rentals in Siargao - Siargao Rose</title>
        <meta
          name="description"
          content="Rent scooters in Siargao Island. Daily, weekly, and monthly rates available with online booking discounts. Browse our selection now!"
        />
=======
        <title>Scooters — Siargao Rose</title>
        <meta name="description" content="Premium scooters for rent on Siargao Island. Daily, weekly and monthly rates available." />
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
        <title>Scooters for Rent — Siargao Rose Rentals</title>
        <meta name="description" content="Rent scooters on Siargao Island. Best prices, near the airport. Book online and save 5%." />
>>>>>>> 7a4c2f5 (bold urban redesign)
      </Helmet>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-12 bg-[#111]">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <p className="font-condensed text-xs font-700 tracking-widest uppercase text-[#1e7a1e] mb-3">Our Fleet</p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-condensed text-6xl md:text-7xl font-900 uppercase text-white leading-none">
              Scooters
            </motion.h1>
          </div>
        </section>
<<<<<<< HEAD

<<<<<<< HEAD
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> bd28705 (initial commit)
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <aside className="lg:col-span-1">
                <VehicleFilter filters={filters} onFilterChange={setFilters} />
              </aside>
<<<<<<< HEAD
              <div className="lg:col-span-3">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {[...Array(6)].map((_, i) => <div key={i} className="space-y-3"><Skeleton className="aspect-[4/3] w-full" /><Skeleton className="h-5 w-3/4" /><Skeleton className="h-10 w-full" /></div>)}
                  </div>
                ) : filteredVehicles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredVehicles.map((vehicle, index) => (
                      <motion.div key={vehicle.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
=======

=======
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
=======
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
>>>>>>> 7a4c2f5 (bold urban redesign)
              <aside className="lg:col-span-1">
                <VehicleFilter filters={filters} onFilterChange={setFilters} />
              </aside>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
              <div className="lg:col-span-3">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {[...Array(6)].map((_, i) => <div key={i} className="space-y-3"><Skeleton className="aspect-[4/3] w-full" /><Skeleton className="h-5 w-3/4" /><Skeleton className="h-10 w-full" /></div>)}
                  </div>
                ) : filteredVehicles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {filteredVehicles.map((vehicle, index) => (
<<<<<<< HEAD
                      <motion.div
                        key={vehicle.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
>>>>>>> bd28705 (initial commit)
=======
                      <motion.div key={vehicle.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
>>>>>>> 7a4c2f5 (bold urban redesign)
                        <VehicleCard vehicle={vehicle} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="text-center py-20">
                    <p className="font-condensed text-lg font-700 uppercase text-gray-400">No scooters found matching your filters.</p>
=======
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No scooters found matching your filters.</p>
>>>>>>> bd28705 (initial commit)
=======
                  <div className="text-center py-20">
<<<<<<< HEAD
                    <p className="text-sm font-light text-[#1a2e1a]/40">No scooters found matching your filters.</p>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
                    <p className="font-condensed text-lg font-700 uppercase text-gray-400">No scooters found matching your filters.</p>
>>>>>>> 7a4c2f5 (bold urban redesign)
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
      <Footer />
    </>
  );
}
