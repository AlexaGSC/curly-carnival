import React, { useState, useEffect } from "react";

function RemoteConsumer(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("petición");
    setTimeout(() => {
      fetch(props.url).then(response => {
        return response.json();
      });
    });

    setIsLoading(false);
  }, []);

  return (
    <div className="RemoteConsumer">
      <p>Consuming {props.url}</p>
      {isLoading && <span>Loading...</span>}
    </div>
  );
}

export default RemoteConsumer;
