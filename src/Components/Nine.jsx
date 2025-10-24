export default function Nine() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>9️⃣ Why Understanding Your UI as Trees is Useful</h3>
      <p>
        In React, your user interface is built as a <strong>tree of components</strong>.
        Each component can contain other components — just like branches of a tree.
        This structure makes it easy to visualize, update, and manage your app’s UI.
      </p>

      <p>
        When React re-renders your app, it compares the previous and new trees to
        efficiently update only what’s changed. This process is called the{" "}
        <strong>Virtual DOM diffing</strong>.
      </p>

      <h4>Example UI Tree:</h4>
      <pre
        style={{
          backgroundColor: "#1e1e1e",
          color: "#00e676",
          padding: "10px",
          borderRadius: "8px",
          fontSize: "14px",
          overflowX: "auto"
        }}
      >
{`App
 ├─ Header
 ├─ Main
 │   ├─ Sidebar
 │   └─ Content
 │       ├─ Article
 │       └─ Footer
 └─ Contact`}
      </pre>

      <p>
        Thinking of your UI as a tree helps you design better component hierarchies
        and debug your app more effectively.
      </p>
    </div>
  );
}
