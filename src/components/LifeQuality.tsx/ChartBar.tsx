import { motion } from "framer-motion";
const ChartBar = (props: any) => {
  const barFillHeight: string =
    Math.round((props.score_out_of_10 / 10) * 100) + "%";

  return (
    <div className="h-full">
      <div className="h-[2rem] w-[36rem] border-2 border-black bg-white overflow:hidden flex rounded-2xl">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: barFillHeight }}
          transition={{ delay: 0.2, duration: 1 }}
          className="bg-blue-900 rounded-xl"
          style={{ width: barFillHeight }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ChartBar;
