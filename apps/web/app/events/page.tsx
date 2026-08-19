export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Evenemang</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Algerisk Kulturfestival</h3>
          <p className="text-gray-600">Kom och upplev algerisk kultur</p>
        </div>
        {/* Add more events as needed */}
      </div>
    </div>
  );
}