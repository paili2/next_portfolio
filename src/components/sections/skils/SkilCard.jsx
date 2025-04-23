const SkilCard = (props) => {
  return (
    <article
      className={`w-[500px] h-[210px] border-4 border-amber-300 rounded-4xl relative justify-self-${props.justify} py-1`}
    >
      <strong className="font-bold text-2xl bg-white text-black absolute -top-5.5 left-0 px-5 py-1 rounded-xl">
        {props.skilName}
      </strong>
      <div className="flex items-center gap-7">
        <div className="w-1/3">
          <img src={props.src} alt="" />
        </div>
        <span className="skil-explanation">{props.explanation}</span>
      </div>
    </article>
  );
};

export default SkilCard;
