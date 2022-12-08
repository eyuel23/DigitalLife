const ChartBar = (props: any) => {
  const barFillHeight: string =
    Math.round((props.score_out_of_10 / 10) * 100) + "%";

  return (
    <div className="h-full">
      <div className="h-[3rem] w-[36rem] border-2 border-black bg-white overflow:hidden flex rounded-2xl">
        <div
          className="bg-green-500 rounded-xl"
          style={{ width: barFillHeight }}
        ></div>
      </div>
    </div>
  );
};

export default ChartBar;
