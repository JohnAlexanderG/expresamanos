import { useContext } from 'react';
import { Context } from "../context/Context";
import Selected from "./Selected";

export default function SelectedSections({ options }) {
  const { State } = useContext(Context)
  const { Sections } = State;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '500px' }}>
      {Sections.map((interest, index) => {
        return (
          <>
            <span>{options[index]}</span>
            <Selected key={interest.section} section={interest.section} value={interest.value} />
          </>
        );
      })}
    </div>
  )
}