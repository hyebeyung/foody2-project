import SectionTitle from '../common/SectionTitle';
import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    image: '/images/blog/blog-1.jpg',
    title: 'How to cultivate organic fruits and vegetables in own firm',
    author: 'Admin',
    date: '01 Jan, 2045',
    delay: 0.1
  },
  {
    id: 2,
    image: '/images/blog/blog-2.jpg',
    title: 'How to cultivate organic fruits and vegetables in own firm',
    author: 'Admin',
    date: '01 Jan, 2045',
    delay: 0.3
  },
  {
    id: 3,
    image: '/images/blog/blog-3.jpg',
    title: 'How to cultivate organic fruits and vegetables in own firm',
    author: 'Admin',
    date: '01 Jan, 2045',
    delay: 0.5
  }
];

const BlogSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-[500px] mx-auto mb-16">
          <SectionTitle 
            title="Latest Blog"
            description="Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo."
            className="text-center"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              delay={blog.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;