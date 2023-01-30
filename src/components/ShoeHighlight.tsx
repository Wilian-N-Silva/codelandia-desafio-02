import { Shoe } from "../interfaces/shoe_interface";

export function ShoeHighlight({ name, path }: Shoe) {
    return (
        <li>
            <img src={`images/products/${path}`} alt={name} />
            <span>{name}</span>
        </li>
    )
}