'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    personalNumber: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    postalCode: '',
    city: '',
    children: '',
    ageGroup: '',
    paymentMethod: 'Swish',
    paymentReference: '',
    gdprConsent: false,
  });

  const validateForm = () => {
    // Personal number format: ÅÅMMDD-XXXX
    const pnRegex = /^\d{6}-\d{4}$/;
    if (!pnRegex.test(formData.personalNumber)) {
      setError('Personnummer måste vara i formatet ÅÅMMDD-XXXX');
      return false;
    }

    // Phone number validation (basic)
    const phoneRegex = /^[0-9\s\-+]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Ogiltigt telefonnummer');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Ogiltig e-postadress');
      return false;
    }

    // GDPR consent required
    if (!formData.gdprConsent) {
      setError('Du måste godkänna GDPR för att skicka in ansökan');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/member-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setError('För många försök. Vänligen vänta 15 minuter.');
        } else if (response.status === 409) {
          setError('Denna e-postadress har redan använts för en ansökan.');
        } else if (data.errors) {
          setError(data.errors[0]?.message || 'Ogiltig data');
        } else {
          setError(data.message || 'Ett fel uppstod. Vänligen försök igen.');
        }
        return;
      }

      setSuccess(true);
      
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push('/register/success');
      }, 1500);

    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Ett fel uppstod. Vänligen försök igen.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardContent className="pt-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Ansökan skickad!</h2>
            <p className="text-muted-foreground">Omdirigerar...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Medlemsuppgifter 2026 – SAF Malmö
          </CardTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Vi uppdaterar vårt medlemsregister och behöver din hjälp. Vänligen fyll i dina uppgifter nedan så att vi kan säkerställa att vår information är aktuell.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2 bg-yellow-50 p-2 rounded">
            🔒 Alla personuppgifter krypteras och hanteras säkert
          </p>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 flex items-start gap-2">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Namn och efternamn <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  required
                  placeholder="Förnamn"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  disabled={loading}
                />
                <Input
                  required
                  placeholder="Efternamn"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Personal Number */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Personnummer <span className="text-red-500">*</span>
              </label>
              <Input
                required
                placeholder="ÅÅMMDD-XXXX"
                value={formData.personalNumber}
                onChange={(e) => setFormData({ ...formData, personalNumber: e.target.value })}
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground mt-1">Format: ÅÅMMDD-XXXX</p>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium mb-1">Kön</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Kvinna/Tjej"
                    checked={formData.gender === 'Kvinna/Tjej'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    disabled={loading}
                  />
                  Kvinna/Tjej
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Man/kille"
                    checked={formData.gender === 'Man/kille'}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    disabled={loading}
                  />
                  Man/kille
                </label>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Telefonnummer <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="tel"
                placeholder="070-123 45 67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                E-post <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="email"
                placeholder="din@email.se"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={loading}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Skriv rätt mejl så du får mer info via mejl.
              </p>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Fullständig adress inkl postnr <span className="text-red-500">*</span>
              </label>
              <Input
                required
                placeholder="Gata 12"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                disabled={loading}
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Input
                  placeholder="Postnummer"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  disabled={loading}
                />
                <Input
                  placeholder="Stad"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Har du barn under 17 år?
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md min-h-[80px]"
                placeholder="För-, efternamn och fullständigt personnummer"
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                disabled={loading}
              />
            </div>

            {/* Age Group */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Åldersgrupp <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full px-3 py-2 border rounded-md"
                value={formData.ageGroup}
                onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                disabled={loading}
              >
                <option value="">Välj...</option>
                <option value="25-64">300 kr: 25–64 år</option>
                <option value="65+">100 kr: 65 år och uppåt</option>
                <option value="utanfor">Utanför Malmö och Lund 100 kr</option>
              </select>
            </div>

            {/* Payment Info */}
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-2">Betalningsinfo</h3>
              <p className="text-sm text-muted-foreground">
                Betala med Swish till: <strong className="text-blue-600">123 222 12 99</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Meddelande: <strong>Namn + Årsavgift 2026</strong>
              </p>
              <Input
                placeholder="Swish referensnummer (frivilligt)"
                value={formData.paymentReference}
                onChange={(e) => setFormData({ ...formData, paymentReference: e.target.value })}
                className="mt-2"
                disabled={loading}
              />
            </div>

            {/* GDPR Consent */}
            <div className="border-t pt-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  checked={formData.gdprConsent}
                  onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
                  className="mt-1"
                  disabled={loading}
                />
                <span className="text-sm">
                  <strong>Godkännande av GDPR:</strong><br />
                  Genom att skicka in detta formulär godkänner jag att Svensk Algeriska Föreningen (SAF Malmö) behandlar mina personuppgifter i enlighet med Dataskyddsförordningen (GDPR). Informationen används endast för att administrera träffar och hantera eventuella nödvändiga kontakter. Jag har rätt att begära ändring eller radering av mina uppgifter när som helst.
                </span>
              </label>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Skickar...
                </>
              ) : (
                'Skicka ansökan'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              🔒 All data krypteras och skickas säkert
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}