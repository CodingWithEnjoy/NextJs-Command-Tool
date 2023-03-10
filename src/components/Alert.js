import React, { useEffect } from "react";

const Alert = ({ message, type }) => {
  const [color, setColor] = React.useState("");

  useEffect(() => {
    switch (type) {
      case "success":
        setColor("border-green");
        break;
      case "danger":
        setColor("border-red");
        break;
      case "warning":
        setColor("border-yellow");
        break;
      default:
      case "info":
        setColor("border-blue");
        break;
    }
  }, [type]);

  return (
    <div className={`w-full p-4 rounded my-4 border-1 text-center ${color}`}>
      {message}
    </div>
  );
};

export default Alert;
