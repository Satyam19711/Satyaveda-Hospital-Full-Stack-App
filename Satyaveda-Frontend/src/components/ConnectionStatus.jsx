import { useEffect, useState } from "react";
import axios from "axios";

const ConnectionStatus = ({ backendUrl }) => {
  const [status, setStatus] = useState("connecting");

  const checkHealth = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/health");

      if (data.success) {
        setStatus("connected");
      } else {
        setStatus("connecting");
      }
    } catch (error) {
      setStatus("connecting");
    }
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 right-2 flex items-center gap-2 text-sm">
      <span
        className={`w-2 h-2 rounded-full ${
          status === "connected" ? "bg-green-500" : "bg-yellow-500"
        }`}
      ></span>

      <p className="text-gray-600">
        {status === "connected"
          ? "Database connection successful"
          : "Connecting to database…"}
      </p>
    </div>
  );
};

export default ConnectionStatus;
