export default function Image({ src, width = "150px", height = "150px" }) {
  const style = {
    backgroundImage: `url(${src})`,
    border: "1px solid #333",
  };
  return (
    <div
      className={
        "w-[" + width + "] h-[" + height + "] bg-no-repeat bg-center bg-cover"
      }
      style={style}
    ></div>
  );
}
