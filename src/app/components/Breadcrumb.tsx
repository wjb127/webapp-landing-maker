interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://webapp-landing-maker.vercel.app${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <nav aria-label="브레드크럼 네비게이션" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {item.current ? (
                <span 
                  className="font-medium text-gray-900" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.href} 
                  className="hover:text-blue-600 transition-colors"
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
} 