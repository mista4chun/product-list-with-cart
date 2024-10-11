function Button({ children, onClick, type }) {
  const base =
    "bg-Red rounded-full text-Rose100 md:px-4 md:py-2 px-6 py-2   font-bold text-lg";

  const styles = {
    primary:
      "bg-Red rounded-full text-Rose100 px-6 py-2.5 w-full mt-5 mb-10 font-bold text-md hover:bg-red-800",

    round: "border rounded-full text-Rose300 p-0.5 hover:border-Rose500",

    quantity: base + "w-fit flex items-center  text-center gap-8 -mt-5 ",

    addToCart:
      "flex items-center gap-1 w-fit md:px-4  border border-Rose300 px-6  py-2 justify-center -mt-5 rounded-full bg-Rose50 hover:border-Red hover:text-Red",
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
