import CardComponent from "./CardComponent";

export default function CardGroupComponent({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return <CardComponent item={item} key={index} />;
      })}
    </>
  );
}
