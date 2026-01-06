'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContactInfo } from '@/hooks/useContactInfo';
import { usePhonePopup } from '@/context/PhonePopupContext';

const navLinks = [
  { href: '/', label: 'หน้าแรก', labelEn: 'Home' },
  { href: '/about', label: 'เกี่ยวกับเรา', labelEn: 'About' },
  { href: '/services', label: 'บริการ', labelEn: 'Services' },
  { href: '/contact', label: 'ติดต่อเรา', labelEn: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { contact } = useContactInfo();
  const { openPopup } = usePhonePopup();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10">
              <Image
                src="/images/Logo.png"
                alt="Rabbit Pest Control Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">Rabbit</span>
              <span className="text-xs text-orange-600 font-medium -mt-1">Pest Control</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600"
              asChild
            >
              <a href={contact.line_url} target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                Line
              </a>
            </Button>
            <Button
              onClick={() => openPopup(contact.phone_call)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              {contact.phone_display}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-white p-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Logo in Mobile Menu */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="relative h-10 w-10">
                      <Image
                        src="/images/Logo.png"
                        alt="Rabbit Pest Control Logo"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900 leading-tight">Rabbit</span>
                      <span className="text-xs text-orange-600 font-medium -mt-1">Pest Control</span>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-orange-600 border-b border-gray-100 transition-colors"
                          >
                            {link.label}
                            <span className="text-sm text-gray-400">{link.labelEn}</span>
                          </Link>
                        </SheetClose>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto pt-6 space-y-3">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white" asChild>
                      <button onClick={() => openPopup(contact.phone_call)} className="flex items-center justify-center w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        โทรเลย {contact.phone_display}
                      </button>
                    </Button>
                    <Button variant="outline" className="w-full border-gray-300" asChild>
                      <a href={contact.line_url} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.021.136-.033.203-.033.211 0 .391.09.51.25l2.438 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        เพิ่มเพื่อน Line
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
