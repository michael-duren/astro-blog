import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}</h3>
      <button onClick={() => setGreeting(randomMessage)}>New Greeting</button>
    </div>
  );
}
