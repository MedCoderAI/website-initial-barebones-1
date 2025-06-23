import React from "react";
import Link from "next/link";

export function AboutTabContent() {
  return (
    <>
      <h2 className="font-semibold text-xl">About</h2>
      <p className="mb-4 text-muted-foreground">
        Integrate this registry with AI IDEs using Model Context Protocol (MCP) using the following configuration. This utilizes this Registry's style tokens and the Shadcn CLI. To ensure this works, double check that the{' '}
        <Link href="/r/registry.json">
          <code className="inline text-sm tabular-nums underline">style:registry</code>
        </Link>{' '}
        contains the same colors as your{' '}
        <code className="inline text-sm tabular-nums">tokens.css</code>
      </p>
    </>
  );
}
