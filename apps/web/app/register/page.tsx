import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-8">Bli Medlem</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Fullständigt namn</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Namn" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="din@email.se" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Lösenord</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="••••••••" />
          </div>
          <button className="w-full bg-yellow-500 text-blue-900 font-bold py-2 rounded-lg hover:bg-yellow-400 transition">
            Bli medlem
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Redan medlem? <Link href="/login" className="text-yellow-600 hover:underline">Logga in</Link>
        </p>
      </div>
    </div>
  );
}