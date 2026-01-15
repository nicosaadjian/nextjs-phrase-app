"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "./ui/card";

type Phrase = {
  id: string;
  name: string;
  phrase: string;
};

type Props = {
  name: string;
  phrase: string;
};


export default function PhraseForm({ name, phrase }: Props) {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const isInitialized = useRef(false);

  function clearStorage() {
    try {
      localStorage.removeItem("phrases");
      setPhrases([]); // sincroniza el estado
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  }

  // Cargar desde localStorage (solo una vez)
  useEffect(() => {
    if (isInitialized.current) return;
    
    try {
      const stored = localStorage.getItem("phrases");
      if (stored) {
        const parsed = JSON.parse(stored);
        // Usar queueMicrotask para evitar sincronía
        queueMicrotask(() => setPhrases(parsed));
      }
    } catch (error) {
      console.error("Error parsing localStorage:", error);
    }
    
    isInitialized.current = true;
  }, []);

  // Guardar en localStorage cuando cambien las frases
  useEffect(() => {
    if (!isInitialized.current) return;
    
    try {
      localStorage.setItem("phrases", JSON.stringify(phrases));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [phrases]);

  function addPhrase(p: Omit<Phrase, "id">) {
    setPhrases(prev => [
      ...prev,
      { ...p, id: crypto.randomUUID() },
    ]);
  }

  return (
    <>
      <div className="flex items-center">
        <Button
        className="m-2"
        onClick={() =>
          addPhrase({ name, phrase })
        }
      >
        Save
      </Button>

      <Button
        variant="secondary"
        onClick={clearStorage}
      >
        Clear phrases
      </Button>
      </div>
      
      <div className="pt-4 grid grid-cols-3 gap-8">
        {phrases
        .filter(p => p.name)
        .map(p => (
          <Card key={p.id} className="border-2 border-slate-900">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{p.phrase}</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="secondary"
                onClick={() => {setPhrases(prev => prev.filter(item => item.id !== p.id))}}
                >Clear card</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}