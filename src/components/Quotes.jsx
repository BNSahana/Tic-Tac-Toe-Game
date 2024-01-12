import React, { useState, useEffect } from "react";
import "./Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        if (!data || !data.slip.advice) throw new Error();
        setQuote(data.slip);
      } catch (error) {
        if (!quote) {
          setQuote({
            advice:
              "It is better to fail in originality than to succeed in imitation",
            id: 100,
          });
        }
      }
    };

    const interval = setInterval(fetchQuote, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [quote]);

  return (
    <div>
      {quote && (
        <div className="quote-box">
          <h3>Quote #{quote.id}</h3>
          <p>{`“${quote.advice}”`}</p>
          <div className="aqua-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <rect width="6" height="6" fill="#192A32" />
              <rect x="6" y="6" width="6" height="6" fill="#192A32" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
