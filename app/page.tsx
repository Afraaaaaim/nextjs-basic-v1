import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const sections = [
  {
    title: "Buttons",
    description: "Variants, sizes, states, icon buttons, loading states",
    href: "/catalog/buttons",
  },
  {
    title: "Typography",
    description: "Headings, body text, code, quotes, lists",
    href: "/catalog/typography",
  },
  {
    title: "Cards",
    description: "Basic, media, interactive, stat cards",
    href: "/catalog/cards",
  },
  {
    title: "Forms",
    description: "Inputs, selects, checkboxes, radio, switch, textarea",
    href: "/catalog/forms",
  },
  {
    title: "Feedback",
    description: "Alerts, toasts, progress, skeletons, badges",
    href: "/catalog/feedback",
  },
  {
    title: "Navigation",
    description: "Navbar, sidebar, tabs, breadcrumbs, dropdown menus",
    href: "/catalog/navigation",
  },
  {
    title: "Overlays",
    description: "Modals, sheets, tooltips, popovers",
    href: "/catalog/overlays",
  },
  {
    title: "Data Display",
    description: "Tables, lists, avatars, separators, accordions",
    href: "/catalog/data-display",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">UI Catalog</h1>
          <p className="text-muted-foreground text-lg">
            Personal component cheatsheet. Pick what you need, drop it in your project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card className="h-full hover:border-foreground transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}