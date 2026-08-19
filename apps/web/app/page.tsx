import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Välkommen till Svensk Algeriska Föreningen
        </h1>
        <p className="text-xl mb-8">Förenar Sverige och Algeriet sedan 1975</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/register" className="bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
            Bli Medlem
          </Link>
          <Link href="/about" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Läs Mer
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="text-xl font-bold text-blue-900">Kultur</h3>
          <p className="text-gray-600">Upptäck algerisk kultur</p>
          <Link href="/culture" className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium">
            Läs mer →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-xl font-bold text-blue-900">Evenemang</h3>
          <p className="text-gray-600">Delta i våra evenemang</p>
          <Link href="/events" className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium">
            Läs mer →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
          <div className="text-4xl mb-3">🤝</div>
          <h3 className="text-xl font-bold text-blue-900">Gemenskap</h3>
          <p className="text-gray-600">Träffa andra medlemmar</p>
          <Link href="/about" className="inline-block mt-3 text-yellow-600 hover:text-yellow-700 font-medium">
            Läs mer →
          </Link>
        </div>
      </div>
    </div>
  );
}