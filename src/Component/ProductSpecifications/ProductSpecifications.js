import React from 'react'

export default function ProductSpecifications(props) {
    return (
        <>
            <div
  className=""
  style={{
    border: "1px solid #ebe9e9",
    borderRadius: 4,
    paddingLeft: 5,
    paddingBlock: 10
  }}
>
  <h6 className="ps-3">Specifications</h6>
  <hr />
  <p>
    <b>SKU</b>:{props.sku}
  </p>
  <p>
    <b>Model</b>:{props.model}
  </p>
  <p>
    <b>Production Country</b>:{props.country}
  </p>
  <p>
    <b>Size (L x W x H cm)</b>:{props.size}
  </p>
  <p>
    <b>color</b>:{props.color}
  </p>
  <p>
    <b>Main Material</b>:{props.material}
  </p>
</div>

            
        </>
    )
}
