import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await auth();
  
  if (!session || session.user?.role !== "ADMIN") {
    redirect("/login");
  }

  // Get stats
  const [totalMembers, totalEvents, totalPosts, pendingRegistrations] = await Promise.all([
    prisma.user.count(),
    prisma.event.count(),
    prisma.post.count(),
    prisma.eventRegistration.count({ where: { status: "PENDING" } })
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{totalMembers}</p>
            <p className="text-sm text-muted-foreground">Total Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{totalEvents}</p>
            <p className="text-sm text-muted-foreground">Events</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{totalPosts}</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{pendingRegistrations}</p>
            <p className="text-sm text-muted-foreground">Pending Registrations</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="members">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Member Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Member list coming soon...</p>
              <Button asChild className="mt-4">
                <Link href="/admin/members">Manage Members</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Event Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="mr-2">
                <Link href="/admin/events/create">Create Event</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/events">Manage Events</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Moderate posts and announcements</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}