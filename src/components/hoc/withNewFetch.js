import { useEffect, useState } from "react";

const withNewFetch = (InputComponent, requestUrl) => {
  const WithNewFetchComp = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
      console.log('withNewFetch :: useEffect :  requestUrl : ', requestUrl);

      requestUrl && fetchData(requestUrl);
    }, []);

    const fetchData = async (rUrl) => {
      console.log('2. fetchData');
      const fetchResponse = await fetch(rUrl);
      setData(await fetchResponse.json());
    }

    return (
      <InputComponent {...props} data={data} />
    )
  }
  return WithNewFetchComp;
}

export default withNewFetch