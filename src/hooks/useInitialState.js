import { useState } from 'react';

const initialState = {
  cart: []
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [toggleOrder, setToggleOrder] = useState(false);
  const [detail, setDetail] = useState({});
  const [toggleDetail, setToggleDetail] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  const addToCart = (payload) => {
    const cartList = state.cart;
    let newCartList = cartList;

    const index = cartList.findIndex((item) => item.id === payload.id);

    if (index >= 0) {
      newCartList[index] = {
        ...newCartList[index],
        qty: newCartList[index].qty + 1,
      };
    } else {
      payload.qty = 1;
      newCartList = [...cartList, payload];
    }

    setState({
      ...state,
      cart: newCartList,
    });
  };

  const removeFromCart = (payload) => {
    const cartList = state.cart;
    let newCartList = cartList;

    const index = cartList.findIndex((item) => item.id === payload.id);
    newCartList[index] = {
      ...newCartList[index],
      qty: newCartList[index].qty - 1,
    };

    const updatedList = newCartList.filter((item) => item.qty > 0);

    setState({
      ...state,
      cart: updatedList,
    });
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  const handleTotalItems = () => {
    const reducer = (acumulador, currentValue) => acumulador + currentValue.qty;
    const totalQty = state.cart.reduce(reducer, 0);

    return totalQty;
  };

  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    handleToggleOrder,
    handleSumTotal,
    handleTotalItems,
    detail,
    setDetail,
    toggleDetail,
    setToggleDetail,
    toggleMobile,
    setToggleMobile,
    toggle,
    setToggle
  };
};

export { useInitialState };