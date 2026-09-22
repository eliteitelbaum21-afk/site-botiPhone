import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders a plain string with minimal markdown support:
 * [text](/href) for internal links and **text** for bold.
 */
export default function RichText({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}

const TOKEN_REGEX = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = TOKEN_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      nodes.push(
        <Link key={key++} href={match[2]}>
          {match[1]}
        </Link>
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={key++}>{match[3]}</strong>);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
