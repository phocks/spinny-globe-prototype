import { useEffect } from "react";

function Globe() {
  useEffect(() => {
    console.log("React component mounted: Globe");
  }, []);

  return <div>Hello</div>;
}

export default Globe;
