import React, { useState, useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";

export const DropDownMenu = () => {
  const { store, actions } = useContext(Context);
  const [favorite, setFavorite] = useState({});
  const [selectedFavorites, setselectedFavorites] = useState({ favorites: {} });

  const deleteAFavorite = store.favorites.map((item, index) => {
    return (
      <Dropdown.Item key={index} value={index}>
        {item}
        <Button
          onClick={() => actions.deleteFavorites(item)}
          className="delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </Button>
      </Dropdown.Item>
    );
  });
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" className="dropdown-basic">
          <div className="drp">
            <div className="drp counter">
              Favorites {store.favorites.length}
            </div>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu
          defaultValue={favorite}
          onChange={(event) => {
            setFavorite(event.target.value);
            setselectedFavorites({
              ...selectedFavorites,
              favorites: store.favorites.find(
                (item) => item.id == event.target.value
              ),
            });
          }}
        >
          {deleteAFavorite}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
