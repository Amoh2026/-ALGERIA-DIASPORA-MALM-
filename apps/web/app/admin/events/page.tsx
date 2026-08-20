import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Plus, Pencil, Trash2 } from 'lucide-react';

export default async function AdminEventsPage() {
  const session = await auth();
  
  if (!session || session.user?.role !== 'ADMIN') {
    redirect('/login');
  }

  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' },
    include: {
      registrations: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hantera Evenemang</h1>
          <p className="text-muted-foreground">Totalt: {events.length} evenemang</p>
        </div>
        <Button asChild>
          <Link href="/admin/events/create">
            <Plus className="h-4 w-4 mr-2" /> Skapa Evenemang
          </Link>
        </Button>
      </div>

      {events.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            Inga evenemang skapade ännu.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString('sv-SE')}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.registrations.length} anmälda
                        {event.maxAttendees && ` / ${event.maxAttendees}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/admin/events/${event.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}