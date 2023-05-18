import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let response = await fetch(
        "https://react-http-d2c2e-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      let response = await fetch(
        "https://react-http-d2c2e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
