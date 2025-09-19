import AwsmdSidebar1 from "../ChildComponents.jsx/Page3/AwsmdSidebar1";

const Awsmd = () => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-12">
        <div className="col-span-3 m-3 bg-green-300">
          <AwsmdSidebar1 />
        </div>
      </div>
    </div>
  );
};

export default Awsmd;
