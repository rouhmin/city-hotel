import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import PricingTable from './components/PricingTable';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ReservationCTA from './components/ReservationCTA';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleOpenBookingModal = (room = null) => {
    setSelectedRoom(room);
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#171717] font-sans selection:bg-[#C6A15B] selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal(null)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal(null)} />

        {/* 2. Welcome & About Presentation */}
        <About onOpenBookingModal={() => handleOpenBookingModal(null)} />

        {/* 3. Rooms Showcase */}
        <Rooms onSelectRoom={(room) => handleOpenBookingModal(room)} />

        {/* 4. Official Rates & Pricing Table */}
        <PricingTable onOpenBookingModal={() => handleOpenBookingModal(null)} />

        {/* 5. Services & Equipments */}
        <Services />

        {/* 6. Real Photo Gallery with Lightbox */}
        <Gallery />

        {/* 7. Reservation CTA & Fast Quote */}
        <ReservationCTA onOpenBookingModal={() => handleOpenBookingModal(null)} />

        {/* 8. Geographic Location & Directions */}
        <LocationSection />

        {/* 9. Contact & Horaires */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloating />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBookingModal}
        initialRoom={selectedRoom}
      />
    </div>
  );
}
