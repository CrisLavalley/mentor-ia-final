
interface Props {
  content: string;
}
export default function Results({ content }: Props) {
  return (
    <div className="mt-6 prose dark:prose-invert max-w-none">
      <article dangerouslySetInnerHTML={{ __html: content ? content.replace(/\n/g, "<br/>") : "" }} />
    </div>
  );
}
