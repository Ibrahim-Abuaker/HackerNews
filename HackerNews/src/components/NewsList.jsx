import React from "react";

export default function NewsList({ data }) {
  const getDomainFromUrl = (url) => {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  };

  return (
    <div className="newsListContainer">
      {data.map((item) => (
        <div className="newsList" key={item.objectID}>
          <h3><a href={item.url}>{item.title}</a></h3>
          <p>(<a href={item.url}>{getDomainFromUrl(item.url)}</a>)</p>
          <p>by: {item.author} | {item.updated_at} | comments: {item.num_comments}</p>
        </div>
      ))}
    </div>
  );
}
