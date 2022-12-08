const ChartBar = (props: any) => {
  const barFillHeight: string =
    Math.round((props.score_out_of_10 / 10) * 100) + "%";

  return (
    <div className="h-full">
      <div className="h-[2rem] w-[20rem] border-2 border-black bg-white overflow:hidden flex">
        <div className="bg-green-500" style={{ width: barFillHeight }}></div>
      </div>
    </div>
  );
};

export default ChartBar;
