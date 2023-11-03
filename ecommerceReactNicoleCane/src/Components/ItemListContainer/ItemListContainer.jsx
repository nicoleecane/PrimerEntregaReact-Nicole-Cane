import React from 'react';
import styles from "./app.module.css";


export const ItemListContainer = ({greeting}) => {
  return (
    <div >
      <h1>{greeting}</h1>
      <img className={styles.attack4} src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1dea4b0c71a1b3837e27077b93bfc217.jpe" alt="" width="700" height="500" class="d-inline-block align-text"  />
      <button className={styles.seasons}>Watch Previous Seasons</button>
    </div>
  )
}
