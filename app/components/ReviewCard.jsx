const ReviewCard = ({ opinion, name, ciudad, tienda }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:w-80 md:mx-10 mt-5">
      <p className=" text-xs md:text-sm mt-4">{opinion}</p>

      <hr className="border-t border-main my-4 w-full" />
      <p className=" text-xs md:text-sm mt-4 font-bold">{name}</p>
      <p className=" text-xs md:text-xsm mt-4">
        {tienda} {ciudad}
      </p>
    </div>
  );
};
export default ReviewCard;
