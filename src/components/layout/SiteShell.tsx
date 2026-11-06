import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RetellAssistant from "@/components/ai/RetellAssistant";
import RetellCallEmbed from "@/components/ai/RetellCallEmbed";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header/><main>{children}</main><RetellCallEmbed/><Footer/><RetellAssistant/></>;
}
