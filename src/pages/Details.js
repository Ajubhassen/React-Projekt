
import React, { useEffect, useContext } from 'react'
import { DataContext } from '../components/Context'
import '../pages/css/Details.css'
import { Link, useParams } from 'react-router-dom';

function Details() {

  const { addCart, products } = useContext(DataContext);
  const { id } = useParams();

  const getProduct = () => {
    if (id) {
      const res = products;
      const data = res.filter(item => {
        return item._id === id;
      })
      return data;
    }
  };

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <>
      {
        getProduct().map(item => (
          <div className="details" key={item._id}>
            <img src={item.url} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <p className="de">{item.description}</p>
              <p className="lager">Lagersaldo: {item.storage} kvar</p>
              <p>{item.content}</p>
              <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                Add to cart
              </Link>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Details