import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode,
   asChild?: boolean,
}

export function Button({children, asChild, className, ...props}: ButtonProps){
   const Comp = asChild ? Slot : 'button'

   return(
      <Comp
         className={clsx(
            'text-gray-900 py-3 px-4 bg-cian-500 rounded font-semibold text-sm w-full transition-colors hover:bg-cian-300 focus:ring-2 ring-black ', 
            className
        )} {...props}
      >
         {children}
      </Comp>
   )
}