import {Link} from 'react-router-dom'

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

import { Envelope, Lock } from 'phosphor-react'

import { Logo } from "../Logo";

export function Register(){

   return(
    <>
      <header className='flex flex-col items-center'>
      <Logo className='w-[105px] h-[95px]'/>

      <Heading size='lg' className='mt-4'>
        Ignite Lab
      </Heading>

      <Text size='lg' className='text-gray-400 mt-1'>
        Faça seu registro aqui!
      </Text>
      </header>
      <form  className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3' >
          <Text className='font-semibold' >Cadastre seu e-mail</Text>
          <TextInput.Root >
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id='email' placeholder='Digite seu Email' />
          </TextInput.Root>
        </label>

        <label htmlFor='passoword' className='flex flex-col gap-3' >
          <Text className='font-semibold' >Crie uma senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='********' />
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

        <Button type='submit' className='mt-4' onClick={(e) => e.preventDefault()}>Cadastrar</Button>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <Link to='/' className='text-gray-400 underline transition-colors hover:text-gray-200'  >Já possui um cadastro?</Link>
        </Text>
      </footer>
    </>
   )
}