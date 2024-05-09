import Title from "../title/title";
import CareCSS from "./careInstructions.module.css";

export default function CareInstructions({ careInstructions }) {
  return (
    <>
      <Title title="Care Instructions" />
      <ul className={CareCSS.careInstructions}>
        {careInstructions.map((instruction) => (
          <li className={CareCSS.instructionItem} key={instruction.instruction}>
            <img
              className={CareCSS.image}
              //   src={instruction.image}
              src="./washlabel.png"
              alt="Instruction"
            />

            
            <span>{instruction.instruction}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
