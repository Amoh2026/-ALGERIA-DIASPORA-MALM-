import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function MemberDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  
  if (!token) {
    redirect('/login');
  }

  const user = verifyToken(token);
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
        <p className="text-green-700">
          ✅ Du är inloggad som <strong>{user.name}</strong> ({user.role})
        </p>
      </div>

      <h1 className="text-3xl font-bold mb-8">Välkommen, {user.name}!</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Medlemsstatus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">Aktiv</p>
            <p className="text-sm text-muted-foreground">Medlem sedan 2026</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Evenemang</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">Kommande evenemang</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Profil</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground">Roll: {user.role}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}