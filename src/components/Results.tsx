interface Props {
  content: string;
}

export default function Results({ content }: Props) {
  if (!content) return null;

  return (
    <div className="mt-8">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 prose prose-lg dark:prose-invert max-w-none transition-all duration-300">
        <article
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n/g, "<br/>"),
          }}
        />
      </div>
    </div>
  );
}
