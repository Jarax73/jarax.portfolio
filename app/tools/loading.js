import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/jared.png"
        alt=""
        style={{ boxShadow: "0 0 10px #cecece" }}
      />
      <h1>Loading...</h1>
    </div>
  );
}
