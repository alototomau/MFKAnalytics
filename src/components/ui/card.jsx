export function Card({ as: Component = "div", className = "", children, ...props }) {
  return <Component className={`rounded-lg border bg-white ${className}`} {...props}>{children}</Component>;
}

export function CardContent({ className = "", children, ...props }) {
  return <div className={className} {...props}>{children}</div>;
}
