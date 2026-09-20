import type { FeedItem } from "@/types/feed";

type AssetBadgeProps = Pick<FeedItem, "kind"> & { author: string | undefined };

export function AssetBadge({ kind, author }: AssetBadgeProps) {
  return (
    <div className="absolute bottom-2 left-2 flex items-center text-[0.6rem] gap-1 rounded-full bg-black/35 px-2 py-0.5 backdrop-blur-md">
      <span className="leading-none">{kind === "video" ? "🎬" : "🖼️"} {author ?? "Author Name"}</span>
    </div>
  );
}
