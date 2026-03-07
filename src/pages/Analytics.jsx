import { useMemo, useState } from "react";

function Analytics() {
  const [numbers] = useState([10, 20, 30, 40]);

  const total = useMemo(() => {
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div className="container">
      <h2>Analytics Page</h2>
      <p>Total Value: {total}</p>
    </div>
  );
}

export default Analytics;