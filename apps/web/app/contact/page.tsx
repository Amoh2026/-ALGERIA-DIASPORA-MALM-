export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Kontakt</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-700 mb-4">Har du frågor? Tveka inte att kontakta oss!</p>
        <div className="space-y-2">
          <p><strong>Email:</strong> info@algeriskaföreningen.se</p>
          <p><strong>Telefon:</strong> +46 70 123 45 67</p>
          <p><strong>Adress:</strong> Malmö, Sverige</p>
        </div>
      </div>
    </div>
  );
}