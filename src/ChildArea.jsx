import { memo } from "react";
const style = {
  padding: "20px",
  color: "#fff",
  backgroundColor: "green"
};

export const ChildArea = memo((props) => {
  const array = [...Array(2000).keys()];
  array.forEach(() => {
    console.log("aiueo");
  });

  const { open, onClickClose } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
