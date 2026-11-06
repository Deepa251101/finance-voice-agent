"use client";

import { useEffect, useState } from "react";

const SCRIPT_ID = "retell-widget";
const SCRIPT_SRC = "https://dashboard.retellai.com/retell-widget-v2.js";

export default function RetellAssistant() {
  const [loadError, setLoadError] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_RETELL_VOICE_PUBLIC_KEY;
  const agentId = process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID;

  useEffect(() => {
    if (!publicKey || !agentId) return;

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.dataset.voicePublicKey = publicKey;
    script.dataset.voiceAgentId = agentId;
    script.dataset.title = "DM Finance Assistant";
    script.dataset.botName = "DM Finance AI";
    script.dataset.themeColor = "#102A43";
    script.dataset.componentColor = "#C6A15B";
    script.dataset.fabText = "Talk to AI";
    script.dataset.popupMessage = "Have questions about our financial services? Talk to our AI assistant.";
    script.onerror = () => setLoadError(true);
    document.head.appendChild(script);
    return () => {
      // The floating widget is intentionally kept alive across App Router navigation.
    };
  }, [agentId, publicKey]);

  if (!publicKey || !agentId) return <p className="widget-note" role="status">The AI assistant is not configured yet. Please use the contact details on this page.</p>;
  if (loadError) return <p className="widget-note" role="status">The AI assistant could not load. Please use the contact details on this page.</p>;
  return null;
}
