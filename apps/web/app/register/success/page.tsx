import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <CardTitle className="text-2xl">Tack för din ansökan!</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Din medlemsansökan har skickats. Vi kommer att behandla den och återkomma till dig så snart som möjligt.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-sm">
            <p className="font-semibold">Vad händer nu?</p>
            <ul className="text-left list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              <li>Vi granskar din ansökan</li>
              <li>Du får ett bekräftelsemejl</li>
              <li>Välkommen som medlem!</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/">Tillbaka till startsidan</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/events">Se kommande evenemang</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}