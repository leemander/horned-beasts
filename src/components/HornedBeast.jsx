export default function HornedBeast(props) {
  return (
    <article className="gallery__beast">
      <h2>{props.name}</h2>
      <img src={props.url} alt={props.name} />
      <p>{props.desc}</p>
    </article>
  );
}
