type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: 50,
          width: 10,
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{ height: 10, width: 200, background: "black", marginLeft: 120 }}
      />
      <div
        style={{ height: 400, width: 10, background: "black", marginLeft: 120 }}
      />
      <div style={{ height: 10, width: 250, background: "black" }} />
    </div>
  );
}
