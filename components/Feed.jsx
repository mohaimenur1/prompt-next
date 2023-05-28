/** @format */

async function fetchPromptList() {
  const response = await fetch("http://localhost:3000/api/prompt");
  const prompts = response.json();
  return prompts;
}
const Feed = async () => {
  const prompts = await fetchPromptList();
  return (
    <section className="feed">
      <div className="max-w-6xl mx-auto">
        {prompts.map((prompt) => (
          <div
            className="shadow-[inset_-12px_-8px_40px_#46464620] rounded-lg p-10"
            key={prompt._id}
          >
            <h2 className="text-start text-semibold mb-10">{prompt.prompt}</h2>
            <p className="text start text-sm">{prompt.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
