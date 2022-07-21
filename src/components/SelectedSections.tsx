import { useContext } from "react";
import { Context } from "../context/Context";
import Selected from "./Selected";

export default function SelectedSections() {
  const { State } = useContext(Context)
  const { Sections } = State;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {Sections.map((interest) => (
        <Selected key={interest.section} section={interest.section} value={interest.value} />
      ))}
    </div>
  )
}