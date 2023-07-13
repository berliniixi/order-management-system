import React from "react";
import TableList from "../components/TableList";
import Modal from "../UI/Modal";
import SubNav from "../components/SubNav";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal";
import ProductList from "../components/ProductList";
import OrderedProducts from "../components/OrderedProducts";
import { DUMMY_ORDERS } from "../Data/tableorders";

function TablePage() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.toggle);
  const test = useSelector((state) => state.test.table);

  const { tableID, tableName, tableCartItems } = test;

  const cancelHandler = () => {
    dispatch(modalActions.toggle());
  };

  console.log("TableID", tableID);
  const products = tableCartItems[tableID];
  // const products = DUMMY_ORDERS[tableID];
  // const products = tableCartItems;

  console.log("products: ", products);
  return (
    <>
      {!showModal ? (
        <TableList />
      ) : (
        <Modal
          table={tableName}
          onCancel={cancelHandler}
          nav={<SubNav />}
          orderedProducts={
            <OrderedProducts
              products={
                products
                  ? JSON.parse(
                      localStorage.getItem(`tableCartItems ${tableID}`)
                    ) || []
                  : []
              }
            />
            // <orderedProducts products={products ? products : []} />
          }
        >
          <ProductList />
        </Modal>
      )}
    </>
  );
}

export default TablePage;
