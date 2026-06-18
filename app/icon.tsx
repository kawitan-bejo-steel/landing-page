import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B2028",
      }}
    >
      {/* Outer gear ring */}
      <div
        style={{
          position: "absolute",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          border: "36px solid #D4A017",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      {/* Gear teeth — top/bottom/left/right stubs */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <div
          key={deg}
          style={{
            position: "absolute",
            width: "40px",
            height: "60px",
            background: "#D4A017",
            borderRadius: "6px",
            transform: `rotate(${deg}deg) translateY(-210px)`,
          }}
        />
      ))}
      {/* Center letter */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: "220px",
            color: "#D4A017",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          B
        </span>
      </div>
    </div>,
    { ...size }
  );
}
