import { useState } from "react";
import styled from "styled-components";

const Header = styled.h1`
  color: lightgreen;
`;

const List = styled.ul`
  background-color: lightgreen;
  list-style: none;
  padding: 10px 0px;
  padding-left: 0px !important;
  border: 1px solid black;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 15px;
  background-color: ${(props) => (props.active ? "white" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListCities = ({ items, heading, onSelectedItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <Header>{heading}</Header>
      {items.length === 0 && <p>No items available!</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={selectedIndex === index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListCities;
