import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Image
        src="/images/jared.png"
        alt=""
        style={{ boxShadow: "0 0 10px #cecece", borderRadius: "50%" }}
        width={200}
        height={200}
      />
      <h1>Loading...</h1>
    </div>
  );
}
