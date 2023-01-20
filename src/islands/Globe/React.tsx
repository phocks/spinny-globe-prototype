import { useEffect, useId } from "react";
import { v5 as uuidv5 } from "uuid";

import mountGlobe from "./mountGlobe";

function Globe({}) {
  const id = useId(); // server-client consistent id
  const mountHash = `spinny-globe-mount-${uuidv5(id, uuidv5.URL)}`;

  useEffect(() => {
    mountGlobe({ mountName: mountHash });
  }, []);

  return <div className={mountHash}></div>;
}

export default Globe;
