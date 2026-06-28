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

      {/* Umami analytics */}
      <script
        defer
        src={import.meta.env.VITE_UMAMI_URL}
        data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}
      />

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
