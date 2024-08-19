/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

function Button({href, content}) {
    return (
      <a href={href} className="button w-button">
        {content}
      </a>
    )
  }
  
  export default Button;