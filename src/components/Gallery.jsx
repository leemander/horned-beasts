import HornedBeast from "./HornedBeast";
export default function Gallery(props) {
  return (
    <section className="gallery">
      {props.data.map((beast) => (
        <HornedBeast
          id={beast._id}
          name={beast.title}
          desc={beast.description}
          url={beast.image_url}
        />
      ))}
    </section>
  );
}
