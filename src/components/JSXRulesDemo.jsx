export default function JSXRulesDemo() {
  return (
    <div className="jsx-rules">
      {/* Rule 1: Single Root Element */}
      <section>
        <h2>1. Single Root Element</h2>
        <div className="example">
          Everything is wrapped in one parent element
        </div>
      </section>

      {/* Rule 2: Close All Tags */}
      <section>
        <h2>2. Closed Tags</h2>
        <div>
          <img src="example.jpg" alt="example" />
          <br />
          <input type="text" placeholder="Self-closing tags need the />" />
        </div>
      </section>

      {/* Rule 3: camelCase Properties */}
      <section>
        <h2>3. camelCase Properties</h2>
        <div>
          <div className="not-class">Use className instead of class</div>
          <label htmlFor="example">Use htmlFor instead of for</label>
          <div style={{ backgroundColor: 'lightblue' }}>
            Style properties are camelCased
          </div>
        </div>
      </section>
    </div>
  );
}

