import './Header.css'
import MyLogo from '../../assets/logo.svg'
import Button from '../ui-kit/Button'
import TextField from '../ui-kit/TextField'

export default function Header() {
    return <header className="header">
        <div className='hero'>
            <div className='logo'>
                <img src={MyLogo}></img>
            </div>
            Book store
        </div>
        <div className='search'>
            <Button type={'button'} color={'primary'} label={'Catalog'} />
            <TextField placeholder={'Find a book'} />
        </div>
        <div className='actions'>
            <div> User </div>
            <div> Cart </div>
        </div>
    </header>
}