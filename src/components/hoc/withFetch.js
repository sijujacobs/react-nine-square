import { useEffect, useState } from "react";

const withFetch = (InputComponent, requestUrl) => {
  const WithFetchComponent = (props) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
      requestUrl && fetchData(requestUrl);
    }, []);
    const fetchData = async (rUrl) => {
      try {
        const fetchResponse = await fetch(rUrl);
        setData(await fetchResponse.json());
      } catch (error) {
        setError('Error in fetching data, Please try again later.')
      }

    }
    return (
      <InputComponent {...props} data={data} error={error} />
    );
  }
  return WithFetchComponent;
}

export default withFetch;