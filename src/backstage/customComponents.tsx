import React from "react";

/**
 * Reusable React components for experimental site sections.
 * Register a component under a stable ID, then render it from an entry via
 * { type: "custom", componentId: "example-id" }.
 *
 * Keep each component in its own file so it can later move to a public page
 * without changing or promoting other backstage entries.
 */
export const backstageComponents: Record<string, React.ComponentType> = {};
