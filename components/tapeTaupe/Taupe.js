import Image from 'next/image';
import Button from '@mui/material/Button';

export default function Taupe({isUp, onClick}) {
    return (
        <Button onClick={onClick}>
            {isUp && <Image src='/up.png' alt='taupe' height={150} width={160}/>}
            {!isUp && <Image src='/down.png' alt='taupe' height={150} width={160}/>}
        </Button>
    )
}