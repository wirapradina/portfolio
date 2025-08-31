import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <div className="flex flex-col items-center text-center gap-4">
        <h3 className="text-orange font-bold uppercase text-2xl">
          MSIB Batch 7
        </h3>
        <p className="font-bold text-4xl text-lightGrey">
          PT Hacktivate Teknologi Indonesia
        </p>
        <p className="text-center text-gray-800">
        Participated in the MSIB Batch 7 program at "PT Hacktivate Teknologi Indonesia",  
        gaining hands-on experience in 'ReactJS For Front End Website Developer' 
      </p>
      </div>
    </div>
  );
};

export default ExperienceTopLeft;
