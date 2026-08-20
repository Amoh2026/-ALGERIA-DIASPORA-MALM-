import React from 'react';

export default function EvenemangPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Evenemang</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Kommande Aktiviteter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Här hittar du alla våra kommande evenemang, fester och kulturella sammankomster. 
          Vi återkommer snart med uppdaterade datum!
        </p>
        <div className="border-t pt-4 mt-4">
          <p className="text-gray-500 italic">Inga evenemang inbokade just nu. Följ oss på Facebook för uppdateringar!</p>
        </div>
      </div>
    </div>
  );
}