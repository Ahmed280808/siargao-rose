<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <span className="font-condensed text-2xl font-800 tracking-wide uppercase">
              Siargao <span className="text-[#1e7a1e]">Rose</span>
            </span>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              Premium bike, scooter & car rentals on Siargao Island. Located right by the airport.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/639162820491"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e7a1e] hover:bg-[#166016] transition-colors p-2.5"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://instagram.com/rosaliagaligao"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2.5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-condensed text-xs font-700 tracking-widest uppercase text-white/40 mb-5">Navigate</h3>
            <nav className="flex flex-col gap-3">
              {[['/', 'Home'], ['/bikes', 'Bikes'], ['/scooters', 'Scooters'], ['/cars', 'Cars'], ['/booking', 'Book Now'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path} className="text-sm text-white/60 hover:text-white transition-colors font-500">
                  {label}
                </Link>
              ))}
=======

=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <span className="font-condensed text-2xl font-800 tracking-wide uppercase">
              Siargao <span className="text-[#1e7a1e]">Rose</span>
            </span>
            <p className="text-sm text-white/50 mt-4 leading-relaxed">
              Premium bike, scooter & car rentals on Siargao Island. Located right by the airport.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/639162820491"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1e7a1e] hover:bg-[#166016] transition-colors p-2.5"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://instagram.com/rosaliagaligao"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2.5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="font-semibold text-foreground mb-4">Quick links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/bikes" className="text-sm hover:text-primary transition-colors">
                Bikes
              </Link>
              <Link to="/scooters" className="text-sm hover:text-primary transition-colors">
                Scooters
              </Link>
              <Link to="/cars" className="text-sm hover:text-primary transition-colors">
                Cars
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </Link>
>>>>>>> bd28705 (initial commit)
=======
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-white mb-6">Navigate</h3>
=======
            <h3 className="font-condensed text-xs font-700 tracking-widest uppercase text-white/40 mb-5">Navigate</h3>
>>>>>>> 7a4c2f5 (bold urban redesign)
            <nav className="flex flex-col gap-3">
              {[['/', 'Home'], ['/bikes', 'Bikes'], ['/scooters', 'Scooters'], ['/cars', 'Cars'], ['/booking', 'Book Now'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path} className="text-sm text-white/60 hover:text-white transition-colors font-500">
                  {label}
                </Link>
              ))}
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
            </nav>
          </div>

          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="font-condensed text-xs font-700 tracking-widest uppercase text-white/40 mb-5">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/639162820491" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[#1e7a1e] flex-shrink-0" />
                <span>+63 916 282 0491</span>
              </a>
              <a href="mailto:info@siargaorose.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-[#1e7a1e] flex-shrink-0" />
                <span>info@siargaorose.com</span>
              </a>
              <a href="https://instagram.com/rosaliagaligao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Instagram className="h-4 w-4 text-[#1e7a1e] flex-shrink-0" />
                <span>@rosaliagaligao</span>
=======
            <h3 className="font-semibold text-foreground mb-4">Contact info</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/639123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +63 912 345 6789</span>
=======
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-white mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/639123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-light hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span>WhatsApp</span>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
            <h3 className="font-condensed text-xs font-700 tracking-widest uppercase text-white/40 mb-5">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/639162820491" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-[#1e7a1e] flex-shrink-0" />
                <span>+63 916 282 0491</span>
>>>>>>> 7a4c2f5 (bold urban redesign)
              </a>
              <a href="mailto:info@siargaorose.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-[#1e7a1e] flex-shrink-0" />
                <span>info@siargaorose.com</span>
              </a>
<<<<<<< HEAD
              <a href="tel:+639123456789" className="flex items-center gap-3 text-sm font-light hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+63 912 345 6789</span>
>>>>>>> bd28705 (initial commit)
=======
              <a href="https://instagram.com/rosaliagaligao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Instagram className="h-4 w-4 text-[#1e7a1e] flex-shrink-0" />
                <span>@rosaliagaligao</span>
>>>>>>> 7a4c2f5 (bold urban redesign)
              </a>
            </div>
          </div>

          <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="font-condensed text-xs font-700 tracking-widest uppercase text-white/40 mb-5">Find Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#1e7a1e] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/60">
                  <p>Mon – Sun</p>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#1e7a1e] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/60">
                  <p>Near the Airport</p>
                  <p>General Luna, Siargao</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 uppercase tracking-widest font-condensed">© 2026 Siargao Rose. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest font-condensed">Privacy</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest font-condensed">Terms</Link>
=======
            <h3 className="font-semibold text-foreground mb-4">Business hours</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="h-4 w-4 mt-0.5" />
              <div className="text-sm">
                <p>Monday - Sunday</p>
                <p>8:00 AM - 6:00 PM</p>
=======
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-white mb-6">Hours & Location</h3>
=======
            <h3 className="font-condensed text-xs font-700 tracking-widest uppercase text-white/40 mb-5">Find Us</h3>
>>>>>>> 7a4c2f5 (bold urban redesign)
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#1e7a1e] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/60">
                  <p>Mon – Sun</p>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#1e7a1e] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/60">
                  <p>Near the Airport</p>
                  <p>General Luna, Siargao</p>
                </div>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 Siargao Rose. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
>>>>>>> bd28705 (initial commit)
=======
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem] tracking-[0.1em] uppercase text-white/30">© 2026 Siargao Rose. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[0.65rem] tracking-[0.1em] uppercase text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[0.65rem] tracking-[0.1em] uppercase text-white/30 hover:text-white/60 transition-colors">Terms</Link>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
=======
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 uppercase tracking-widest font-condensed">© 2026 Siargao Rose. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest font-condensed">Privacy</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest font-condensed">Terms</Link>
>>>>>>> 7a4c2f5 (bold urban redesign)
          </div>
        </div>
      </div>
    </footer>
  );
}
