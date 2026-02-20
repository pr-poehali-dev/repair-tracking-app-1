import { useState } from "react";
import { NOTIFICATIONS } from "@/components/data";
import AppHeader from "@/components/AppHeader";
import TabStatus from "@/components/TabStatus";
import TabContent from "@/components/TabContent";

export default function Index() {
  const [activeTab, setActiveTab] = useState("status");
  const [galleryView, setGalleryView] = useState<{ [key: number]: "before" | "after" }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleGalleryView = (id: number) => {
    setGalleryView((prev) => ({
      ...prev,
      [id]: prev[id] === "after" ? "before" : "after",
    }));
  };

  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <AppHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadCount={unreadCount}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <TabStatus activeTab={activeTab} />
        <TabContent
          activeTab={activeTab}
          galleryView={galleryView}
          toggleGalleryView={toggleGalleryView}
          unreadCount={unreadCount}
        />
      </main>

      <footer className="border-t border-border mt-16 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="font-heading tracking-wider">КУЗОВ<span className="text-primary">МАСТЕР</span> © 2026</div>
          <div>Кузовной центр — ремонт порогов, арок, покраска, антикор</div>
        </div>
      </footer>
    </div>
  );
}
