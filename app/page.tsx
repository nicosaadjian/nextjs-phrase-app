"use client";

import { useState } from "react";
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import PhraseForm from '../components/phraseForm';
import { ThemeToggle } from '../components/themeToggle';
import Form from "next/form";
import Link from "next/link";

export default function Home(){

  const [name, setName] = useState("");
  const [phrase, setPhrase] = useState("");

  return (
    <>
      <div className='flex flex-col justify-center items-center p-4'>
        <div className='flex w-full justify-between items-center'>
          <Link
            href="https://github.com/nicosaadjian/nextjs-phrase-app"
            target="_blank"
          >
            <Button className="m-2">Code</Button>
          </Link>
            
          <ThemeToggle />
        </div>
        <h1 className='flex justify-center items-center text-2xl p-4'>
          Phrase App - Let the world know what you have to say
        </h1>
        <Form action="" className='flex flex-cols items-center p-4 w-1/2 gap-4'>
          <div className='flex w-full gap-4'>
            <Input
              placeholder="Name"
              value={name}
              className="border-3 border-slate-900"
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="Phrase"
              value={phrase}
              className="border-3 border-slate-900"
              onChange={(e) => setPhrase(e.target.value)}
            />
          </div>
        </Form>
      <PhraseForm name={name} phrase={phrase} />
      </div>
      <div className="flex w-full justify-between items-center">
        <footer className="m-auto">
          Done with ❤️ by <Link 
          href="https://github.com/nicosaadjian" 
          target="_blank"
          className="font-bold"
          >@nicosaadjian</Link>
        </footer>
      </div>
    </>
  );
}