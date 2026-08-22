'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MemberDashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Laddar...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Välkommen {user.name}!
      </h1>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Roll: {user.role}</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">📅 Evenemang</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Se kommande evenemang</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">👥 Medlemmar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Visa medlemslista</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">📝 Inlägg</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Skapa och hantera inlägg</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}