/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function UpperHeader({
  languageCode,
  address,
  addressHref,
  job,
  jobHref,
  companyBuy,
  companyBuyHref,
  sell,
  sellHref,
  pvsMap,
  pvsMapHref,
  pvs,
  pvsHref,
}) {
  return (
    <header className="hblock1">
      <a href="#" className="language w-inline-block">
        <img
          src={`https://flagsapi.com/${languageCode}/flat/64.png`}
          loading="lazy"
          width="28"
          alt=""
        />
      </a>
      <div className="links">
        <a href={addressHref} className="address w-inline-block">
          <img src={address} loading="lazy" alt="" className="image-13" width="146">
          </img>
        </a>
        <a href={jobHref} className="address w-inline-block">
          <img src={job} loading="lazy" alt="" className="image-15" width="146">
          </img>
        </a>
        <a href={companyBuyHref} className="address w-inline-block">
          <img src={companyBuy} loading="lazy" alt="" className="image-16" width="146">
          </img>
        </a>
        <a href={sellHref} className="address w-inline-block">
          <img src={sell} loading="lazy" alt="" className="image-17" width="146">
          </img>
        </a>
        <a href={pvsMapHref} className="address w-inline-block">
          <img src={pvsMap} loading="lazy" alt="" className="image-18" width="146">
          </img>
        </a>
        <a href={pvsHref} className="address w-inline-block">
          <img src={pvs} loading="lazy" alt="" className="image-19" width="146">
          </img>
        </a>
      </div>
      <a
        data-w-id="e1d9bb1f-13be-a0bf-43fa-d9919f8ad4a1"
        href="#"
        className="theme w-inline-block"
      >
        <div data-w-id="e1d9bb1f-13be-a0bf-43fa-d9919f8ad4a2" className="tbtn">
          <div className="bcircle">
            <img
              src="https://cdn.prod.website-files.com/66ab7b46556019f9117db3ca/66abb9ed01d209024e1aff31_sun%203.svg"
              loading="lazy"
              width="13"
              alt=""
            />
          </div>
        </div>
      </a>
    </header>
  );
}

export default UpperHeader;
