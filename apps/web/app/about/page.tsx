export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Om Oss</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Vår Historia</h2>
        <p className="text-gray-700 mb-4">
          Svensk Algeriska Föreningen grundades med syftet att förena svenska och algeriska kulturer i Sverige.
          Föreningen har sedan dess varit en viktig mötesplats för den algeriska gemenskapen i Malmö och Skåne.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-4">Vårt Uppdrag</h2>
        <p className="text-gray-700 mb-4">
          Vi arbetar för att:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Skapa gemenskap bland algerier i Malmö</li>
          <li>Främja kulturellt utbyte mellan Sverige och Algeriet</li>
          <li>Bevara och dela algeriska traditioner och kultur</li>
          <li>Stödja integration och samarbete i det svenska samhället</li>
          <li>Organisera evenemang och aktiviteter för alla åldrar</li>
        </ul>

        <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-4">Våra Värderingar</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="font-bold text-blue-900">Gemenskap</h3>
            <p className="text-sm text-gray-600">Vi bygger starka relationer</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-bold text-blue-900">Kultur</h3>
            <p className="text-sm text-gray-600">Vi bevarar och delar vårt arv</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-bold text-blue-900">Engagemang</h3>
            <p className="text-sm text-gray-600">Vi arbetar för alla medlemmar</p>
          </div>
        </div>
      </div>
    </div>
  );
}