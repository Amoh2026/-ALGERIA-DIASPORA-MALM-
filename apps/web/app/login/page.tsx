import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-8">Logga in</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="din@email.se" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Lösenord</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="••••••••" />
          </div>
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
            Logga in
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Inte medlem? <Link href="/register" className="text-yellow-600 hover:underline">Bli medlem</Link>
        </p>
      </div>
    </div>
  );
}