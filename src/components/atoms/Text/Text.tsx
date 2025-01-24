import { cva, VariantProps } from "class-variance-authority";
import cx from 'classnames';
import styles from './text.module.scss';

const textVariants = cva('', {
    variants: {
      variant: {
        small: 'small',
        medium: 'medium',
        large: 'large'
      },
    },
    defaultVariants: {
      variant: 'small',
    },
  });

interface TextProps extends VariantProps<typeof textVariants>{
    text: string;
    className?: string
}

const Text = ({
    text,
    className,
    variant
}: TextProps) => {
    return(
        <p
        className={cx(styles['text'],
            styles['text--' + textVariants({variant})],
            className
        )}>
            {text}
        </p>
    );
}

export default Text;