import classNames from 'classnames';
import './Button.css'

export default function Button({ type, label, variant = 'default', color, disabled = false }) {
    return <button type={type} className={'button' + ' ' + classNames(variant, color)} disabled={disabled}> {label} </button>
}