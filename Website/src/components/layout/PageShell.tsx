import { Navigation } from "./Navigation";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <Navigation />
      <main id="main-content">{children}</main>
      <footer
        className="border-t py-8 text-center mono text-xs"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-fg-dim)",
        }}
      >
        designed & built by Mina Mohsen Azmy · next.js · tailwind · motion
      </footer>
    </div>
  );
}
