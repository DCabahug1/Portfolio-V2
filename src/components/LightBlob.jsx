import React, { useEffect, useState } from "react";

function LightBlob() {
  useEffect(() => {
    const handleMouse = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const blob = document.querySelector("#blob");
      const blobContainer = document.querySelector("#blob-container");

      if (!(mouseX && mouseY)) {
        return;
      }

      const rect = blobContainer.getBoundingClientRect();
      const relativeX = mouseX - rect.left;
      const relativeY = mouseY - rect.top;

      blob.style.top = relativeY - 30 + "px";
      blob.style.left = relativeX - 30 + "px";
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div
      id="blob-container"
      style={{
        height: "100svh",
        width: "100svw",
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <div
        id="blob"
        style={{
          backgroundColor: "rgba(100,100,255,1)",
          height: "60px",
          width: "60px",
          position: "absolute",
          filter: "blur(50px)",
          borderRadius: "180px",
          // transition: "0.3s"
        }}
      ></div>
    </div>
  );
}

export default LightBlob;
