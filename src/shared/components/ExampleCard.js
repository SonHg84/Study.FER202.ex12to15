// Khung trình bày dùng chung. State và xử lý của bài nằm trong component con.
export default function ExampleCard({ title, description, children }) {
  return (
    <section className="example-card">
      <h2>{title}</h2>
      {description && <p className="example-description">{description}</p>}
      <div className="example-content">{children}</div>
    </section>
  );
}
