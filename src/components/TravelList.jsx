import { useState } from "react";
import styles from "../styles/travelList.module.css";

function TravelList({ travelPlansData }) {
  const [plans, setPlans] = useState(travelPlansData);
  const deletPlan = (planId) => {
    const filteredPlans = plans.filter((plan) => {
      return plan.id !== planId;
    });

    setPlans(filteredPlans);
  };

  return (
    <div className={styles.list}>
      {plans.map((onePlan) => {
        return (
          <div className={styles.card} key={onePlan.id}>
            <img className={styles.img} src={onePlan.image} />
            <div className={styles.text}>
              <h3>
                {onePlan.destination}, ({onePlan.days} days)
              </h3>
              <p>{onePlan.description}</p>
              <p>
                <b>Price:</b> {onePlan.totalCost} €
              </p>
              <div className={styles.labels}>
                {onePlan.totalCost <= 350 && (
                  <div className={styles.labelGreen}>
                    <p>Great Deal</p>
                  </div>
                )}
                {onePlan.totalCost >= 1500 && (
                  <div className={styles.labelBlue}>
                    <p>Premium</p>
                  </div>
                )}
                {onePlan.allInclusive && (
                  <div className={styles.labelBlue}>
                    <p>All-Inclusive</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => deletPlan(onePlan.id)}
                className={styles.btnDelete}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
