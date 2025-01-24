import styles from './image.module.scss';
import cx from 'classnames';

interface ImageProps {
    src: string;
    alt?: string;
}

const Image = ({ 
    src
}: ImageProps) => {
    return(
        <img
        className={cx(styles['image'])}
        src={src}/>
    );
}

export default Image;