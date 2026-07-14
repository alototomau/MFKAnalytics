export function Button({ as: Component = "button", className = "", variant = "default", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = { default: "", outline: "border" };
  return <Component className={`${base} ${variants[variant] || ""} ${className}`} {...props}>{children}</Component>;
}
