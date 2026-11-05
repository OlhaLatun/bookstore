import './TextField.css'

export default function TextField({ placeholder, value }) {
    return <input type="text" placeholder={placeholder} value={value} className="text-field"></input>
}