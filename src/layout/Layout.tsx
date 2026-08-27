import ChatbotWidget from "../components/ChatbotWidget";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ChatbotWidget />

      {/* Cloudflare analytics */}
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify({
          token: import.meta.env.VITE_CLOUDFLARE_TOKEN,
        })}
      />
    </>
  );
}
