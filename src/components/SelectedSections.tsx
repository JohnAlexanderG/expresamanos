import Selected from "./Selected";

export default function SelectedSections({ list, options }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '500px' }}>
      {list.map((item, index) => {
        return (
          <div key={item.section}>
            <span>{options[index]}</span>
            <Selected section={item.section} value={item.value} />
          </div>
        );
      })}
    </div>
  )
}