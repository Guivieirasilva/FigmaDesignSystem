import { FormEvent, useState } from "react";

import { Checkbox } from "@radix-ui/react-checkbox";

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

import { Envelope, Lock } from 'phosphor-react'

import { Logo } from "../Logo";

export function Signin(){

   const [isUserSignedIn, setIsUserSignedIn] = useState(false)

   function handleSignIn(event: FormEvent){
      event.preventDefault()
      setIsUserSignedIn(true)
   }

   return(
      <div className='w-screen h-screen text-gray-100 bg-gray-900 flex flex-col items-center justify-center'>
      <header className='flex flex-col items-center'>
      <Logo className='w-[105px] h-[95px]'/>

      <Heading size='lg' className='mt-4'>
        Ignite Lab
      </Heading>

      <Text size='lg' className='text-gray-400 mt-1'>
        Faça Login e comece a usar!
      </Text>
      </header>
      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
         {isUserSignedIn && <Text>Login Realizado!</Text>}
        <label htmlFor='email' className='flex flex-col gap-3' >
          <Text className='font-semibold' >Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id='email' placeholder='Digite seu Email' />
          </TextInput.Root>
        </label>

        <label htmlFor='passoword' className='flex flex-col gap-3' >
          <Text className='font-semibold' >Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />

          <Text size='sm' className='text-gray-200' >
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4 '>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm' >
          <a href='' className='text-gray-400 underline transition-colors hover:text-gray-200' >Não possui conta? Crie uma agora!</a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline transition-colors hover:text-gray-200'  >Esqueceu sua senha</a>
        </Text>
        


      </footer>
    </div>
   )
}