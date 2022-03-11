import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "234967",
        title: "Blue summer shoes",
        description:
          "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
        price: 499,
        storage: 13,
        url: "https://images.pexels.com//photos//19090//pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      },
      {
        _id: "678453",
        title: "Nice Nikes",
        description:
          "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
        price: 900,
        storage: 55,
        url: "https://images.pexels.com//photos//1598505//pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      },
      {
        _id: "972342",
        title: "Funky shoes",
        description:
          "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
        price: 3499,
        storage: 876,
        url: "https://images.pexels.com//photos//1580267//pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        _id: "1467325",
        title: "Whites",
        description:
          "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
        price: 1499,
        storage: 32,
        url: "https://images.pexels.com//photos//1464625//pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        _id: "5456463",
        title: "Some shoes",
        description:
          "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
        price: 1299,
        storage: 24,
        url: "https://images.pexels.com//photos//2529148//pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    cart: [],
    total: 0,
  };


  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });

    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
      alert("Produkten har lagts till i varukorgen.");
      this.getTotal();
    }  
  };


  reduction = id => {
    const { cart } = this.state;
    cart.forEach(item => {
      if (item._id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Vill du radera denna produkt?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, product) => {
      return prev + (product.price * product.count);
    }, 0)
    this.setState({ total: res })
  };
  


  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;

    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
