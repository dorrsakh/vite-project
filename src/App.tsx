import ListGroup from "./components/ListGroup";
import ListCities from "./components/ListCities";
import Like from "./components/Like";

function App() {
  const cities = [
    "Tehran",
    "Paris",
    "New York",
    "Tokyo",
    "London",
    "California",
  ];

  function handleOnSelectedItem(item: string) {
    console.log(item);
  }

  return (
    <div className="container">
      <ListGroup
        items={cities}
        heading="cities"
        onSelectedItem={handleOnSelectedItem}
      />
      <br />
      <ListCities
        items={cities}
        heading="cities"
        onSelectedItem={handleOnSelectedItem}
      />
      <Like />
    </div>
  );
}

export default App;
