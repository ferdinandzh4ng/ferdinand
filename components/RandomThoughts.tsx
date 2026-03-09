import type { Thought } from "@/content/thoughts";

interface RandomThoughtsProps {
  thoughts: Thought[];
}

export function RandomThoughts({ thoughts }: RandomThoughtsProps) {
  if (thoughts.length === 0) {
    return (
      <p className="text-zinc-400">
        No thoughts yet. Add some in <code className="rounded bg-white/10 px-1">content/thoughts.ts</code>.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {thoughts.map((thought, i) => (
        <li
          key={i}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
        >
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
            <span className="font-semibold text-white">Ferdinand</span>
            <span className="text-sm text-zinc-500">@ferdinand</span>
          </div>
          <p className="mt-1 whitespace-pre-wrap text-[15px] leading-relaxed text-zinc-300">
            {thought.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
