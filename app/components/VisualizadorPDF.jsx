"use client";

const VisualizadorPDF = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen ">
        <embed
          src="http://localhost:3000/pdf/G500-Folleto-SucursalesC.pdf"
          type="application/pdf"
          className="w-full md:w-5/5 h-4/5 "
        />
      </div>
    </>
  );
};
export default VisualizadorPDF;
