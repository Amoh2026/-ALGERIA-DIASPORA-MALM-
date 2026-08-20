'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreateEventPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    maxAttendees: '',
  });

  if (!session || session.user?.role !== 'ADMIN') {
    return <div className="text-center py-12">Du har inte behörighet att skapa evenemang</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          maxAttendees: parseInt(formData.maxAttendees) || null,
        }),
      });

      if (response.ok) {
        router.push('/admin/events');
      } else {
        alert('Något gick fel. Försök igen.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Skapa Nytt Evenemang</h1>

      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Titel</label>
              <Input
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Evenemangets titel"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Beskrivning</label>
              <textarea
                required
                className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Beskriv evenemanget..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Datum och tid</label>
              <Input
                required
                type="datetime-local"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Plats</label>
              <Input
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Malmö, Sverige"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Max antal deltagare (valfritt)</label>
              <Input
                type="number"
                value={formData.maxAttendees}
                onChange={(e) => setFormData({ ...formData, maxAttendees: e.target.value })}
                placeholder="50"
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" disabled={loading}>
                {loading ? 'Skapar...' : 'Skapa Evenemang'}
              </Button>
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Avbryt
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}