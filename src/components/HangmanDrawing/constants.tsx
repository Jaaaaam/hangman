export const HEAD = (
  <div
    style={{
      height: 50,
      width: 50,
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: 50,
      right: -30,
    }}
  />
);

export const BODY = (
  <div
    style={{
      width: 10,
      height: 100,
      background: "black",
      position: "absolute",
      top: 120,
      right: 0,
    }}
  />
);

export const RIGHT_ARM = (
  <div
    style={{
      width: 100,
      height: 10,
      background: "black",
      position: "absolute",
      top: 150,
      right: -100,
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
export const LEFT_ARM = (
  <div
    style={{
      width: 100,
      height: 10,
      background: "black",
      position: "absolute",
      top: 150,
      right: 10,
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

export const RIGHT_LEG = (
  <div
    style={{
      width: 100,
      height: 10,
      background: "black",
      position: "absolute",
      top: 210,
      right: -90,
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
export const LEFT_LEG = (
  <div
    style={{
      width: 100,
      height: 10,
      background: "black",
      position: "absolute",
      top: 210,
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);
