"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Col, Row, Spinner } from "react-bootstrap";

const REPO_URL = "https://api.github.com/users/Akbarabi/repos";

const Repos = React.memo(() => {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  // Fetch user repositories
  const fetchRepos = useCallback(async () => {
    const controller = new AbortController();
    try {
      const response = await fetch(REPO_URL, { signal: controller.signal });
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error fetching repos:", error);
      }
    } finally {
      setLoadingRepos(false);
    }

    return () => controller.abort(); // Abort the fetch if component unmounts
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  const memoizedRepos = useMemo(
    () =>
      repos.map((repo) => (
        <Col key={repo.id} className="github-box p-4">
          <h2 className="text-lg sm:text-xl font-bold mb-2">{repo.name}</h2>
          <p className="text-sm sm:text-base mb-4">{repo.description || "No description"}</p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all text-sm sm:text-base"
          >
            Learn More
          </a>
        </Col>
      )),
    [repos]
  );

  if (loadingRepos) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Row className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white gap-5 m-4 sm:m-6 md:m-8 lg:m-10">
      {memoizedRepos}
    </Row>
  );
});

Repos.displayName = "Repos";

export default Repos;
