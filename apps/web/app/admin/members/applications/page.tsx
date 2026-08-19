import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';

export default async function MemberApplicationsPage() {
  const session = await auth();
  
  if (!session || session.user?.role !== 'ADMIN') {
    redirect('/login');
  }

  const applications = await prisma.memberApplication.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    APPROVED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    PENDING: 'Väntar',
    APPROVED: 'Godkänd',
    REJECTED: 'Avböjd',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Medlemsansökningar</h1>
          <p className="text-muted-foreground mt-1">
            Totalt: {applications.length} ansökningar
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/dashboard">Tillbaka</Link>
          </Button>
        </div>
      </div>

      {applications.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            Inga ansökningar ännu.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {applications.map((app) => (
            <Card key={app.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle>
                      {app.firstName} {app.lastName}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${statusColors[app.status as keyof typeof statusColors]}`}>
                        {statusLabels[app.status as keyof typeof statusLabels]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(app.createdAt), 'PPP p', { locale: sv })}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {app.ageGroup}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Personnummer:</span>
                    <span className="ml-2 font-mono">🔒 Krypterad</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Telefon:</span>
                    <span className="ml-2">🔒 Krypterad</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">E-post:</span>
                    <span className="ml-2">🔒 Krypterad</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Adress:</span>
                    <span className="ml-2">🔒 Krypterad</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Kön:</span>
                    <span className="ml-2">{app.gender || 'Ej angivet'}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Betalning:</span>
                    <span className="ml-2">{app.paymentMethod}</span>
                  </div>
                </div>
                
                {app.children && (
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">Barn:</span>
                    <span className="ml-2">🔒 Krypterad</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Godkänn
                  </Button>
                  <Button size="sm" variant="destructive">
                    Avböj
                  </Button>
                  <Button size="sm" variant="outline">
                    Visa detaljer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}