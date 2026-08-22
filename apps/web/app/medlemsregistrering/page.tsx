'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function MedlemsregistreringPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    personalNumber: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    postalCode: '',
    city: 'Malmö',
    childrenUnder17: '',
    ageGroup: '',
    swishReference: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'members'), {
        ...formData,
        userId: user ? (user as any).uid : null,
        createdAt: new Date(),
        status: 'pending'
      });

      setSuccess(true);
      setFormData({
        name: '',
        personalNumber: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        postalCode: '',
        city: 'Malmö',
        childrenUnder17: '',
        ageGroup: '',
        swishReference: ''
      });
    } catch (error) {
      console.error('Error saving member:', error);
      alert('Något gick fel. Försök igen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Medlemsregistrering</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border">
          <img
            src="/images/homepage.png"
            alt="Svensk Algeriska Föreningen i Malmö"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
            <p className="font-bold text-lg">🇩🇿 SAF Malmö</p>
            <p className="text-sm opacity-90">En gemenskap av broar och kulturer</p>
          </div>
        </div>

        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.4264574585476!2d13.0026923!3d55.6049792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a1305b2c9f5b%3A0x5d6e2d73145a22d!2sMalm%C3%B6%2C%20Sweden!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          <div className="absolute bottom-4 left-4 text-white drop-shadow-md bg-black/40 px-3 py-1 rounded">
            <p className="text-sm font-medium">📍 Malmö, Sverige</p>
          </div>
        </div>
      </div>

      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-bold text-lg">Tack för din ansökan!</p>
          <p>Vi har mottagit dina uppgifter. Du kommer att få en bekräftelse via e-post inom kort.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border">
          <p className="text-gray-600 mb-6 text-center border-b pb-4">
            Vi uppdaterar vårt medlemsregister och behöver din hjälp. Vänligen fyll i alla fält nedan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Namn och efternamn *</label>
              <input name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Personnummer *</label>
              <input name="personalNumber" value={formData.personalNumber} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Telefonnummer *</label>
              <input name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">E-post *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Fullständig adress *</label>
            <input name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Åldersgrupp *</label>
            <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
              <option value="">Välj åldersgrupp</option>
              <option value="300 kr: 25–64 år">300 kr: 25–64 år</option>
              <option value="200 kr: 65+ år">200 kr: 65+ år</option>
              <option value="150 kr: Ungdom 17–24 år">150 kr: Ungdom 17–24 år</option>
            </select>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-sm font-bold text-blue-900">Betalningsinfo</p>
            <p className="text-sm text-blue-700">Betala med Swish till: <strong>123 222 1xxx</strong></p>
            <p className="text-sm text-blue-700 mt-1">Meddelande: Ditt Namn + Årsavgift</p>
            <div className="mt-2">
              <label className="block text-sm text-blue-900">Swish referensnummer (frivilligt)</label>
              <input name="swishReference" value={formData.swishReference} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start">
              <input type="checkbox" required className="mt-1 mr-2 accent-blue-900" />
              <span className="text-sm text-gray-600">
                Genom att skicka in detta formulär godkänner jag att Svensk Algeriska Föreningen behandlar mina personuppgifter i enlighet med GDPR.
              </span>
            </label>
          </div>

          <button type="submit" disabled={loading} className="w-full mt-6 bg-blue-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition disabled:opacity-50">
            {loading ? 'Skickar...' : 'Skicka ansökan'}
          </button>
        </form>
      )}
    </div>
  );
}