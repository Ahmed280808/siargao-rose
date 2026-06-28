<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
<<<<<<< HEAD

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
=======

import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePalm } from 'lucide-react';
=======
>>>>>>> 7a4c2f5 (bold urban redesign)

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
<<<<<<< HEAD
    { path: '/', label: 'Home' },
>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
    { path: '/bikes', label: 'Bikes' },
    { path: '/scooters', label: 'Scooters' },
    { path: '/cars', label: 'Cars' },
    { path: '/contact', label: 'Contact' },
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const isHome = location.pathname === '/';
  const isActive = (path) => location.pathname === path;
  const transparent = !scrolled && isHome;
<<<<<<< HEAD

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${transparent ? 'bg-transparent' : 'bg-white border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-condensed text-2xl font-800 tracking-wide uppercase ${transparent ? 'text-white' : 'text-[#111]'}`}>
              Siargao <span className="text-[#1e7a1e]">Rose</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
=======
=======
  const isHome = location.pathname === '/';
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
  const isActive = (path) => location.pathname === path;

  const headerBg = scrolled || !isHome
    ? 'bg-white border-b border-[#e8ede8]'
    : 'bg-transparent border-b border-white/10';

  const textColor = scrolled || !isHome ? 'text-[#1a2e1a]' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-[#1e3d1e]' : 'text-white';
=======
>>>>>>> 7a4c2f5 (bold urban redesign)

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${transparent ? 'bg-transparent' : 'bg-white border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-condensed text-2xl font-800 tracking-wide uppercase ${transparent ? 'text-white' : 'text-[#111]'}`}>
              Siargao <span className="text-[#1e7a1e]">Rose</span>
            </span>
          </Link>

<<<<<<< HEAD
<<<<<<< HEAD
          <nav className="hidden md:flex items-center gap-6">
>>>>>>> bd28705 (initial commit)
=======
          <nav className={`hidden md:flex items-center gap-10 ${textColor}`}>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
          <nav className="hidden md:flex items-center gap-8">
>>>>>>> 7a4c2f5 (bold urban redesign)
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
                className={`font-condensed text-sm font-600 tracking-widest uppercase transition-colors ${
                  transparent
                    ? isActive(link.path) ? 'text-[#1e7a1e]' : 'text-white hover:text-[#1e7a1e]'
                    : isActive(link.path) ? 'text-[#1e7a1e]' : 'text-[#111] hover:text-[#1e7a1e]'
<<<<<<< HEAD
=======
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground'
>>>>>>> bd28705 (initial commit)
=======
                className={`text-[0.7rem] tracking-[0.15em] uppercase font-medium transition-opacity hover:opacity-60 ${
                  isActive(link.path) ? 'opacity-100 border-b border-current pb-0.5' : 'opacity-80'
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
>>>>>>> 7a4c2f5 (bold urban redesign)
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <button className="font-condensed text-sm font-700 tracking-widest uppercase px-6 py-2.5 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
                Book Now
              </button>
=======
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book now
              </Button>
>>>>>>> bd28705 (initial commit)
=======
              <button className={`text-[0.7rem] tracking-[0.15em] uppercase font-medium px-6 py-2.5 border transition-all duration-300 ${
                scrolled || !isHome
                  ? 'border-[#1e3d1e] text-[#1e3d1e] hover:bg-[#1e3d1e] hover:text-white'
                  : 'border-white/70 text-white hover:bg-white/10'
              }`}>
=======
              <button className="font-condensed text-sm font-700 tracking-widest uppercase px-6 py-2.5 bg-[#1e7a1e] text-white hover:bg-[#166016] transition-colors">
>>>>>>> 7a4c2f5 (bold urban redesign)
                Book Now
              </button>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            </Link>
          </nav>

          <button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            className={`md:hidden ${transparent ? 'text-white' : 'text-[#111]'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
=======
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
>>>>>>> bd28705 (initial commit)
=======
            className={`md:hidden ${textColor}`}
=======
            className={`md:hidden ${transparent ? 'text-white' : 'text-[#111]'}`}
>>>>>>> 7a4c2f5 (bold urban redesign)
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
<<<<<<< HEAD
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
>>>>>>> 7a4c2f5 (bold urban redesign)
          </button>
        </div>

        {mobileMenuOpen && (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="md:hidden py-5 border-t border-gray-200 bg-white">
=======
          <div className="md:hidden py-4 border-t">
>>>>>>> bd28705 (initial commit)
            <nav className="flex flex-col gap-4">
=======
          <div className="md:hidden py-6 border-t border-[#e8ede8] bg-white">
            <nav className="flex flex-col gap-5">
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
          <div className="md:hidden py-5 border-t border-gray-200 bg-white">
            <nav className="flex flex-col gap-4">
>>>>>>> 7a4c2f5 (bold urban redesign)
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  className="font-condensed text-sm font-600 tracking-widest uppercase text-[#111] hover:text-[#1e7a1e]"
=======
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
>>>>>>> bd28705 (initial commit)
=======
                  className="text-[0.7rem] tracking-[0.15em] uppercase font-medium text-[#1a2e1a] opacity-80 hover:opacity-100"
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
                  className="font-condensed text-sm font-600 tracking-widest uppercase text-[#111] hover:text-[#1e7a1e]"
>>>>>>> 7a4c2f5 (bold urban redesign)
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <button className="font-condensed text-sm font-700 tracking-widest uppercase px-6 py-2.5 bg-[#1e7a1e] text-white w-full">
                  Book Now
                </button>
=======
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Book now
                </Button>
>>>>>>> bd28705 (initial commit)
=======
                <button className="text-[0.7rem] tracking-[0.15em] uppercase font-medium px-6 py-2.5 border border-[#1e3d1e] text-[#1e3d1e] hover:bg-[#1e3d1e] hover:text-white transition-all duration-300">
=======
                <button className="font-condensed text-sm font-700 tracking-widest uppercase px-6 py-2.5 bg-[#1e7a1e] text-white w-full">
>>>>>>> 7a4c2f5 (bold urban redesign)
                  Book Now
                </button>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
