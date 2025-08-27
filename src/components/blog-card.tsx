interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  externalUrl?: string; // optional external link
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  category,
  imageUrl,
  externalUrl,
}: BlogCardProps) => {
  return (
    <a
      href={externalUrl || `/blog/${id}`}
      target={externalUrl ? '_blank' : '_self'}
      rel={externalUrl ? 'noopener noreferrer' : undefined}
      className='block rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
    >
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-muted-foreground mb-4'>{excerpt}</p>
        <p className='text-sm font-mono text-gray-500'>{date}</p>
      </div>
    </a>
  );
};

export default BlogCard;
