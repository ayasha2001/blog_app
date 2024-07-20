"use client"

// Component Imports
import SubscribeDialog from "./components/about/SubscribeDialog";
import Landing from "./components/landing/Landing";

export default function Home() {

  const NEXT_TEST_API_CALL = '/api/test-api'

  const dummyApiCall = () => {
    const res = fetch(NEXT_TEST_API_CALL, {
      // const res = fetch('http://localhost:8080/write-with-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'Dummy Title'
        })
      })
      .then((res) => res.json())
      .then((data) => console.log(data, ':: data from server'))
      .catch((err) => console.log(err, ':: error from server'));
  }

  return (
    <main>
      <button onClick={dummyApiCall}>Hello</button>
      <Landing/>
    </main>
  );
}
