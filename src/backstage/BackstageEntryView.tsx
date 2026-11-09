import React from "react";
import { backstageComponents } from "./customComponents";
import { BackstageBlock, BackstageEntry, BackstageInline } from "./types";

const inlineText = (parts: BackstageInline[]): React.ReactNode =>
  parts.map((part, index) => {
    let content: React.ReactNode = part.text;
    if (part.bold) content = <strong>{content}</strong>;
    if (part.italic) content = <em>{content}</em>;
    if (part.href) {
      content = <a href={part.href}>{content}</a>;
    }
    return <React.Fragment key={index}>{content}</React.Fragment>;
  });

const mediaNote = (caption?: string, credit?: string) =>
  caption || credit ? (
    <figcaption className="backstage-media-note">
      {caption && <span>{caption}</span>}
      {caption && credit && <span> · </span>}
      {credit && <span>Credit: {credit}</span>}
    </figcaption>
  ) : null;

const renderBlock = (block: BackstageBlock, index: number): React.ReactNode => {
  switch (block.type) {
    case "paragraph":
      return <p key={index}>{inlineText(block.content)}</p>;
    case "heading":
      return block.level === 3 ? <h3 key={index}>{block.text}</h3> : <h2 key={index}>{block.text}</h2>;
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{inlineText(item)}</li>
          ))}
        </ListTag>
      );
    }
    case "image":
      return (
        <figure key={index} className="backstage-media">
          <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
          {mediaNote(block.caption, block.credit)}
        </figure>
      );
    case "audio":
      return (
        <figure key={index} className="backstage-media">
          <div className="backstage-media-title">{block.title}</div>
          <audio controls preload="none" src={block.src} aria-label={block.title}>
            Your browser does not support audio playback.
          </audio>
          {mediaNote(block.caption, block.credit)}
        </figure>
      );
    case "video":
      return (
        <figure key={index} className="backstage-media">
          <div className="backstage-media-title">{block.title}</div>
          <video controls preload="metadata" playsInline poster={block.poster} aria-label={block.title}>
            <source src={block.src} />
            {block.captionsSrc && <track kind="captions" src={block.captionsSrc} srcLang="en" label="English" />}
            Your browser does not support video playback.
          </video>
          {mediaNote(block.caption, block.credit)}
        </figure>
      );
    case "document":
      return (
        <div key={index} className="backstage-document">
          <a href={block.src} download={block.download || undefined}>{block.label}</a>
          {block.description && <p>{block.description}</p>}
          {block.credit && <small>Credit: {block.credit}</small>}
        </div>
      );
    case "link":
      return (
        <p key={index} className="backstage-link">
          <a href={block.href}>{block.label}</a>
          {block.description && <span> — {block.description}</span>}
        </p>
      );
    case "custom": {
      const Component = backstageComponents[block.componentId];
      return Component ? (
        <div key={index} className="backstage-custom"><Component /></div>
      ) : (
        <p key={index} role="status">Component unavailable: {block.componentId}</p>
      );
    }
  }
};

const formatDate = (date: string): string => {
  const parsed = new Date(date + "T12:00:00Z");
  return Number.isNaN(parsed.getTime())
    ? date
    : parsed.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
};

export const BackstageEntryView: React.FC<{ entry: BackstageEntry }> = ({ entry }) => (
  <article className="backstage-entry" id={entry.id} aria-labelledby={entry.id + "-title"}>
    <time dateTime={entry.date} className="backstage-date">{formatDate(entry.date)}</time>
    <h2 id={entry.id + "-title"}>{entry.title}</h2>
    {entry.summary && <p className="backstage-summary">{inlineText(entry.summary)}</p>}
    <div className="backstage-entry-content">
      {entry.blocks.map((block, index) => renderBlock(block, index))}
    </div>
  </article>
);
