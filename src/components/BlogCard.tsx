
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
}

const BlogCard = ({ id, title, excerpt, date, category, imageUrl }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{category}</Badge>
          <time className="text-sm text-muted-foreground">{date}</time>
        </div>
        <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
