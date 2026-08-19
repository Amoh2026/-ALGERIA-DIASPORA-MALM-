export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Om Oss</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Vår Historia</h2>
        <p className="text-gray-700 mb-4">
          Svensk Algeriska Föreningen grundades 1975 med syftet att förena svenska och algeriska kulturer i Sverige.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
}