var FishTable = () => (
  <table>
    <tbody>
      <FishTableRow data={fishData[0]}/>
      <FishTableRow data={fishData[1]}/>
      <FishTableRow data={fishData[2]}/>
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
