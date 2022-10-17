import './ExpenseItem.css';
function ExpenseItem(propData) {  
  return (
    <div className="expense-item">
      <div>{propData.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{propData.title}</h2>
        <div className="expense-item__price">${propData.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
