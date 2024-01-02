import List_item from "./listItemComponent";

export default function DropDownListComponent(props) {
  const { list, input } = props;
  //console.log("List is: " + list);
  //console.log(input);
  if (list == null || list == "" || list == []) {
    return <></>;
  }
  /*
  const listItems = list.map((city, index) => (
    <div key={index} className="p-2">
      <strong>{city.substring(0, input.length)}</strong>
      {city.substring(input.length)}
    </div>
  ));*/

  //return <div className="border border-2 mt-0 rounded-top"></div>;

  return (
    <div className="border border-2 mt-0 rounded-top p-0" style={{position: "absolute", width: '100%', backgroundColor: 'grey'}}>
      {list.map((city, index) => {
        return (
          <List_item key={index}
            city={city}
            index={index}
            inputLength={input.length}
          ></List_item>
        );
      })}
    </div>
  );
}
