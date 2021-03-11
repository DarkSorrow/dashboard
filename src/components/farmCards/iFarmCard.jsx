/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useContext } from 'react';
import HarvestContext from '../../Context/HarvestContext';
import { FarmCardContainer, UnderlyingBalanceContainer } from './FarmCardStyles';
import logo from '../../assets/logo.png';

export default function IFarmCard() {
  const { state, prettyBalance } = useContext(HarvestContext);

  return (
    <FarmCardContainer>
      <div className="farm_card_title">{state.iFarmInfo.name}</div>
      <div className="farm_card_content">
        <div className="card_property_section farm_earning">
          <label className="card_property_title">Earning</label>
          {/* TODO: Add icon here */}
          <p className="card_property_value">
            <span role="img" aria-label="green checkmark">
              ✅
            </span>
          </p>
        </div>
        <div className="card_property_section farm_staked">
          <label className="card_property_title">Staked</label>
          <p className="card_property_value">
            {parseFloat(state.iFarmInfo.balanceWallet).toFixed(6)}
          </p>
        </div>
        <div className="card_property_section farm_claimable">
          <label className="card_property_title">Claimable</label>
          <p className="card_property_value">N/A</p>
        </div>
        <div className="card_property_section farm_unstaked">
          <label className="card_property_title">Unstaked</label>
          <p className="card_property_value">N/A</p>
        </div>
        <div className="card_property_section farm_pool_percentage">
          <label className="card_property_title">% of Pool</label>
          <p className="card_property_value">N/A</p>
        </div>
        <div className="card_property_section farm_value">
          <label className="card_property_title">Value</label>
          <p className="card_property_value">{prettyBalance(state.iFarmInfo.usdValueOf)}</p>
        </div>
      </div>
      <UnderlyingBalanceContainer>
        <div className="underlying_balance_label">
          <h4>Underlying Balance:</h4>
        </div>
        <span className="underlying_balance_value">
          <div className="farm_underlying">
            {parseFloat(state.iFarmInfo.underlayingTokenOwned).toFixed(6)}
            <img src={logo} alt="Farm tractor" />
          </div>
        </span>
      </UnderlyingBalanceContainer>

      <div className="card_input_area"></div>
    </FarmCardContainer>
  );
}
