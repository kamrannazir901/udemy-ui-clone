const FixedElement = ({ children, overflow = true }) => {
  if (!children) return null;

  return (
    <div
      className={`fixed bg-gray-100/30 backdrop-blur-sm ${
        overflow ? "overflow-y-auto" : ""
      } inset-0 w-full h-full z-1000`}
    >
      {children}
    </div>
  );
};

export default FixedElement;
