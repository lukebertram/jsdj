import PropTypes from "prop-types";
import Select from "react-select";
// import "react-select/dist/react-select.css";
import "./../stylesheets/PitchValue.css";

function PitchValue(props) {
  const selectedOption = { value: props.pitch, label: props.pitch };
  const value = selectedOption && selectedOption.value;
  // const options = enumerables.map(e => ({
  //   value: e,
  //   label: e
  // }));
  // const pitch = props.pitch ? props.pitch : '---';
  // console.log(value);
  return (
    <Select
      type="text"
      defaultInputValue={value}
      onChange={(newPitch) => {
        props.onPitchValueChange(newPitch.value, props.position);
      }}
      autosize={true}
      searchable
      arrowRenderer={null}
      placeholder="---"
      clearable={false}
      options={[
        { value: "C2", label: "C2" },
        { value: "C#2", label: "C#2" },
        { value: "D2", label: "D2" },
        { value: "D#2", label: "D#2" },
        { value: "E2", label: "E2" },
        { value: "F2", label: "F2" },
        { value: "F#2", label: "F#2" },
        { value: "G2", label: "G2" },
        { value: "G#2", label: "G#2" },
        { value: "A2", label: "A2" },
        { value: "A#2", label: "A#2" },
        { value: "B2", label: "B2" },
        { value: "C3", label: "C3" },
        { value: "C#3", label: "C#3" },
        { value: "D3", label: "D3" },
        { value: "D#3", label: "D#3" },
        { value: "E3", label: "E3" },
        { value: "F3", label: "F3" },
        { value: "F#3", label: "F#3" },
        { value: "G3", label: "G3" },
        { value: "G#3", label: "G#3" },
        { value: "A3", label: "A3" },
        { value: "A#3", label: "A#3" },
        { value: "B3", label: "B3" },
        { value: "C4", label: "C4" },
        { value: "C#4", label: "C#4" },
        { value: "D4", label: "D4" },
        { value: "D#4", label: "D#4" },
        { value: "E4", label: "E4" },
        { value: "F4", label: "F4" },
        { value: "F#4", label: "F#4" },
        { value: "G4", label: "G4" },
        { value: "G#4", label: "G#4" },
        { value: "A4", label: "A4" },
        { value: "A#4", label: "A#4" },
        { value: "B4", label: "B4" },
        { value: "C5", label: "C5" },
        { value: "C#5", label: "C#5" },
        { value: "D5", label: "D5" },
        { value: "D#5", label: "D#5" },
        { value: "E5", label: "E5" },
        { value: "F5", label: "F5" },
        { value: "F#5", label: "F#5" },
        { value: "G5", label: "G5" },
        { value: "G#5", label: "G#5" },
        { value: "A5", label: "A5" },
        { value: "A#5", label: "A#5" },
        { value: "B5", label: "B5" },
        { value: "C6", label: "C6" },
        { value: "C#6", label: "C#6" },
        { value: "D6", label: "D6" },
        { value: "D#6", label: "D#6" },
        { value: "E6", label: "E6" },
        { value: "F6", label: "F6" },
        { value: "F#6", label: "F#6" },
        { value: "G6", label: "G6" },
        { value: "G#6", label: "G#6" },
        { value: "A6", label: "A6" },
        { value: "A#6", label: "A#6" },
        { value: "B6", label: "B6" },
        { value: "C7", label: "C7" },
        { value: "C#7", label: "C#7" },
        { value: "D7", label: "D7" },
        { value: "D#7", label: "D#7" },
        { value: "E7", label: "E7" },
        { value: "F7", label: "F7" },
        { value: "F#7", label: "F#7" },
        { value: "G7", label: "G7" },
        { value: "G#7", label: "G#7" },
        { value: "A7", label: "A7" },
        { value: "A#7", label: "A#7" },
        { value: "B7", label: "B7" },
        { value: "C8", label: "C8" },
        { value: "C#8", label: "C#8" },
        { value: "D8", label: "D8" },
        { value: "D#8", label: "D#8" },
        { value: "E8", label: "E8" },
        { value: "F8", label: "F8" },
        { value: "F#8", label: "F#8" },
        { value: "G8", label: "G8" },
        { value: "G#8", label: "G#8" },
        { value: "A8", label: "A8" },
        { value: "A#8", label: "A#8" },
        { value: "B8", label: "B8" },
      ]}
    />
  );
}

PitchValue.propTypes = {
  position: PropTypes.number,
  pitch: PropTypes.string,
  onPitchValueChange: PropTypes.func,
};
export default PitchValue;
