import Link from "next/link";

interface NavLink {
  title: string;
  href: string;
}

interface ArticleNavProps {
  prev?: NavLink | null;
  next?: NavLink | null;
}

export function ArticleNav({ prev, next }: ArticleNavProps) {
  return (
    <nav className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-200 gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all group max-w-xs"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="font-semibold text-gray-800 text-sm">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all group max-w-xs text-right ml-auto"
        >
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="font-semibold text-gray-800 text-sm">{next.title}</div>
          </div>
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
