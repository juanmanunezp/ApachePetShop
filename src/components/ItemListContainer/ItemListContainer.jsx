
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const collectionRef = collection(db, "products");
      const q = idCategory ? query(collectionRef, where("category", "==", idCategory)) : collectionRef;
      const dataDb = await getDocs(q);
      const productsDb = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));
      setProducts(productsDb);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
