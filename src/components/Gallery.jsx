import HornedBeast from "./HornedBeast";
export default function Gallery({ data, chooseBeast }) {
  return (
    <section className="gallery">
      {data.map((beast) => (
        <HornedBeast
          desc={beast.description}
          key={beast._id}
          name={beast.title}
          chooseBeast={chooseBeast}
          url={beast.image_url}
        />
      ))}
    </section>
  );
}
