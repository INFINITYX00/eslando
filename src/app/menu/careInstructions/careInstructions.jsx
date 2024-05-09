import Title from "../title/title";

export default function CareInstructions({ careInstructions }) {
  return (
    <>
      <Title title="Care Instructions!" />
      <ul>
        {careInstructions.map((instruction) => (
          <li key={instruction.instruction}>
            <img src={instruction.image} />
            <p>{instruction.instruction}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
