// src/TodosFetchAxios.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TodosFetchAxios() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelTokenSource = axios.CancelToken.source();

    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        cancelToken: cancelTokenSource.token,
      })
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          // request canceled
        } else {
          setError(err.message || "Unknown error");
          setLoading(false);
        }
      });

    return () => {
      // cancel when unmounting
      cancelTokenSource.cancel();
    };
  }, []);

  if (loading) return <p>Loading todos…</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Todos (limit 10)</h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
