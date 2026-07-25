import type { ComponentPropsWithoutRef } from 'react'
import { classNames } from '../../utils/classNames'
import styles from './Button.module.css'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'active'
  fullWidth?: boolean
}

export function Button({
  variant = 'default',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        variant === 'active' && styles.active,
        fullWidth && styles.fullWidth,
        className,
      )}
      {...props}
    />
  )
}
