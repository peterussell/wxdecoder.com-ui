import React, { Component } from 'react';
import { connect } from 'react-redux';

class MetarList extends Component {
  renderMetarDetails(metar) {
    let output = [];
    for (let k in metar) {
      let value = metar[k].decoded;

      if (k === 'raw_metar') { // Skip raw_metar
        // TODO: fix this in the REST API (raw_metar shouldn't be in decoded)
        continue;
      } else if (Array.isArray(value)) { // Arrays
        if (value.length === 0) { continue; }
        output.push(`${k}: ` + value.join(', '));
      } else if (k === 'obs_datetime') { // Special case for obs_datetime
        // TODO: fix this in the REST API
        output.push(`date: ${value.date}`);
        output.push(`time: ${value.time}`);
      } else if (value) { // Render any non-empty key/vals
        output.push(`${k}: ${metar[k].decoded}`);
      }
    }

    return (
      <div>
        {output.map(val => <div key={val}>{val}</div>)}
      </div>
    )
  }

  render() {
    if (!this.props.metar) {
      return <div></div>;
    }
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td width={200}>Airport ID:</td>
            <td>{ this.props.metar.icao_id }</td>
          </tr>
          <tr>
            <td>Raw METAR:</td>
            <td>{ this.props.metar.raw_metar }</td>
          </tr>
          <tr>
            <td>Decoded METAR:</td>
            <td>
              {this.renderMetarDetails(this.props.metar.decoded_metar)}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { metar: state.metar };
}

export default connect(mapStateToProps)(MetarList);
