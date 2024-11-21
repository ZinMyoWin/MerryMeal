import React, { useState } from 'react';
import './status.css';

const Status = () => {
  const [orders, setOrders] = useState([
    {
      mealId: 1,
      mealName: 'Chicken Alfredo',
      kitchenId: 101,
      orderStatus: 'Delivering',
    },
    {
      mealId: 2,
      mealName: 'Vegetable Stir-fry',
      kitchenId: 102,
      orderStatus: 'To Deliver',
    },
    {
      mealId: 3,
      mealName: 'Margherita Pizza',
      kitchenId: 103,
      orderStatus: 'Delivered',
    },
  ]);

  const changeStatus = (index) => {
    const updatedOrders = [...orders];
    if (updatedOrders[index].orderStatus === 'Delivering') {
      updatedOrders[index].orderStatus = 'Delivered';
    } else if (updatedOrders[index].orderStatus === 'Delivered') {
      updatedOrders[index].orderStatus = 'To Deliver';
    } else {
      updatedOrders[index].orderStatus = 'Delivering';
    }
    setOrders(updatedOrders);
  };

  return (
    <div className="status-container">
      <table className="status-table">
        <thead>
          <tr>
            <th>Meal ID</th>
            <th>Member ID</th>
            <th>Meal Name</th>
            <th>Kitchen ID</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.mealId}>
              <td>{order.mealId}</td>
              <td>{order.memberId}</td>
              <td>{order.mealName}</td>
              <td>{order.kitchenId}</td>
              <td>{order.orderStatus}</td>
              <td>
                <button className='status-btn' onClick={() => changeStatus(index)}>Change Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Status;
