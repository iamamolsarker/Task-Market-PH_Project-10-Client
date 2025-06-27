import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Successful Freelancing in 2024",
      excerpt:
        "Learn the essential strategies to build a thriving freelance career and attract high-paying clients.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&auto=format",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      category: "Freelancing Tips",
    },
    {
      id: 2,
      title: "How to Price Your Services as a Freelancer",
      excerpt:
        "A comprehensive guide to setting competitive rates that reflect your value and expertise.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      category: "Pricing Strategy",
    },
    {
      id: 3,
      title: "Building Long-term Client Relationships",
      excerpt:
        "Discover proven methods to turn one-time clients into loyal, repeat customers.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&auto=format",
      author: "Emily Davis",
      date: "Dec 10, 2024",
      category: "Client Relations",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tips, trends, and insights from the
            freelancing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <p>user</p>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <p>calender</p>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More
                  
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
