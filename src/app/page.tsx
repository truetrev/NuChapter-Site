import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-black">
      <main className="flex w-full max-w-xl flex-col items-center gap-10 py-16">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline" className="border-black/20 text-black dark:border-white/20 dark:text-white">
            <MapPin className="mr-1 h-3 w-3" />
            Oregon
          </Badge>

          <h1 className="text-6xl font-bold tracking-tighter text-black dark:text-white sm:text-7xl">
            NuChapter
          </h1>

          <p className="text-lg text-black/60 dark:text-white/60">
            A small company building thoughtful software.
          </p>
        </div>

        <Separator className="w-24 bg-black/20 dark:bg-white/20" />

        <Card className="w-full border-black/10 bg-black/[0.02] shadow-none dark:border-white/10 dark:bg-white/[0.02]">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-black dark:text-white" />
              <span className="text-sm font-medium uppercase tracking-widest text-black/40 dark:text-white/40">
                Our Mission
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <blockquote className="text-2xl font-light leading-relaxed text-black dark:text-white">
              &ldquo;Bringing users the best in humane technology.&rdquo;
            </blockquote>
          </CardContent>
        </Card>

        <Separator className="w-full bg-black/10 dark:bg-white/10" />

        <footer className="flex flex-col items-center gap-2 text-sm text-black/40 dark:text-white/40">
          <p>&copy; {new Date().getFullYear()} NuChapter. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
