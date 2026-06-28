<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bd28705 (initial commit)
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
<<<<<<< HEAD
<<<<<<< HEAD

export default function ContactPage() {
  const info = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+63 912 345 6789', href: 'https://wa.me/639123456789' },
    { icon: Mail, label: 'Email', value: 'info@siargaorose.com', href: 'mailto:info@siargaorose.com' },
    { icon: Phone, label: 'Phone', value: '+63 912 345 6789', href: 'tel:+639123456789' },
    { icon: Clock, label: 'Hours', value: 'Mon–Sun, 8:00 AM – 6:00 PM', href: null },
    { icon: MapPin, label: 'Location', value: 'General Luna, Siargao Island', href: null },
  ];

  return (
    <>
      <Helmet>
        <title>Contact — Siargao Rose</title>
        <meta name="description" content="Get in touch with Siargao Rose for bike, scooter, and car rentals on Siargao Island." />
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
=======
>>>>>>> 30692b7 (premium redesign with real photos and reviews)

export default function ContactPage() {
  const info = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+63 912 345 6789', href: 'https://wa.me/639123456789' },
    { icon: Mail, label: 'Email', value: 'info@siargaorose.com', href: 'mailto:info@siargaorose.com' },
    { icon: Phone, label: 'Phone', value: '+63 912 345 6789', href: 'tel:+639123456789' },
    { icon: Clock, label: 'Hours', value: 'Mon–Sun, 8:00 AM – 6:00 PM', href: null },
    { icon: MapPin, label: 'Location', value: 'General Luna, Siargao Island', href: null },
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Contact Us - Siargao Rose</title>
        <meta
          name="description"
          content="Get in touch with Siargao Rose for bike, scooter, and car rentals. WhatsApp, email, or visit us in General Luna, Siargao Island."
        />
>>>>>>> bd28705 (initial commit)
=======
        <title>Contact — Siargao Rose</title>
        <meta name="description" content="Get in touch with Siargao Rose for bike, scooter, and car rentals on Siargao Island." />
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
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#1e3d1e]/60 mb-4">Get in Touch</p>
<<<<<<< HEAD
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-6xl md:text-7xl font-light text-[#1a2e1a]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Contact us
            </motion.h1>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="font-display text-3xl font-light text-[#1a2e1a] mb-10">Send a message</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="font-display text-3xl font-light text-[#1a2e1a] mb-10">Reach us directly</h2>
                <div className="space-y-0 border border-[#e8ede8]">
                  {info.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-6 p-6 border-b border-[#e8ede8] last:border-b-0">
                      <Icon className="h-4 w-4 text-[#1e3d1e] flex-shrink-0" />
                      <div>
                        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#1a2e1a]/40 mb-1">{label}</p>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-light text-[#1a2e1a] hover:text-[#1e3d1e] transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-light text-[#1a2e1a]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 aspect-video overflow-hidden border border-[#e8ede8]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=126.1%2C9.8%2C126.2%2C9.9&layer=mapnik&marker=9.85%2C126.15"
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Siargao Rose Location"
                  />
                </div>
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
              Contact us
            </motion.h1>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="font-display text-3xl font-light text-[#1a2e1a] mb-10">Send a message</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="font-display text-3xl font-light text-[#1a2e1a] mb-10">Reach us directly</h2>
                <div className="space-y-0 border border-[#e8ede8]">
                  {info.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-6 p-6 border-b border-[#e8ede8] last:border-b-0">
                      <Icon className="h-4 w-4 text-[#1e3d1e] flex-shrink-0" />
                      <div>
                        <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#1a2e1a]/40 mb-1">{label}</p>
                        {href ? (
                          <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-light text-[#1a2e1a] hover:text-[#1e3d1e] transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-light text-[#1a2e1a]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

<<<<<<< HEAD
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-secondary" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://wa.me/639123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +63 912 345 6789
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Chat with us for quick responses
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-secondary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@siargaorose.com"
                      className="text-primary hover:underline"
                    >
                      info@siargaorose.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Send us an email anytime
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-secondary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+639123456789" className="text-primary hover:underline">
                      +63 912 345 6789
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Call us during business hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-secondary" />
                      Business hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">Monday - Sunday</p>
                    <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-secondary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">General Luna</p>
                    <p className="text-muted-foreground">Siargao Island, Philippines</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Find us on the map</h2>
              <div className="aspect-video rounded-xl overflow-hidden border">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=126.1%2C9.8%2C126.2%2C9.9&layer=mapnik&marker=9.85%2C126.15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Siargao Rose Location"
                />
>>>>>>> bd28705 (initial commit)
=======
                <div className="mt-10 aspect-video overflow-hidden border border-[#e8ede8]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=126.1%2C9.8%2C126.2%2C9.9&layer=mapnik&marker=9.85%2C126.15"
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Siargao Rose Location"
                  />
                </div>
>>>>>>> 30692b7 (premium redesign with real photos and reviews)
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
