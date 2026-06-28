<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, Shield, Clock, Zap, Star, Phone } from 'lucide-react';
=======
import { ArrowRight, Bike, Car, Zap, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
>>>>>>> bd28705 (initial commit)
=======
import { ArrowRight, Shield, Clock, Zap, Star } from 'lucide-react';
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
import { ArrowRight, Shield, Clock, Zap, Star, Phone } from 'lucide-react';
>>>>>>> 7a4c2f5 (bold urban redesign)
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import IntegratedAiChatWidget from '@/components/IntegratedAiChatWidget.jsx';
import { getProducts } from '@/api/EcommerceApi.js';

export default function HomePage() {
  const [featuredVehicles, setFeaturedVehicles] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    async function load() {
      try {
        const res = await getProducts({ limit: '3', sort_by: 'order', order: 'ASC' });
        setFeaturedVehicles(res.products);
      } catch (e) { console.error(e); }
    }
    load();
  }, []);

  const testimonials = [
    { name: 'Sarah M.', rating: 5, text: 'Super professional and great communication. Our truck was awesome and perfect for getting around the island. Rose lined up our delivery and drop-off very easily — highly recommend!' },
    { name: 'Marco R.', rating: 5, text: 'I rented an enduro bike and it was great. The owners are really friendly and the motorcycle was in superb condition. Located right by the airport. Prices are very good. 100% recommend!' },
    { name: 'James T.', rating: 5, text: 'Very positive experience from start to finish. Simple booking, clear pricing, no hidden fees. Staff were friendly and efficient. Vehicle was clean, comfortable, and well-maintained.' },
=======
    async function loadFeaturedVehicles() {
=======
    async function load() {
>>>>>>> 7a4c2f5 (bold urban redesign)
      try {
        const res = await getProducts({ limit: '3', sort_by: 'order', order: 'ASC' });
        setFeaturedVehicles(res.products);
      } catch (e) { console.error(e); }
    }
    load();
  }, []);

  const testimonials = [
<<<<<<< HEAD
    {
      name: 'Sarah M.',
      location: 'Google Review',
      rating: 5,
      text: 'We had a great experience start to finish with Rose! Super professional and great communication. Our truck was awesome and perfect for getting around the island. Rose lined up our delivery and drop-off very easily — highly recommend renting through this company, we will do it again for sure!',
    },
    {
      name: 'Marco R.',
      location: 'Google Review',
      rating: 5,
      text: 'I rented an enduro bike from this place, and it was great. The owners are really friendly and the motorcycle was in superb condition. A huge plus is that they\'re located right by the airport. The prices are very good too. 100% recommend!',
    },
    {
      name: 'James T.',
      location: 'Google Review',
      rating: 5,
      text: 'I recently rented a car and had a very positive experience from start to finish. The booking process was simple and straightforward, with clear pricing and no hidden fees. The staff were friendly, professional, and efficient. The vehicle was in excellent condition — clean, comfortable, and well-maintained.',
    },
>>>>>>> bd28705 (initial commit)
=======
    { name: 'Sarah M.', rating: 5, text: 'Super professional and great communication. Our truck was awesome and perfect for getting around the island. Rose lined up our delivery and drop-off very easily — highly recommend!' },
    { name: 'Marco R.', rating: 5, text: 'I rented an enduro bike and it was great. The owners are really friendly and the motorcycle was in superb condition. Located right by the airport. Prices are very good. 100% recommend!' },
    { name: 'James T.', rating: 5, text: 'Very positive experience from start to finish. Simple booking, clear pricing, no hidden fees. Staff were friendly and efficient. Vehicle was clean, comfortable, and well-maintained.' },
>>>>>>> 7a4c2f5 (bold urban redesign)
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Siargao Rose Rentals — Bikes, Scooters & Cars in Siargao</title>
        <meta name="description" content="Premium bike, scooter and car rentals on Siargao Island. Book online and save 5%. Located near the airport." />
=======
        <title>Siargao Rose - Bike, Scooter & Car Rentals in Siargao Island</title>
        <meta
          name="description"
          content="Rent bikes, scooters, and cars in Siargao Island. Online booking discounts, long-term rental deals, and fully insured vehicles. Book now!"
        />
>>>>>>> bd28705 (initial commit)
=======
        <title>Siargao Rose — Premium Vehicle Rentals in Siargao</title>
        <meta name="description" content="The premier bike, scooter and car rental experience on Siargao Island. Book online for exclusive discounts." />
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
        <title>Siargao Rose Rentals — Bikes, Scooters & Cars in Siargao</title>
        <meta name="description" content="Premium bike, scooter and car rentals on Siargao Island. Book online and save 5%. Located near the airport." />
>>>>>>> 7a4c2f5 (bold urban redesign)
      </Helmet>

      <Header />

      <main>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
        {/* HERO */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/1st.jpg" alt="Siargao Rose Rentals" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
<<<<<<< HEAD
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pb-24 pt-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-[#1e7a1e] px-3 py-1.5 mb-6">
                <span className="font-condensed text-xs font-700 tracking-widest uppercase text-white">5% Off Online Bookings</span>
              </div>
              <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl font-900 uppercase text-white leading-none mb-6">
                Ride<br />
                <span className="text-[#1e7a1e]">Siargao</span><br />
                Your Way
              </h1>
              <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
                Premium bikes, scooters & cars for rent. Near the airport. Best prices on the island. No hidden fees.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
                    Book Now — Save 5%
                  </button>
                </Link>
                <a href="https://wa.me/639162820491" target="_blank" rel="noopener noreferrer">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#111] transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> WhatsApp Us
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Fleet quick links */}
          <div className="absolute bottom-0 right-0 z-10 hidden md:flex">
            {[['Bikes', '/bikes'], ['Scooters', '/scooters'], ['Cars', '/cars']].map(([label, path]) => (
              <Link key={path} to={path} className="group flex items-center gap-2 bg-white/10 hover:bg-[#1e7a1e] backdrop-blur-sm px-8 py-5 border-l border-white/20 transition-all duration-300">
                <span className="font-condensed text-sm font-700 tracking-widest uppercase text-white">{label}</span>
                <ArrowRight className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#1e7a1e] py-5">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
              {[['5%', 'Online Discount'], ['15%', 'Monthly Savings'], ['24/7', 'WhatsApp Support'], ['★ 5.0', 'Google Rating']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-condensed text-2xl font-900 text-white">{val}</p>
                  <p className="font-condensed text-xs tracking-widest uppercase text-white/70 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-3 gap-3">
              {['/1st.jpg', '/2nd.jpg', '/3rd.jpg'].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] overflow-hidden bg-gray-100"
                >
                  <img src={src} alt={`Siargao Rose fleet ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
=======
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
=======
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/1st.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#0d1f0d]/60" />
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pb-24 pt-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-[#1e7a1e] px-3 py-1.5 mb-6">
                <span className="font-condensed text-xs font-700 tracking-widest uppercase text-white">5% Off Online Bookings</span>
              </div>
              <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl font-900 uppercase text-white leading-none mb-6">
                Ride<br />
                <span className="text-[#1e7a1e]">Siargao</span><br />
                Your Way
              </h1>
              <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
                Premium bikes, scooters & cars for rent. Near the airport. Best prices on the island. No hidden fees.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
                    Book Now — Save 5%
                  </button>
                </Link>
                <a href="https://wa.me/639162820491" target="_blank" rel="noopener noreferrer">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#111] transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> WhatsApp Us
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Fleet quick links */}
          <div className="absolute bottom-0 right-0 z-10 hidden md:flex">
            {[['Bikes', '/bikes'], ['Scooters', '/scooters'], ['Cars', '/cars']].map(([label, path]) => (
              <Link key={path} to={path} className="group flex items-center gap-2 bg-white/10 hover:bg-[#1e7a1e] backdrop-blur-sm px-8 py-5 border-l border-white/20 transition-all duration-300">
                <span className="font-condensed text-sm font-700 tracking-widest uppercase text-white">{label}</span>
                <ArrowRight className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#1e7a1e] py-5">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
              {[['5%', 'Online Discount'], ['15%', 'Monthly Savings'], ['24/7', 'WhatsApp Support'], ['★ 5.0', 'Google Rating']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-condensed text-2xl font-900 text-white">{val}</p>
                  <p className="font-condensed text-xs tracking-widest uppercase text-white/70 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="grid grid-cols-3 gap-3">
              {['/1st.jpg', '/2nd.jpg', '/3rd.jpg'].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] overflow-hidden bg-gray-100"
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
>>>>>>> bd28705 (initial commit)
=======
                  <img src={src} alt={`Siargao Rose fleet ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
                  <img src={src} alt={`Siargao Rose fleet ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
>>>>>>> 7a4c2f5 (bold urban redesign)
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
        {/* Why us */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="mb-12">
              <p className="font-condensed text-xs font-700 tracking-widest uppercase text-[#1e7a1e] mb-3">Why Siargao Rose</p>
              <h2 className="font-condensed text-5xl md:text-6xl font-900 uppercase text-[#111] leading-none">
                The Island's<br />Best Rental
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: 'Book Online, Save 5%', desc: 'Reserve through our website and get an instant 5% discount on any vehicle.' },
                { icon: Clock, title: 'Long-Term Deals', desc: 'Renting for a week or month? Save up to 15% with our extended rental rates.' },
                { icon: Shield, title: 'Near the Airport', desc: 'Located right by the airport — pick up your ride the moment you land.' },
              ].map((f, i) => (
<<<<<<< HEAD
=======
        {/* Features */}
        <section className="py-24 bg-[#f0f4f0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d5e0d5]">
              {features.map((f, i) => (
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t-4 border-[#1e7a1e]"
                >
                  <f.icon className="h-6 w-6 text-[#1e7a1e] mb-5" />
                  <h3 className="font-condensed text-xl font-800 uppercase text-[#111] mb-3">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
=======
                  transition={{ duration: 0.6, delay: i * 0.1 }}
=======
                  transition={{ duration: 0.5, delay: i * 0.1 }}
>>>>>>> 7a4c2f5 (bold urban redesign)
                  viewport={{ once: true }}
                  className="bg-white p-8 border-t-4 border-[#1e7a1e]"
                >
<<<<<<< HEAD
                  <f.icon className="h-5 w-5 text-[#1e3d1e] mb-8" />
                  <p className="font-display text-4xl font-light text-[#1a2e1a] mb-2">{f.value}</p>
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#1e3d1e] mb-4">{f.label}</p>
                  <p className="text-sm font-light text-[#1a2e1a]/55 leading-relaxed">{f.description}</p>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
                  <f.icon className="h-6 w-6 text-[#1e7a1e] mb-5" />
                  <h3 className="font-condensed text-xl font-800 uppercase text-[#111] mb-3">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
>>>>>>> 7a4c2f5 (bold urban redesign)
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Featured vehicles */}
        {featuredVehicles.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="font-condensed text-xs font-700 tracking-widest uppercase text-[#1e7a1e] mb-3">Our Fleet</p>
                  <h2 className="font-condensed text-5xl md:text-6xl font-900 uppercase text-[#111] leading-none">Top Picks</h2>
                </div>
                <Link to="/bikes" className="hidden md:flex items-center gap-2 font-condensed text-sm font-700 tracking-widest uppercase text-[#111] hover:text-[#1e7a1e] transition-colors">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
=======
        {featuredVehicles.length > 0 && (
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured vehicles</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Check out our most popular rentals
                </p>
              </div>
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)

        {/* Featured vehicles */}
        {featuredVehicles.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5 lg:px-10">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="font-condensed text-xs font-700 tracking-widest uppercase text-[#1e7a1e] mb-3">Our Fleet</p>
                  <h2 className="font-condensed text-5xl md:text-6xl font-900 uppercase text-[#111] leading-none">Top Picks</h2>
                </div>
                <Link to="/bikes" className="hidden md:flex items-center gap-2 font-condensed text-sm font-700 tracking-widest uppercase text-[#111] hover:text-[#1e7a1e] transition-colors">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
<<<<<<< HEAD
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> bd28705 (initial commit)
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
>>>>>>> 7a4c2f5 (bold urban redesign)
                {featuredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    className="group bg-[#f5f5f5]"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                      <img src={vehicle.image} alt={vehicle.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-condensed text-xl font-800 uppercase text-[#111] mb-1">{vehicle.title}</h3>
                      <p className="text-sm text-gray-500 mb-5">{vehicle.subtitle}</p>
                      <Link to="/booking" state={{ selectedVehicle: vehicle }}>
                        <button className="font-condensed text-xs font-700 tracking-widest uppercase px-5 py-2.5 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
                          Reserve
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
=======
=======
                    className="group"
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
                    className="group bg-[#f5f5f5]"
>>>>>>> 7a4c2f5 (bold urban redesign)
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                      <img src={vehicle.image} alt={vehicle.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-condensed text-xl font-800 uppercase text-[#111] mb-1">{vehicle.title}</h3>
                      <p className="text-sm text-gray-500 mb-5">{vehicle.subtitle}</p>
                      <Link to="/booking" state={{ selectedVehicle: vehicle }}>
                        <button className="font-condensed text-xs font-700 tracking-widest uppercase px-5 py-2.5 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
                          Reserve
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
<<<<<<< HEAD

              <div className="text-center mt-12">
                <Link to="/bikes">
                  <Button variant="outline" size="lg">
                    View all vehicles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            </div>
          </section>
        )}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
        {/* Google Reviews */}
        <section className="py-20 bg-[#111]">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="mb-12">
              <p className="font-condensed text-xs font-700 tracking-widest uppercase text-[#1e7a1e] mb-3">Google Reviews</p>
              <h2 className="font-condensed text-5xl md:text-6xl font-900 uppercase text-white leading-none">
                What Riders Say
<<<<<<< HEAD
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-[#f5a623] text-[#f5a623]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-condensed text-sm font-700 uppercase text-white">{t.name}</p>
                    <p className="font-condensed text-xs tracking-widest uppercase text-white/40 mt-1">Google Review</p>
                  </div>
=======
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What our customers say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real experiences from travelers who rented with us
              </p>
=======
        {/* Google Reviews Testimonials */}
        <section className="py-28 bg-[#1a2e1a]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-white/40 mb-4">Google Reviews</p>
              <h2 className="font-display text-5xl font-light text-white" style={{ letterSpacing: '-0.01em' }}>
                What our guests say
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
              </h2>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8"
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{testimonial.text}</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
>>>>>>> bd28705 (initial commit)
=======
                  <div className="flex gap-1 mb-6">
=======
                  <div className="flex gap-1 mb-4">
>>>>>>> 7a4c2f5 (bold urban redesign)
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-[#f5a623] text-[#f5a623]" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-condensed text-sm font-700 uppercase text-white">{t.name}</p>
                    <p className="font-condensed text-xs tracking-widest uppercase text-white/40 mt-1">Google Review</p>
                  </div>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* CTA */}
        <section className="py-20 bg-[#1e7a1e]">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-condensed text-5xl md:text-6xl font-900 uppercase text-white leading-none">
                  Ready to Ride?
                </h2>
                <p className="text-white/70 mt-3">Book online today and save 5% instantly.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 bg-white text-[#1e7a1e] hover:bg-gray-100 transition-colors">
                    Book Now
                  </button>
                </Link>
                <a href="https://wa.me/639162820491" target="_blank" rel="noopener noreferrer">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +63 916 282 0491
                  </button>
                </a>
              </div>
            </div>
=======
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to explore Siargao?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              Book your vehicle today and get instant online booking discount
            </p>
=======
        {/* CTA */}
<<<<<<< HEAD
        <section className="py-32 bg-[#fafaf8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#1e3d1e]/60 mb-6">Begin Your Journey</p>
            <h2 className="font-display text-6xl md:text-7xl font-light text-[#1a2e1a] mb-10" style={{ letterSpacing: '-0.01em' }}>
              Ready to explore
              <br />
              <em>Siargao?</em>
            </h2>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            <Link to="/booking">
              <button className="text-[0.7rem] tracking-[0.15em] uppercase font-medium px-12 py-4 bg-[#1e3d1e] text-white hover:bg-[#1a2e1a] transition-all duration-300">
                Reserve Your Vehicle
              </button>
            </Link>
>>>>>>> bd28705 (initial commit)
=======
        <section className="py-20 bg-[#1e7a1e]">
          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-condensed text-5xl md:text-6xl font-900 uppercase text-white leading-none">
                  Ready to Ride?
                </h2>
                <p className="text-white/70 mt-3">Book online today and save 5% instantly.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 bg-white text-[#1e7a1e] hover:bg-gray-100 transition-colors">
                    Book Now
                  </button>
                </Link>
                <a href="https://wa.me/639162820491" target="_blank" rel="noopener noreferrer">
                  <button className="font-condensed text-sm font-700 tracking-widest uppercase px-8 py-4 border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +63 916 282 0491
                  </button>
                </a>
              </div>
            </div>
>>>>>>> 7a4c2f5 (bold urban redesign)
          </div>
        </section>
      </main>

      <Footer />
      <IntegratedAiChatWidget />
    </>
  );
}
