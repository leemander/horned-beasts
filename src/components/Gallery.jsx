import HornedBeast from "./HornedBeast";
export default function Gallery() {
  return (
    <section className="gallery">
      <HornedBeast
        name="Highland Cow"
        url="https://images.unsplash.com/photo-1603104147308-73891c6be078"
        desc="The Highland is a Scottish breed of rustic cattle. It originated in the Scottish Highlands and the Western Islands of Scotland and has long horns and a long shaggy coat."
      />
      <HornedBeast />
    </section>
  );
}
