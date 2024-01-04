import List_item from "./listItemComponent";

export default function DropDownListComponent(props) {
  const { list, input } = props;
  if (list == null || list == "" || list == []) {
    return <></>;
  }

  return (
    <div
      className="border border-2 mt-0 rounded-top p-0"
      style={{ position: "absolute", width: "100%", backgroundColor: "grey", zIndex: "1000" }}
    >
      {list.map((city, index) => {
        return (
          <List_item
            key={index}
            city={city}
            index={index}
            inputLength={input.length}
          ></List_item>
        );
      })}
    </div>
  );
}
