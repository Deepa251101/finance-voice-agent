import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode };

export default function AssistantLink({ children = "Talk to our AI assistant", className = "button button-outline", ...props }: Props) {
  return <Link {...props} className={className} href="/contact#assistant-call">{children}<span aria-hidden="true">↗</span></Link>;
}
