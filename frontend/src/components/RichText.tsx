import React from 'react';

/**
 * Renders article body copy, turning inline [The Surfer](https://www.thesurferweligama.com/en) markup
 * into real anchors. This is how partner businesses earn their in-context
 * backlinks from within an article — links are followed (no rel="nofollow").
 */
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

export const RichText: React.FC<{ children: string }> = ({ children }) => {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(children)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(children.slice(lastIndex, match.index));
    }
    nodes.push(
      <a
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        target="_blank"
        rel="noopener"
        className="text-[#c57d71] hover:text-[#a8635a] underline decoration-1 underline-offset-2 transition-colors"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    nodes.push(children.slice(lastIndex));
  }

  return <>{nodes}</>;
};
