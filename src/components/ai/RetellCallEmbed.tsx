"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SCRIPT_ID = "retell-widget-embed";
const SCRIPT_SRC = "https://dashboard.retellai.com/retell-widget-embed.js";

export default function RetellCallEmbed() {
  const [loadError, setLoadError] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const publicKey = process.env.NEXT_PUBLIC_RETELL_VOICE_PUBLIC_KEY;
  const agentId = process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID;

  useEffect(() => {
    if (!publicKey || !agentId || document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.onerror = () => setLoadError(true);
    document.body.appendChild(script);
  }, [agentId, publicKey]);

  return <section className={`section section-light call-assistant-section${isContactPage ? "" : " call-assistant-section-hidden"}`} id="assistant-call" aria-hidden={!isContactPage}>
    <div className="container call-assistant-layout">
      <div><p className="eyebrow">VOICE ASSISTANT</p><h2>Connect with DM Finance AI.</h2><p>Start a voice call to explore our services or schedule a consultation. Select the call control below when you’re ready to speak.</p></div>
      {!publicKey || !agentId ? <p className="widget-note" role="status">The voice assistant is not configured. Please contact our team.</p> : loadError ? <p className="widget-note" role="status">The voice assistant could not load. Please try the “Talk to AI” launcher or contact our team.</p> : <div className="retell-call-embed" data-retell-widget="true" data-voice-public-key={publicKey} data-voice-agent-id={agentId} data-title="DM Finance Assistant" data-bot-name="DM Finance AI" data-theme-color="#102A43" data-component-color="#C6A15B" aria-label="DM Finance voice assistant"/>}
    </div>
  </section>;
}
