import React from 'react';

import {UIString} from '../i18n';

interface Props {
  handleVersionSelect: (ver: number) => void;
  gameVer: number;
}
export class VersionSelect extends React.PureComponent<Props> {
  render() {
    const {gameVer} = this.props;
    const ver = gameVer.toFixed(0);
    return (
      <label>
        {UIString.gameVer}
        <select className="gameVersion" onChange={this.handleChange}>
          <option value="14" selected={ver === "14"}>DX Plus</option>
          <option value="15" selected={ver === "15"}>DX Splash</option>
        </select>
      </label>
    );
  }

  private handleChange = (evt: React.FormEvent<HTMLSelectElement>) => {
    this.props.handleVersionSelect(parseInt(evt.currentTarget.value));
  }
}
