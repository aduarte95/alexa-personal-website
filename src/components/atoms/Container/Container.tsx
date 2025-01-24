import { cva, VariantProps } from 'class-variance-authority';
import cx from 'classnames';
import styles from './container.module.scss';
import { ReactNode } from 'react';

const containerVariants = cva('', {
    variants: {
      variant: {
        fullWidth: 'container--full-width',
        narrow: 'container--narrow',
      },
    },
    defaultVariants: {
      variant: 'fullWidth',
    },
  });

interface ContainerProps extends VariantProps<typeof containerVariants> {
    className?: string;
    children?: ReactNode
}
   
const Container = ({
    children,
    variant,
    className
}: ContainerProps) => {
    return(
        <div 
            className={
                cx(styles['container'],
                    styles[containerVariants({variant})],
                    className
                )}>
                    {children}
        </div>
    );
}

export default Container;