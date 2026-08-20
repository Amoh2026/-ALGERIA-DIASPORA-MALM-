import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  
  if (!token) {
    redirect('/login');
  }

  const user = verifyToken(token);
  if (!user || user.role !== 'ADMIN') {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <p className="text-red-700">
          🔐 Admin Dashboard - Inloggad som <strong>{user.name}</strong>
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm text-muted-foreground">Medlemmar</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Evenemang</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Ansökningar</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Inlägg</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Senaste aktivitet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Ingen aktivitet ännu</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Snabbåtgärder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a href="/admin/members/applications" className="block text-blue-600 hover:underline">
              Visa ansökningar
            </a>
            <a href="/admin/events/create" className="block text-blue-600 hover:underline">
              Skapa evenemang
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}