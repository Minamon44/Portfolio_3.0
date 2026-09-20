import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6"
      style={{ background: "var(--color-bg)", color: "var(--color-fg)" }}
    >
      <p className="mono text-xs" style={{ color: "var(--color-green)" }}>
        mina@minamon44 ~
      </p>
      <h1
        className="mono font-bold"
        style={{ fontSize: "48px", color: "var(--color-fg-dim)" }}
      >
        404
      </h1>
      <p className="mono text-sm" style={{ color: "var(--color-fg-muted)" }}>
        $ cd /page-not-found: No such file or directory
      </p>
      <Link
        href="/"
        className="mono text-xs px-5 py-2.5"
        style={{ background: "var(--color-green)", color: "var(--color-bg)" }}
      >
        cd ~/home
      </Link>
    </div>
  );
}
