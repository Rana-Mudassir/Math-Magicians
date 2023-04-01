import { useEffect, useState } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=humor',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'arIFtVZGcs2vT1zIZyli+g==v755qa3tuyC6sjFm',
            },
            contentType: 'application/json',
          },
        );

        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch {
        setError(true);
      }
    };
    fetchData();
  }, [setData]);

  if (error) return <div><p>Something went Wrong!!!</p></div>;
  return (
    <div>
      {loading ? (
        <div><p className="quote">Working on it. Please wait !!!</p></div>
      ) : (
        data.map((item) => (
          <h2 className="quote" key={item.author}>
            {item.quote}
          </h2>
        ))
      )}
    </div>
  );
}

export default Quote;
