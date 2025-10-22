import React, { useState, useEffect, useRef } from "react";

export default function ApiListPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const sentinelRef = useRef();

  // Fetch data whenever the page number changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => setPosts((prev) => [...prev, ...data]))
      .catch(() => setError("Failed to load data"))
      .finally(() => setLoading(false));
  }, [page]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading) {
          setPage((p) => p + 1);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [loading]);

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">API Data (Infinite Scroll)</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 rounded border dark:bg-gray-700 dark:text-white w-full"
      />

      {/* Posts list */}
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="border rounded p-3 mb-2 bg-white dark:bg-gray-800"
        >
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

      {/* Sentinel for infinite scroll */}
      <div ref={sentinelRef}></div>

      {/* Loading & error states */}
      {loading && <p className="mt-2">Loading more...</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}

      {/* No posts found */}
      {!loading && filteredPosts.length === 0 && <p>No posts found.</p>}
    </div>
  );
}
