/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

function Header({
  languageCode,
  address,
  addressHref,
  companyBuy,
  companyBuyHref,
  sell,
  sellHref,
  pvsMap,
  pvsMapHref,
  pvs,
  pvsHref,
  catalogName,
  catalogHref,
}) {
  return (
    <header id="header" className="w-layout-blockcontainer header w-container">
      <UpperHeader
        addressHref={addressHref}
        address={address}
        companyBuyHref={companyBuyHref}
        companyBuy={companyBuy}
        sellHref={sellHref}
        sell={sell}
        pvsMap={pvsMap}
        pvsMapHref={pvsMapHref}
        pvsHref={pvsHref}
        pvs={pvs}
        languageCode={languageCode}
      />
      <LowerHeader catalogName={catalogName} catalogHref={catalogHref} />
    </header>
  );
}

export default Header;
