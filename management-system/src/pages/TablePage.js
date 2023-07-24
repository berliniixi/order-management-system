import React from "react";
import TableList from "../components/TableList";
import Modal from "../UI/Modal";
import SubNav from "../components/SubNav";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal";
import ProductList from "../components/ProductList";
import OrderedProducts from "../components/OrderedProducts";

function TablePage() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.toggle);
  const test = useSelector((state) => state.test.table);

  const { tableID, tableName, tableCartItems } = test;

  const cancelHandler = () => {
    dispatch(modalActions.toggle());
  };

  const products = tableCartItems[tableID];

  // console.log("products: ", products);

  return (
    <>
      {!showModal ? (
        <TableList />
      ) : (
        <Modal
          table={tableName}
          onCancel={cancelHandler}
          nav={<SubNav />}
          total={JSON.parse(
            localStorage.getItem(`TableTotalAmount ${tableID}`)
          )}
          orderedProducts={
            <OrderedProducts
              products={
                products // read products from localStorage
                  ? JSON.parse(
                      localStorage.getItem(`tableCartItems ${tableID}`)
                    ) || []
                  : []
              }
            />
          }
        >
          <ProductList />
        </Modal>
      )}
    </>
  );
}

export default TablePage;
